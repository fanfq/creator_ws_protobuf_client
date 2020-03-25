// program:
// description: 签名算法
// author: fangqing.fan@hotmail.com
// date:

import {md5} from "./MD5";
import {sha1} from "./SHA1";

class SignUtil {

    public static encode(){

        let token = "";
        let uid = "";

        let ts = new Date().getTime();//unix timestamp

        //随机参数nonce
        let UDID = '';
        let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
        let maxPos = $chars.length;
        for (var i = 0; i < 16; i++) {
            UDID += $chars.charAt(Math.floor(Math.random() * maxPos));
        }

        let nonce = md5.hex_md5(encodeURIComponent(ts+UDID));

        var array = new Array(token, ""+ts, nonce, uid);
        array = array.sort();
        var array_str = array.join("");
        var sign = sha1.hash(array_str);

    }
   
}
