// program:
// description:
// author: fangqing.fan@hotmail.com
// date:

import FCHeader from "./FCHeader";

export default class FCMsg {

    fcHeader: FCHeader;//消息头

    content: Uint8Array;//消息体

    fcMsgBuf:ArrayBuffer;//完整的传输用的消息体(消息头+消息体)

    constructor(fcHeader,content,fcMsgBuf){
        this.fcHeader = fcHeader;
        this.content = content;
        this.fcMsgBuf = fcMsgBuf;
    }

}
