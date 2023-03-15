<template>
  <MyHeader/>
  <router-view/>
  <MyFooter/>
</template>

<script>
import MyHeader from './components/includes/MyHeader.vue';

import MyFooter from '@/components/includes/MyFooter';
export default {
  name: "App",
  components: {MyHeader, MyFooter},
}
</script>

<style scoped>

</style>
