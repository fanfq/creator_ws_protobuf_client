// program:
// description:
// author: fangqing.fan@hotmail.com
// date:

import FCEncoder from "./FCEncoder";
import FCDecoder from "./FCDecoder";
import * as protobuf from "../compiled";

import { NetData, IProtocolHelper } from "../../network/NetInterface";

export class FCProtoBufProtocol implements IProtocolHelper{
    getHeadlen(): number {
        return 86;
    }
    getHearbeat(): NetData {
        let nProtoID = protobuf.tutorial.MsgType.PING;

        //消息体构造
        let c2s = new protobuf.tutorial.C2S();
        c2s.timestamp = new Date().getTime(); 
        let c2sMsg =  new protobuf.tutorial.C2SMsg();
        c2sMsg.c2s = c2s;
        let bodyBuffer = protobuf.tutorial.C2SMsg.encode(c2sMsg).finish();

        //消息体封装
        let fcMsg = new FCEncoder().encode(nProtoID,bodyBuffer);
        return fcMsg.fcMsgBuf;
    }
    getPackageLen(msg: NetData): number
    {
        return msg.toString().length;
    }
    checkPackage(msg: NetData): boolean {
        return true;
    }
    getPackageId(msg: NetData): number {
        let fcMsg = new FCDecoder().decode(msg);
        return fcMsg.fcHeader.nProtoID;
    }
}
