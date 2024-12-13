const pattern
    = /[a-zA-Z0-9_\u0392-\u03C9\u00C0-\u00FF\u0600-\u06FF\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF\u3040-\u309F\uAC00-\uD7AF]+/g
/**
 * 文字统计
 * @param data 字符串 
 * @returns 字符串长度
 */
export function countWord(data: string) {
    const m = data.match(pattern)
    let count = 0
    if (!m) {
        return 0
    }
    for (let i = 0; i < m.length; i += 1) {
        if (m[i].charCodeAt(0) >= 0x4E00) {
            count += m[i].length
        }
        else {
            count += 1
        }
    }
    return count
}

/**
 * 生成随机颜色 hsl
 * @returns 颜色
 */
export const randomColor = () => {
    return "hsl(" + 
        Math.round(Math.random() * 360) + "," + 
        Math.round(Math.random() * 100) + '%,' + 
        Math.round(Math.random() * 80) + '%)';
}