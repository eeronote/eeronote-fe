<template>
  <div>
    <h1>{{allMessages.message}}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Test',
  data () {
    return {
      msg: 'This is Test'
    }
  },
  computed: {
    ...mapGetters({
      allMessages: 'allMessages'
    })
  },
  created () {
    this.$store.dispatch('fetchMessage', null)
  }

}
</script>
