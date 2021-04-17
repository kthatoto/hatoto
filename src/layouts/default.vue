<template lang="pug">
el-container.default
  el-aside.aside(width="200px")
    .logo
      img.favicon(src="@/assets/favicon.skelton-white.png")
    router-link(to="/") Profile
    router-link(to="/") Works
    router-link(to="/") Social
  el-main.main
    Nuxt
</template>

<style lang="stylus">
*
  margin: 0
  padding: 0
  box-sizing: border-box
  list-style: none
  text-decoration: none
  user-select: none
  &:visited
    color: inherit
</style>

<style lang="stylus" scoped>
.default
  height: 100vh
  .aside
    background-color: #162324
    padding-top: 20px
    monospaced-font()
    a
      font-size: 24px
      color: white
      display: inline-block
      width: 100%
      padding: 8px 16px
      text-align: right
    .logo
      display: flex
      justify-content: center
    .favicon
      width: 150px
</style>
