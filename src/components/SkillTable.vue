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
  $month-width = 16px
  table
    width: 1000px
    border-collapse: collapse
    th, td
      border: 1px solid black
    thead
      th
        border: none
      td
        width: "calc(12 * %s)" % $month-width
    tbody
      th
        position: sticky
        width: 280px
        height: 30px
        left: 0
      td
        width: $month-width
        height: 30px
</style>
