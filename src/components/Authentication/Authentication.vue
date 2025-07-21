<template>
    <div class="authentication-section pt-100 pb-70">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-6 pb-30">
                    <div class="authentication-item">
                        <h3>Register</h3>
                        <div class="authentication-form">
                            <form>
                                <div class="form-group mb-20">
                                    <input type="text" name="name" class="form-control" required placeholder="Username*">
                                </div>
                                <div class="form-group mb-20">
                                    <input type="text" name="email" class="form-control" required placeholder="Email*">
                                </div>
                                <div class="form-group mb-20">
                                    <input type="password" name="email" class="form-control" required placeholder="Password*">
                                </div>
                                <p class="font-italic mb-20 form-desc">The password must be at least twelve characters long, contain upper and lower case letters, contain numbers, contain symbols like ! " ? $ % ^ & ).</p>
                                <button class="btn main-btn full-width mb-20">Register Now</button>
                                <div class="authentication-account-access">
                                    <div class="authentication-account-access-item">
                                        <div class="input-checkbox">
                                            <input type="checkbox" id="check2">
                                            <label for="check2">I agree to the 
                                                <router-link to="/privacy-policy">Privacy Policy</router-link> & <router-link to="/terms-of-service">Terms of Service</router-link>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 pb-30">
                    <div class="authentication-item">
                        <h3>Login</h3>
                        <div class="authentication-form">
                            <form>
                                <div class="form-group mb-20">
                                    <input type="text" name="user" class="form-control" required placeholder="Username/Email Address*">
                                </div>
                                <div class="form-group mb-20">
                                    <input type="password" name="email" class="form-control" required placeholder="Password*">
                                </div>
                                <div class="authentication-account-access mb-20">
                                    <div class="authentication-account-access-item">
                                        <div class="input-checkbox">
                                            <input type="checkbox" id="check1">
                                            <label for="check1">Remember Me!</label>
                                        </div>
                                    </div>
                                    <div class="authentication-account-access-item">
                                        <div class="authentication-link">
                                            <router-link to="/forget-password">Forget password?</router-link>
                                        </div>
                                    </div>
                                </div>
                                <button class="btn main-btn full-width">Log In</button>
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
    name: 'Authentication'
}
</script>