<template>
    <div class="electronics-view">
        <section class="py-5">
            <div class="container mt-5">
                <div class="row">
                    <h2 class="text-center">Electronics</h2>
                    <hr />
                    <div class="col-md-4">
                        <div class="card" style="width: 18rem;">
                            <img src="/image/img8.jpg" class="card-img-top" alt="" height="210" width="110">
                            <div class="card-body">
                                <h5 class="card-title">Men Watch</h5>
                                <p class="card-text">TK. 1200</p>
                                <router-link :to="{name:'product-detail'}" class="btn btn-success">Detail</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card" style="width: 18rem;">
                            <img src="/image/img9.jpg" class="card-img-top" alt="" height="210" width="110">
                            <div class="card-body">
                                <h5 class="card-title">Dell Monitor</h5>
                                <p class="card-text">TK. 18000</p>
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
    name: "ElectronicsView",
}
</script>

<style scoped></style>