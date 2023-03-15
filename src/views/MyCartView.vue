<template>
    <div class="my-cart">
        <ShoppingCardSection/>
        <CheckoutSection/>
    </div>
</template>

<script>
import ShoppingCardSection from '@/components/my-cart/ShoppingCardSection.vue';
import CheckoutSection from '@/components/my-cart/CheckoutSection.vue';
export default {
    name: "MyCart",
    components: {ShoppingCardSection, CheckoutSection},
}
</script>

<style scoped></style>