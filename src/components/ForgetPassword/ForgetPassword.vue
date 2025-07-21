<template>
    <div class="authentication-section pt-100 pb-70">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-6 pb-30">
                    <div class="authentication-item">
                        <h3>Forget Password</h3>
                        <div class="authentication-form">
                            <form>
                                <div class="form-group mb-20">
                                    <input type="text" name="email" class="form-control" required placeholder="Email*">
                                </div>
                                <div class="form-group mb-20">
                                    <input type="password" name="email" class="form-control" placeholder="Last Password">
                                </div>
                                <button class="btn main-btn full-width mb-20">RESET PASSWORD</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ForgetPassword'
}
</script>