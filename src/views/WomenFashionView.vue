<template>
    <div class="women-fashion-view">
        <section class="py-5">
            <div class="container mt-5">
                <div class="row">
                    <h2 class="text-center">Women Fashion</h2>
                    <hr />
                    <div class="col-md-4">
                        <div class="card" style="width: 18rem;">
                            <img src="/image/img6.jpg" class="card-img-top" alt="" height="210" width="110">
                            <div class="card-body">
                                <h5 class="card-title">New Shari</h5>
                                <p class="card-text">TK. 300</p>
                                <router-link :to="{name:'product-detail'}" class="btn btn-success">Detail</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card" style="width: 18rem;">
                            <img src="/image/img7.jpg" class="card-img-top" alt="" height="210" width="110">
                            <div class="card-body">
                                <h5 class="card-title">New Kamiz</h5>
                                <p class="card-text">TK. 1200</p>
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
    name: "WomenFashionView",
}
</script>

<style scoped></style>