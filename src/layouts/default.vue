<template lang="pug">
el-container.default
  el-aside.aside(width="200px")
    router-link.logo(to="/")
      img.favicon(src="@/assets/favicon.skelton-white.png")
    router-link.link(to="/profile") Profile
    router-link.link(to="/works") Works
    router-link.link(to="/social") Social
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
    .link
      font-size: 28px
      color: #ddd
      font-weight: bold
      display: inline-block
      width: 100%
      padding: 8px 16px
      text-align: right
      &:hover
        background-color: #ddd
        color: #162324
      &.nuxt-link-active
        background-color: #349
    .logo
      display: flex
      justify-content: center
      margin-bottom: 20px
    .favicon
      width: 150px
</style>
