<template lang="pug">
.skill-table
  table
    thead
      tr
        th
        td(v-for="year in years" :key="year" colspan="12") {{ year }}
    tbody
      tr
        th JavaScript
        template(v-for="year in years")
          td(v-for="i in 12" :key="year * i")
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup () {
    return {
      years: [2016, 2017, 2018, 2019, 2020, 2021],
      skills: [
        {
          name: "JavaScript",
          actives: {
          }
        }
      ]
    }
  }
})
</script>

<style lang="stylus" scoped>
.skill-table
  width: 100%
  table-layout: fixed
  overflow: scroll
  $month-width = 20px
  table
    width: 100%
    min-width: 1200px
    border-collapse: collapse
    border-right: 1px solid black
    th, td
      border: 1px solid black
    th
      position: sticky
      background-color: white
      width: 200px
      height: 20px
      left: 0
      &:before
        content: ""
        position: absolute
        top: -1px
        left: -1px
        width: 100%
        height: 100%
        border: 1px solid black
    thead
      th
        border: none
      td
        width: "calc(12 * %s)" % $month-width
    tbody
      td
        width: $month-width
        height: 30px
</style>
