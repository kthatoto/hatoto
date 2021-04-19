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

  SkillTable
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

import SkillTable from '@/components/SkillTable.vue'

export default defineComponent({
  components: { SkillTable }
})
</script>

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
</style>
