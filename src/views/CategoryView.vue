<template>
    <div class="category-view">
        <section class="py-5">
            <div class="container mt-5">
                <div class="row">
                    <h2 class="text-center">Men Fashion</h2>
                    <hr />
                    <div class="col-md-4">
                        <div class="card" style="width: 18rem;">
                            <img src="/image/img1.jpg" class="card-img-top" alt="" height="210" width="110">
                            <div class="card-body">
                                <h5 class="card-title">New T-Shirt</h5>
                                <p class="card-text">TK. 300</p>
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
    name: "CategoryView",
}
</script>

<style scoped></style>