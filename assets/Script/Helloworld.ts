const {ccclass, property} = cc._decorator;

import { WebSock } from "./network/WebSock";
import { NetManager } from "./network/NetManager";
import { NetNode } from "./network/NetNode";
import { DefStringProtocol,NetData, INetworkTips } from "./network/NetInterface";

import * as protobuf from "./protobuf/compiled";
import FCEncoder from "./protobuf/bean/FCEncoder";
import FCDecoder from "./protobuf/bean/FCDecoder";
import {FCProtoBufProtocol} from "./protobuf/bean/FCProtoBufProtocol";

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

  
    start () {
        // init logic

        //websocet connection
        // this.wsc = new WebSocketClient();
        // this.wsc.connect(GlobalCfg.wsUrl); // 如: ws://localhost:4000/ws
        // window.setInterval(this.wsc.ping, 1000);


        //////////////////////////////////////////////

        // let netNode = new NetNode();//实例化一个网络节点
        // netNode.init(new WebSock(), new DefStringProtocol());//初始化
        // netNode.setResponeHandler(0, (cmd: number, data: NetData) => {
        //     LogUtil.debug(cmd,data);
        // });

        // //创建连接
        // NetManager.getInstance().setNetNode(netNode);
        // NetManager.getInstance().connect({ url: "ws://echo.websocket.org"});

        // //发送消息
        // NetManager.getInstance().send("hello");
        // NetManager.getInstance().send("world");




        ///////////////////
        //以下代码由Fred编写


        //创建第二个websocket连接 【Fred 自定义 protobuff】
        let fcNetNode = new NetNode();//实例化一个网络节点
        fcNetNode.init(new WebSock(), new FCProtoBufProtocol(), new NetTips());//初始化
        fcNetNode.setResponeHandler(protobuf.tutorial.MsgType.PONG, (cmd: number, data: NetData) => {
            LogUtil.debug(cmd,data);
            let fcMsg = new FCDecoder().decode(data);
            let msg = protobuf.tutorial.S2CMsg.decode(fcMsg.content);
            LogUtil.debug(msg.msg);
            LogUtil.debug(msg.code);
            LogUtil.debug(msg.s2c.timestamp);
        });

        //创建连接
        NetManager.getInstance().setNetNode(fcNetNode);
        NetManager.getInstance().connect({ url: GlobalCfg.wsUrl});


        

        //构造一个消息

        let nProtoID = protobuf.tutorial.MsgType.PING;

        //消息体构造
        let c2s = new protobuf.tutorial.C2S();
        c2s.timestamp = new Date().getTime(); 
        let c2sMsg =  new protobuf.tutorial.C2SMsg();
        c2sMsg.c2s = c2s;
        let bodyBuffer = protobuf.tutorial.C2SMsg.encode(c2sMsg).finish();

        //消息体封装
        let fcMsg = new FCEncoder().encode(nProtoID,bodyBuffer);

        //发送消息
        NetManager.getInstance().send(fcMsg.fcMsgBuf);

    }

    update(dt){
        //this.label.string = this.wsc.ttl;
    }
}


class NetTips implements INetworkTips {
    private getLabel(): cc.Label {
        let label = null;
        let node = cc.director.getScene().getChildByName("@net_tip_label");
        if (node) {
            label = node.getComponent(cc.Label);
        } else {
            node = new cc.Node("@net_tip_label");
            label = node.addComponent(cc.Label);
            node.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
        }
        return label;
    }

    connectTips(isShow: boolean): void {
        LogUtil.debug("connectTips Connecting...");
        if (isShow) {
            this.getLabel().string = "Connecting";
            this.getLabel().node.active = true;
        } else {
            this.getLabel().node.active = false;
        }
    }

    reconnectTips(isShow: boolean): void {
        LogUtil.debug("reconnectTips Reconnecting...");
        if (isShow) {
            this.getLabel().string = "Reconnecting";
            this.getLabel().node.active = true;
        } else {
            this.getLabel().node.active = false;
        }
    }

    requestTips(isShow: boolean): void {
        LogUtil.debug("requestTips Requesting...");
        if (isShow) {
            this.getLabel().string = "Requesting";
            this.getLabel().node.active = true;
        } else {
            this.getLabel().node.active = false;
        }
    }
}