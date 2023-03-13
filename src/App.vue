<template>
  <MyHeader/>
  <router-view/>
</template>

<script>
import MyHeader from './components/includes/MyHeader.vue';
export default {
  name: "App",
  components: {MyHeader},
}
</script>

<style scoped>

</style>
