<template>
  <div class="weiz-public">
    <div class="copyright">
      <div class="copyright__author">
        <span class="copyright-meta">
          <i class="icon-user"></i>文章作者:
        </span>
        <span class="copyright-info">
          <a :href="siteHref">weiz</a>
        </span>
      </div>
      <div class="copyright__type">
        <span class="copyright-meta">
          <i class="icon-link"></i>文章链接:
        </span>
        <span class="copyright-info">
          <a :href="postHref">{{ postHref }}</a>
        </span>
      </div>
      <div class="copyright__notice">
        <span class="copyright-meta">
          <i class="icon-cc"></i>版权声明:
        </span>
        <span class="copyright-info">
          本站文章除特别声明外，均采用 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh" target="_blank">BY-NC-SA 4.0</a> 许可协议，
          转载请注明来自 <a :href="siteHref">{{ theme.siteTitle }}</a>！
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { onMounted, ref } from 'vue'

const { site, theme } = useData()

const siteHref = ref('')
const postHref = ref('')

onMounted(() => {
  const domain = window.location.origin
  siteHref.value = domain + site.value.base
  postHref.value = domain + window.location.pathname
})
</script>

<style lang="scss" scoped>
.weiz-public {
  .copyright {
    position: relative;
    margin-bottom: 14px;
    padding: 10px 16px;
    border: solid 1px var(--vp-c-divider);
    border-radius: var(--weiz-border-radius);
    &::before {
      content: var(--weiz-icon-public-main);
      display: inline-block;
      position: absolute;
      top: 6px;
      right: 6px;
      color: currentColor;
      width: 20px;
      width: 20px;
    }
    &:hover {
      box-shadow: var(--vp-shadow-1);
    }
  }
  .copyright-meta {
    color: var(--weiz-primary-color);
    font-weight: bold;
  }
  .copyright-meta i {
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: top;
    color: currentColor;
    margin-top: 4px;
    margin-right: 4px;
    &.icon-user {
      content: var(--weiz-icon-user-main);
    }
    &.icon-link {
      content: var(--weiz-icon-link-main);
    }
    &.icon-cc {
      content: var(--weiz-icon-cc-main);
    }
  }
  .copyright-info {
    padding-left: 6px;
  }
  .copyright-info a {
    text-decoration: underline;
    word-break: break-word;
    color: var(--vp-c-text-6);
    font-weight: 500;
    &:hover {
      color: var(--weiz-primary-color);
      text-decoration: none;
    }
  }
}
</style>
