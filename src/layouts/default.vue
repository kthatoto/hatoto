<template lang="pug">
el-container.default
  el-aside.aside(width="200px")
    router-link.logo(to="/")
      img.favicon(src="@/assets/favicon.skelton-white.png")
    router-link.link(to="/about") About
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
  &::selection
    color: white
    background-color: navy
  &:visited
    color: inherit

body
  font-family: "Helvetica Neue",Arial,"Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-serif
</style>

<style lang="stylus" scoped>
.default
  height: 100vh
  .aside
    background-color: #162324
    padding-top: 20px
    .logo
      display: flex
      justify-content: center
      margin-bottom: 20px
    .favicon
      width: 150px

    .link
      font-size: 28px
      color: #ddd
      font-weight: bold
      display: inline-block
      width: 100%
      padding: 8px 16px
      text-align: right
      &:hover:not(.nuxt-link-active)
        background-color: #ddd
        color: #162324
      &.nuxt-link-active
        background-color: #349
        &:hover
          opacity: 0.9
</style>
