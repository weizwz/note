// .vitepress/theme/Layout/toggleAppearance.ts
import { nextTick, provide } from 'vue'
// 增加dark和light时候的动效
function enableTransitions() {
    return (
        'startViewTransition' in document &&
        window.matchMedia('(prefers-reduced-motion: no-preference)').matches
    )
}
export function toggleDark(isDark) {
    provide(
        'toggle-appearance',
        async ({ clientX: x, clientY: y }: MouseEvent) => {
            //如果不支持动效直接切换
            if (!enableTransitions()) {
                isDark.value = !isDark.value
                return
            }
            document.documentElement.style.setProperty('--darkX', x + 'px');
            document.documentElement.style.setProperty('--darkY', y + 'px');
            // 原生的视图转换动画 https://developer.mozilla.org/zh-CN/docs/Web/API/Document/startViewTransition
            // pnpm add -D @types/dom-view-transitions 解决 document.startViewTransition 类型错误的问题
            await document.startViewTransition(async () => {
              isDark.value = !isDark.value
              await nextTick()
            }).ready
        }
    )
}