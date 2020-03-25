// program: AudioClipUtil
// description: 音乐文件动态加载 
//https://docs.cocos.com/creator/manual/zh/scripting/load-assets.html?h=cc.loader.loadresdir 
//https://www.kuokuo666.com/2020/03/08/20200308/
// author: fangqing.fan@hotmail.com
// date: 2020-03-14


/** 音乐资源管理单例 */
export class AudioClipUtil {
    
    private static instance: AudioClipUtil

    /** resources 下音乐文件夹目录 */
    private static audioClipsUrl: string = 'music'

    /** 存放音频资源的 Map */
    private audioClipMap: Map<string, cc.AudioClip> = new Map()

    /** 构造函数私有化 */
    private constructor () { 
    }

    public static getInstance (): AudioClipUtil {
        if (!this.instance) {
            this.instance = new AudioClipUtil()
        }
        return this.instance
    }

    /** 获取音频资源 */
    public getAudioClip (clipName: string): cc.AudioClip {
        if (!this.audioClipMap.has(clipName)) {
            cc.warn(`未缓存的音频资源: ${clipName}`)
            return
        }
        return this.audioClipMap.get(clipName)
    }

    /** 获取一部分音频资源 */
    public getAudioClipsByArray (clipNames: string[]): cc.AudioClip[] {
        const audioClips: cc.AudioClip[] = []
        clipNames.forEach(clipName => {
            if (!this.audioClipMap.has(clipName)) {
                cc.warn(`未缓存的音频资源: ${clipName}`)
                return
            }
            audioClips.push(this.audioClipMap.get(clipName))
        })
        return audioClips
    }

    /** 缓存所有音频资源 */
    public preLoadAllAudioClips (callback: (progress: number, isCompleted: boolean) => void) {
        /** 加载代码，参数为 url，资源类型，进度回调，完成回调 */
        cc.loader.loadResDir(AudioClipUtil.audioClipsUrl, cc.AudioClip, (completedCount, totalCount, item) => {
            // 计算进度
            let progress = (completedCount / totalCount) * 100
            // 执行回调返回进度
            callback(progress, false)
            // 打印一下
            cc.log(`缓存音频资源中: ${completedCount}/${totalCount}`)
        }, (error, audioClips, urls) => {
            // 错误处理
            if (error) {
                cc.error(error)
                return
            }
            // 获取完毕后装入 Map
            audioClips.forEach(ele => {
                this.audioClipMap.set(ele.name, ele)
            })
            // 执行回调返回进度
            callback(100, true)
            cc.log('缓存完毕!')
        })
    }

    /** 单独缓存一部分音频 */
    public preloadAudioClipsByArray (clipNames: string[], callback: (progress: number, isCompleted: boolean) => void) {
        const urls = clipNames.map(clipName => `${AudioClipUtil.audioClipsUrl}/${clipName}`)
        cc.loader.loadResArray(urls, cc.AudioClip, (completedCount, totalCount, item) => {
            let progress = completedCount / totalCount * 100
            cc.log(`缓存音频资源中: ${completedCount}/${totalCount}`)
            callback(Math.floor(progress), false)
        }, (error, audioClips: cc.AudioClip[]) => {
            if (error) {
                cc.error(error)
                return
            }
            // 将预加载的所有音频存入map
            audioClips.forEach(ele => {
                this.audioClipMap.set(ele.name, ele)
            })
            cc.log('缓存完毕!')
            callback(100, true)
        })
    }

    /** 释放音频资源 */
    public releaseAudioClipsByArray (clipNames: string[]) {
        clipNames.forEach(clipName => {
            if (!this.audioClipMap.has(clipName)) {
                cc.warn(`未缓存的音频: ${clipName}`)
                return
            }
            cc.log(`释放了音频资源: ${clipName}`)
            cc.loader.releaseRes(`${AudioClipUtil.audioClipsUrl}/${clipName}`, cc.AudioClip)
            this.audioClipMap.delete(clipName)
        })
    }

    /** 释放所有音频资源 */
    public releaseAllAudioClips () {
        cc.log('释放了所有音频资源')
        cc.loader.releaseResDir(AudioClipUtil.audioClipsUrl, cc.AudioClip)
        this.audioClipMap.clear()
    }

}