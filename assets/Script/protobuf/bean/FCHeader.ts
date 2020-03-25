// program:
// description: 
// author: fangqing.fan@hotmail.com
// date: 2020-03-17


export default class FCHeader {

    public nHeaderFlag:string = 'FC';//包头起始标志，固定为“FC”
    public nProtoID:number;//协议ID
    public nProtoFmtType:number;//协议格式类型，0是Protobuf格式，1是Json 
    public nProtoVer:number;// 协议版本，用于迭代兼容, 目前填0
    public nSerialNo:number;// 包序列号，用于对应请求包和回包, 要求递增或时间戳
    public nBodyLen:number;// 包体长度
    public arrBodySHA1:string;// 包体原始数据(解密后)的SHA1哈希值
    public arrReserved:string;// 预留的20字节

    constructor(nHeaderFlag,nProtoID,nProtoFmtType,nProtoVer,nSerialNo,nBodyLen,arrBodySHA1,arrReserved){
        this.nHeaderFlag = nHeaderFlag;
        this.nProtoID = nProtoID;
        this.nProtoFmtType = nProtoFmtType;
        this.nProtoVer = nProtoVer;
        this.nSerialNo = nSerialNo;
        this.nBodyLen = nBodyLen;
        this.arrBodySHA1 = arrBodySHA1;
        this.arrReserved = arrReserved;
    }
    
}
