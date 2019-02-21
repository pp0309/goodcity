<template>
  <div id="app">
    <keep-alive>
    <router-view/>
     </keep-alive>
    <Foot-com></Foot-com>
  </div>
</template>

<script>
import Foot from './components/foot.vue'
export default {
  components: {
    'Foot-com':Foot
  }
}
</script>

<style>

</style>
