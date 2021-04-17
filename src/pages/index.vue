<template lang="pug">
.index
  img(src="@/assets/favicon.skelton.png")
  h1 hato.to
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup () {
    return {
      title: 'hatoto'
    }
  }
})
</script>

<style lang="stylus" scoped>
.index
  padding-top: 100px
  display: flex
  flex-direction: column
  align-items: center
  img
    width: 300px
  h1
    font-size: 64px
    text-align: center
    monospaced-font()
</style>
