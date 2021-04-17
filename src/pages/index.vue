<template lang="pug">
.index
  h1 {{ title }}
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
  h1
    font-size: 24px
</style>
