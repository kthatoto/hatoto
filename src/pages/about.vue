<template lang="pug">
.about
  h1 About
  table.about__table
    tr
      th Name
      td Kazuto Takahashi
    tr
      th Handle Name
      td kthatoto (はと)
    tr
      th Live in
      td Tokyo

  p.skills__header Frontend Development
  table.skills__table
    tr
      th JavaScript
    tr
      th jQuery
    tr
      th React
    tr
      th Vue
    tr
      th React Native
    tr
      th Nuxt
    tr
      th TypeScript

  p Serverside Development
</template>

<style lang="stylus" scoped>
.about
  h1
    font-size: 24px
  h2
    font-size: 20px
  h3
    font-size: 18px
  &__table
    margin-bottom: 32px
    th
      text-align: right
      padding-right: 8px
      font-weight: normal
      font-size: 16px
    td
      font-weight: bold
      font-size: 24px

  .skills
    &__header
      margin-bottom: 4px
    &__table
      th
        text-align: right
        font-size: 24px
        padding-right: 8px
</style>
