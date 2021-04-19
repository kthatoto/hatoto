<template lang="pug">
el-tooltip(v-if="activity" popper-class="activity-content")
  template(slot="content")
    a(:href="activity.link" target="_blank") {{ activity.title }}
  .activity(:style="widthFromActivityLength(activity.length)")
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'

import { Activity } from '@/components/SkillTable.vue'

export default defineComponent({
  props: {
    activity: {
      type: Object as PropType<Activity>,
      required: false
    }
  },
  setup () {
    const widthFromActivityLength = (length: number) => {
      return { width: `calc(${100 * length}% - 8px)` }
    }

    return {
      widthFromActivityLength
    }
  }
})
</script>

<style lang="stylus" scoped>
.activity
  position: absolute
  left: 4px
  top: 4px
  height: 10px
  border-radius: 5px
  background-color: blue
  cursor: pointer
  z-index: 1
</style>

<style lang="stylus">
.activity-content
  text-decoration: underline
</style>
