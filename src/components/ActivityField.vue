<template lang="pug">
el-tooltip(v-if="activity" popper-class="activity-content")
  template(slot="content")
    .content
      p {{ activity.content }}
      .link(v-for="link in activity.links" :key="link.link")
        label {{ link.description }}
        a(:href="link.link" target="_blank") {{ link.link }}
      a(:href="activity.github" v-if="activity.github" target="_blank")
        img.github-icon(src="@/assets/github-white-icon.png")
    img.image(v-if="activity.image" :src="activity.image")
  .activity(:style="[widthFromActivityLength(activity.length), activityColor(activity.type)]")
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
    const activityColor = (type: "activity" | "work") => {
      if (type === "activity") return { backgroundColor: "#e49e61" }
      if (type === "work") return { backgroundColor: "yellow", border: "1px solid black" }
    }

    return {
      widthFromActivityLength,
      activityColor
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
  cursor: pointer
  z-index: 1
</style>

<style lang="stylus">
.activity-content
  max-width: 650px
  display: flex
  align-items: flex-start
  .content
    max-width: 300px
    a
      text-decoration: underline
    .link
      margin: 8px 0
      label
        display: block
        font-weight: bold
    .github-icon
      margin-top: 16px
      width: 50px
      height: 50px
  img
    margin-left: 8px
    width: 300px
    height: auto
</style>
