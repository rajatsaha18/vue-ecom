<template>
    <div class="home-products-view">
        <section class="py-5">
            <div class="container mt-5">
                <div class="row">
                    <h2 class="text-center">Home Products</h2>
                    <hr />
                    <div class="col-md-4">
                        <div class="card" style="width: 18rem;">
                            <img src="/image/img10.jpg" class="card-img-top" alt="" height="210" width="110">
                            <div class="card-body">
                                <h5 class="card-title">Micro Oven</h5>
                                <p class="card-text">TK. 10000</p>
                                <router-link :to="{name:'product-detail'}" class="btn btn-success">Detail</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card" style="width: 18rem;">
                            <img src="/image/img11.jpg" class="card-img-top" alt="" height="210" width="110">
                            <div class="card-body">
                                <h5 class="card-title">Rice Cooker</h5>
                                <p class="card-text">TK. 3500</p>
                                <router-link :to="{name:'product-detail'}" class="btn btn-success">Detail</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "HomeProductsView",
}
</script>

<style scoped></style>