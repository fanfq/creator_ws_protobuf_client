// program:
// description:
// author: fangqing.fan@hotmail.com
// date:


//GET:
//1.http://xx.com/xxx (without data)
//2.http://xx.com/xxx?x=1&y=2 (with data)
//POST
//1.http://xx.com/xxx (with data)
//{"x":1,"b":abv}

enum reqMethod{
    post = "POST",
    get = "GET",
}

class HttpReq {

    public static get(url,ok_call,fail_call){
        let xhr = new XMLHttpRequest();

        url = encodeURI(url);
        LogUtil.debug(url);

        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                let resp = xhr.responseText;
                LogUtil.debug(resp);
                if(resp){
                    let respJsonData = JSON.parse(resp);
                    //LogUtil.debug(resJson);
                    //回调请求返回的json数据
                    if(ok_call){
                        ok_call(respJsonData);
                    }
                }
            } else if(xhr.readyState == 4){
                LogUtil.warn("网络异常");
                if(fail_call){
                    fail_call();
                }
            }
        };

        xhr.open(reqMethod.get, url, true);
        //发送合适的请求头信息
        //xhr.setRequestHeader("Content-type", "application/json");
        xhr.send();
    }

    public static postJsonData(url,reqJsonData,ok_call,fail_call){
        let xhr = new XMLHttpRequest();

        url = encodeURI(url);
        LogUtil.debug(url);

        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                let resp = xhr.responseText;
                LogUtil.debug(resp);
                if(resp){
                    let respJsonData = JSON.parse(resp);
                    //LogUtil.debug(resJson);
                    //回调请求返回的json数据
                    if(ok_call){
                        ok_call(respJsonData);
                    }
                }
            } else if(xhr.readyState == 4){
                LogUtil.warn("网络异常");
                if(fail_call){
                    fail_call();
                }
            }
        };

        xhr.open(reqMethod.post, url, true);
        //发送合适的请求头信息
        xhr.setRequestHeader("Content-type", "application/json");
        if(reqJsonData){
            xhr.send(reqJsonData);
        }else{
            xhr.send();
        }
    }
   
}

(<any>window).HttpReq = HttpReq;