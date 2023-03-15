<template>
  <div class="home">
    <SliderSection/>
    <ProductSection/>

  </div>
</template>

<script>
import SliderSection from '@/components/home/SliderSection.vue';
import ProductSection from '@/components/home/ProductSection';

export default {
  name: 'HomeView',
  components: {SliderSection, ProductSection},
}
</script>

<style scoped></style>
