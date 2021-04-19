<template lang="pug">
el-tooltip(v-if="activity" popper-class="activity-content")
  template(slot="content")
    .content
      p {{ activity.content }}
      a(:href="activity.link" target="_blank") {{ activity.link }}
    img.image(v-if="activity.image" :src="activity.image")
  .activity(:style="widthFromActivityLength(activity.length)")
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'

import { Activity } from '@/data/skills'

export default defineComponent({
  props: {
    activity: {
      type: Object as PropType<Activity>,
      required: false
    }
  },
  setup () {
    const widthFromActivityLength = (length: number) => {
      return { width: `calc(${length * 100}% + ${(length - 1) * 1.5}px)` }
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
  left: 0
  top: 4px
  height: 10px
  border-radius: 5px
  background-color: #e49e61
  cursor: pointer
  z-index: 1
</style>

<style lang="stylus">
.activity-content
  max-width: 500px
  display: flex
  .content
    max-width: 300px
    p
      margin-bottom: 16px
    a
      text-decoration: underline
  img
    margin-left: 8px
    width: 200px
</style>
