<template lang="pug">
.skill-table
  table
    thead
      tr
        th Front-End
        td(v-for="(_months, year) in yearMonths" :key="year" colspan="12") {{ year }}
    tbody
      tr(v-for="skill in frontendSkills" :key="skill.name")
        th {{ skill.name }}
        template(v-for="(months, year) in yearMonths")
          td(
            v-for="month in months"
            :key="year * 100 + month"
            :style="{ backgroundColor: colorFromYearMonth(skill, year, month) }"
          )
            ActivityField(:activity="activityFromYearMonth(skill, year, month)")

    thead
      tr
        th Server-Side
        td(v-for="(_months, year) in yearMonths" :key="year" colspan="12") {{ year }}
    tbody
      tr(v-for="skill in serversideSkills" :key="skill.name")
        th {{ skill.name }}
        template(v-for="(months, year) in yearMonths")
          td(
            v-for="month in months"
            :key="year * 100 + month"
            :style="{ backgroundColor: colorFromYearMonth(skill, year, month) }"
          )
            ActivityField(:activity="activityFromYearMonth(skill, year, month)")

    thead
      tr
        th Others
        td(v-for="(_months, year) in yearMonths" :key="year" colspan="12") {{ year }}
    tbody
      tr(v-for="skill in otherSkills" :key="skill.name")
        th {{ skill.name }}
        template(v-for="(months, year) in yearMonths")
          td(
            v-for="month in months"
            :key="year * 100 + month"
            :style="{ backgroundColor: colorFromYearMonth(skill, year, month) }"
          )
            ActivityField(:activity="activityFromYearMonth(skill, year, month)")
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

import ActivityField from '@/components/ActivityField.vue'
import { frontendSkills, serversideSkills, otherSkills, Skill } from '@/data/skills'

const yearMonths = {
  2016: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  2017: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  2018: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  2019: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  2020: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  2021: [1, 2, 3, 4],
}

export default defineComponent({
  components: { ActivityField },
  setup () {
    const colorFromYearMonth = (skill: Skill, year: number, month: number) => {
      const yearLevels = skill.levels[year]
      if (!yearLevels) return
      const monthLevel = yearLevels[month - 1]
      if (!monthLevel) return
      const colors: { [level: number]: string } = { 1: '#9be9a8', 2: '#40c463', 3: '#30a14e', 4: '#216e39' }
      return colors[monthLevel]
    }

    const activityFromYearMonth = (skill: Skill, year: number, month: number) => {
      if (!skill.activities) return
      const yearActivities = skill.activities[year]
      if (!yearActivities) return
      const monthActivity = yearActivities[month]
      if (!monthActivity) return
      return monthActivity
    }

    return {
      yearMonths,
      frontendSkills,
      serversideSkills,
      otherSkills,
      colorFromYearMonth,
      activityFromYearMonth
    }
  }
})
</script>

<style lang="stylus" scoped>
.skill-table
  width: 100%
  table-layout: fixed
  overflow: scroll
  border-right: 1px solid black
  $month-width = 20px
  table
    width: 100%
    min-width: 1150px
    border-collapse: collapse
    th, td
      border: 1px solid black
      &:last-child
        border-right: none
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
        padding-right: 8px
        font-weight: normal
        text-align: right
        z-index: 1
      td
        width: "calc(12 * %s)" % $month-width
    tbody
      th
        padding-right: 8px
        text-align: right
        z-index: 3000
      td
        width: $month-width
        height: 30px
        position: relative
</style>
