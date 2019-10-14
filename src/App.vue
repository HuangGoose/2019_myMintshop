<template>
<div id="app">
  <router-view></router-view>
  <FooterGuide v-show="$route.meta.showFooter"/>
</div>
</template>

<script>
// 引入组件
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  name: 'App',
  // 映射组件
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
