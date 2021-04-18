<template lang="pug">
.skill-table
  table
    thead
      tr
        th
        td(v-for="year in years" :key="year" colspan="12") {{ year }}
    tbody
      tr(v-for="skill in skills" :key="skill.name")
        th {{ skill.name }}
        template(v-for="year in years")
          td(v-for="month in 12" :key="year * 100 + i" :style="{ backgroundColor: colorFromYearMonth(skill.name, year, month) }")
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

interface Skill {
  name: string
  activities: { [year: number]: number[] }
}

export default defineComponent({
  setup () {
    const skills = [
      {
        name: "JavaScript",
        activities: {
          2016: [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 3, 2]
        }
      }
    ]

    const findSkillByName = (name: string): Skill | undefined => {
      return skills.find((skill: Skill) => skill.name === name)
    }

    const colorFromYearMonth = (skillName: string, year: number, month: number) => {
      const skill = findSkillByName(skillName)
      if (!skill) return
      const yearActivities = skill.activities[year]
      if (!yearActivities) return
      const monthActivity = yearActivities[month - 1]
      if (!monthActivity) return
      const colors = { 1: '#9be9a8', 2: '#40c463', 3: '#30a14e', 4: '#216e39' }
      return colors[monthActivity]
    }

    return {
      years: [2016, 2017, 2018, 2019, 2020, 2021],
      skills,
      colorFromYearMonth
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
    min-width: 1200px
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
        border: none
      td
        width: "calc(12 * %s)" % $month-width
    tbody
      td
        width: $month-width
        height: 30px
</style>
