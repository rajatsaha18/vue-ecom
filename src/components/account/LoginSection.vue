<template>
    <div class="login-section">
        <div class="col-md-6">
            <div class="card text-white bg-danger">
                <div class="card-header text-center">Login Form</div>
                <div class="card-body">
                    <form action="" method="">
                        <div class="form-group mt-3">
                            <label for="">Email</label>
                            <input type="email" class="form-control" placeholder="Email Address">
                        </div>
                        <div class="form-group mt-3">
                            <label for="">Password</label>
                            <input type="password" class="form-control" placeholder="Password">
                        </div>
                        <div class="form-group mt-3">
                            <label for=""></label>
                            <input type="submit" class="btn btn-success" value="Login">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"LoginSection",
}
</script>

<style scoped></style>