// program:
// description:
// author: fangqing.fan@hotmail.com
// date:

class GlobalCfg {
    public static readonly httpUrl = "http://localhost:3000/";
    public static readonly wsUrl = "ws://192.168.253.6:9902/hall";
}

(<any>window).GlobalCfg = GlobalCfg;