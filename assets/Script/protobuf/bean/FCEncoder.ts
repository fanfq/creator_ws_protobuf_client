// program:
// description:
// author: fangqing.fan@hotmail.com
// date:

import FCHeader from "./FCHeader";
import FCMsg from "./FCMsg";

export default class FCEncoder {

    public encode(nProtoID,content){

        let nHeaderFlag_ = "FC"; //包头起始标志，固定为“FC”
        let nProtoID_ = nProtoID; //协议ID
        let nProtoFmtType_ = 0;//协议格式类型，0是Protobuf格式，1是Json 
        let nProtoVer_ = 0;// 协议版本，用于迭代兼容, 目前填0
        let nSerialNo_ = new Date().getTime();// 包序列号，用于对应请求包和回包, 要求递增或时间戳
        let nBodyLen_ = content.length;// 包长度
        let arrBodySHA1_ = "2cef026959a7f224bbf001874e2d955a3863a2fe";// 包体原始数据(解密后)的SHA1哈希值
        let arrReserved_ = "a234567890123456789z";// 预留的20字节

        //开始构建消息头
        let header86 = new Uint8Array(86);
        
        //添加flag
        let bufFlag = this._encode(nHeaderFlag_);
        header86.set(bufFlag,0);

        //添加协议ID
        let viewProtoID = new DataView(new ArrayBuffer(4));
        viewProtoID.setInt32(0, nProtoID_);
        let bufProtoID = new Uint8Array(viewProtoID.buffer);
        header86.set(bufProtoID, bufFlag.length);

        // 协议格式类型，0是Protobuf格式，1是Json 
        let view2 = new DataView(new ArrayBuffer(4));
        view2.setInt32(0, nProtoFmtType_);
        let bufFmtType = new Uint8Array(view2.buffer);
        header86.set(bufFmtType, bufFlag.length + bufProtoID.length);
        
        // 协议版本，目前0
        let view3 = new DataView(new ArrayBuffer(4));
        view3.setInt32(0, nProtoVer_);
        let bufProtoVer = new Uint8Array(view3.buffer);
        header86.set(bufProtoVer, bufFlag.length + bufProtoID.length + bufFmtType.length);

        // 包序列号，递增
        let view4 = new DataView(new ArrayBuffer(8));
        // view4.setBigInt64(0, BigInt(new Date().getTime()));
        view4.setInt32(0, nSerialNo_);
        let bufSerialNo = new Uint8Array(view4.buffer);
        header86.set(bufSerialNo, bufFlag.length + bufProtoID.length + bufFmtType.length + bufProtoVer.length);
        
        // 包长度
        let view5 = new DataView(new ArrayBuffer(4));
        view5.setInt32(0, nBodyLen_);
        let bufBodyLen = new Uint8Array(view5.buffer);
        header86.set(bufBodyLen, bufFlag.length + bufProtoID.length + bufFmtType.length + bufProtoVer.length + bufSerialNo.length);
        
        // 对数据进行SHA1加密
        //let strSha1 = arrBodySHA1_;// hex_sha1(JSON.stringify(jsonObj));
        // console.log("ProtoClient, Sha1 >>> ", strSha1);
        let bufSha1 = this._encode(arrBodySHA1_);//this._encode(/*"2cef026959a7f224bbf001874e2d955a3863a2fe"*/strSha1);
        header86.set(bufSha1, bufFlag.length + bufProtoID.length + bufFmtType.length + bufProtoVer.length + bufSerialNo.length + bufBodyLen.length);
        
        // 预留的20字节
        let bufReserved = this._encode(arrReserved_);
        header86.set(bufReserved, bufFlag.length + bufProtoID.length + bufFmtType.length + bufProtoVer.length + bufSerialNo.length + bufBodyLen.length + bufSha1.length);

        //截止到这里86位消息头构造完成
        
        //开始构造消息体
        let reqMsg = new Uint8Array(86 + content.length);
        reqMsg.set(header86,0);//消息头
        reqMsg.set(content,86);//消息体

        let fcHeader = new FCHeader(nHeaderFlag_,nProtoID_,nProtoFmtType_,nProtoVer_,nSerialNo_,nBodyLen_,arrBodySHA1_,arrReserved_);
        let fcMsg = new FCMsg(fcHeader,content,reqMsg.buffer);

        return fcMsg;
    }

    private _encode (string) {
        var bytes = [];
        for (var index = 0; index < string.length; index++) {
            var code = string.charCodeAt(index);
            var byte = code & 0xff;
            bytes.push(byte);
        }
        return bytes;
    }

}
