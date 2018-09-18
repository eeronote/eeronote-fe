<template>
  <div id="app">
    <div class="container">
      <Lnb></Lnb>
      <div class="contents">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
// import {mapGetters} from 'vuex'
import Lnb from '@/components/lnb/Lnb'
// var $ = require('jquery')

export default {
  name: 'App',
  components: {Lnb}
}
</script>

<style src="./assets/style/main.scss" lang="scss" ></style>
