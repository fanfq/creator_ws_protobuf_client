// program: LogUtil
// description: 骨灰级日志管理工具
// author: fangqing.fan@hotmail.com
// date: 2020-03-14


class LogUtil {
    private static isDebug = true;//调试级别，正式发布时候要设置为 true
    private static isInfo = true;//消息级别
    private static isWarn = true; //警告级别
    private static isError = true;//错误级别

    public static debug(obj, ...any){
        if (this.isDebug) {
            console.log(obj, any);
        } 
    }

    public static info(obj, ...any){
        if (this.isInfo) {
            console.log(obj, any);
        } 
    }

    public static warn(obj, ...any){
        if (this.isWarn) {
            console.log(obj, any);
        } 
    }

    public static error(obj, ...any){
        if (this.isError) {
            console.log(obj, any);
        } 
    }
}

(<any>window).LogUtil = LogUtil;