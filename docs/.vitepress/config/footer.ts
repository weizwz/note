import type { DefaultTheme } from 'vitepress'

export const footer: DefaultTheme.Config['footer'] = {
  message: `<a target="_blank" href="https://vitepress.dev/" title="本站框架基于 VitePress_v1.5.0"><img src="https://img.shields.io/badge/Frame-VitePress-5C73E7?logo=vitepress&logoColor=fff"></a>
    <a target="_blank" href="https://www.algolia.com/" title="本站搜索服务使用 Algolia"><img src="https://img.shields.io/badge/Search-Algolia-003DFF?logo=Algolia"></a>
    <a target="_blank" href="https://github.com/" title="本站项目由 Github 托管"><img src="https://img.shields.io/badge/Website-Github-C92BCE?logo=GitHub"></a>
    <a target="_blank" href="https://cloud.tencent.com/" title="本站域名管理使用 腾讯云域名服务"><img src="https://img.shields.io/badge/Domain-Tencent-0099F7?logo=googlecloud&logoColor=fff"></a>
    <a target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" title="本站内容采用 CC BY-NC-SA 4.0 国际许可协议进行许可"><img src="https://img.shields.io/badge/Copyright-BY--NC--SA%204.0-d42328?logo=coursera&logoColor=fff"></a>`, 
  copyright: `Copyright © 2024${new Date().getFullYear() === 2024 ? '' : '-' + new Date().getFullYear()} weizwz`, 
}
