// program:
// description:
// author: fangqing.fan@hotmail.com
// date:

import FCHeader from "./FCHeader";
import FCMsg from "./FCMsg";

export default class FCDecoder {

    public decode(eventData) {

        let nHeaderFlag_ = ""; //包头起始标志，固定为“FC”
        let nProtoID_ = 0; //协议ID
        let nProtoFmtType_ = 0;//协议格式类型，0是Protobuf格式，1是Json 
        let nProtoVer_ = 0;// 协议版本，用于迭代兼容, 目前填0
        let nSerialNo_ = 0;// 包序列号，用于对应请求包和回包, 要求递增或时间戳
        let nBodyLen_ = 0;// 包长度
        let arrBodySHA1_ = "";// 包体原始数据(解密后)的SHA1哈希值
        let arrReserved_ = "";// 预留的20字节

        let header = eventData.slice(0, 86);
        // 按照协议字节，分割！！
        let flag = header.slice(0, 2);
        let protoId = header.slice(2, 6);
        let protoFmtType = header.slice(6, 10);
        let protoVer = header.slice(10, 14);
        let serialNo = header.slice(14, 22);
        let bodyLen = header.slice(22, 26);
        let sha1 = header.slice(26, 66);
        let reserved = header.slice(66, 86);
       
        // 按照协议规定的类型，转换成明文
        // let nHeaderFlag = this.mTextDecoder.decode(new Uint8Array(flag));
        nHeaderFlag_ = this._decode(new Uint8Array(flag));
        //LogUtil.debug(nHeaderFlag_);

        nProtoID_ = new DataView(protoId).getInt32(0);
        //LogUtil.debug(nProtoID_);
        nProtoFmtType_ = new DataView(protoFmtType).getInt32(0);
        nProtoVer_ = new DataView(protoVer).getInt32(0);
        // let nSerialNo = new DataView(serialNo).getBigInt64(0);
        nSerialNo_ = this._getUInt64(serialNo, 0, false);
        nBodyLen_ = new DataView(bodyLen).getInt32(0);
        arrBodySHA1_ = this._decode(new Uint8Array(sha1));
        arrReserved_ = this._decode(new Uint8Array(reserved));
        // 86后面的全是body
        let body = new Uint8Array(eventData.slice(86));

        //截止到这里消息解析完毕，现在开始封装fcmsg

        let fcHeader = new FCHeader(nHeaderFlag_,nProtoID_,nProtoFmtType_,nProtoVer_,nSerialNo_,nBodyLen_,arrBodySHA1_,arrReserved_);
        let fcMsg = new FCMsg(fcHeader,body,eventData);

        return fcMsg;
    }

    private _decode (array) {
        var string = "";
        for (var index = 0; index < array.length; index ++) {
            string += String.fromCharCode(array[index]);
        }
        return decodeURIComponent(string);
    }

    private _getUInt64 (data, offset, littleEndian) {
        var left = new DataView(data).getUint32(offset, littleEndian);
        var right = new DataView(data).getUint32(offset+4, littleEndian);
        return littleEndian ? left + 2 ** 32 * right : 2 ** 32 * left + right;
    }
}
