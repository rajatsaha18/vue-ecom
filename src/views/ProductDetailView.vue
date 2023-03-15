<template>
    <div class="product-detail">
        <UpperDetailSection />
        <LowerDetailSection/>


        
    </div>
</template>

<script>
import UpperDetailSection from '@/components/detail/UpperDetailSection.vue';
import LowerDetailSection from '@/components/detail/LowerDetailSection';
export default {
    name: "ProductDetailView",
    components: { UpperDetailSection, LowerDetailSection },
}
</script>

<style scoped></style>