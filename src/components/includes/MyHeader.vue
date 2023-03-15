<template>
    <div class="my-header">
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <router-link :to="{name:'home'}" class="navbar-brand">LOGO</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link :to="{name:'home'}" class="nav-link active">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'my-cart'}" class="nav-link">My Cart</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Product Category
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><router-link :to="{name:'category'}" class="dropdown-item">one</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('account') }}">Login</a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
        

    </div>
</template>
<script>
export default {
    name: "MyHeader",
}
</script>

<style scoped></style>