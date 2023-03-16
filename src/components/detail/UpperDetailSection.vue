<template>
    <div class="upper-detail">
        <section class="py-5">
            <div class="container mt-5">
                <div class="row">
                    <div class="col-md-6">
                        <div class="card card-body">
                            <img src="/image/img1.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card card-body">
                            <h1>New T-Shirt</h1>
                            <h3>TK. 600</h3>
                            <p>Product Quantity</p>
                            <input type="number">
                            <router-link :to="{name:'my-cart'}" class="btn btn-success mx-auto mt-2">Add To Cart</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "UpperDetailSection",
}
</script>

<style scoped></style>