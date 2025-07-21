<template>
    <div class="header header-bg border-bottom-1">
        <div class="container-fluid p-lg-0 custom-container-fluid">
            <div class="row m-lg-0 align-items-center">
                <div class="col-lg-6 p-lg-0 order-lg-2">
                    <div class="max-585 me-lg-auto">
                        <div class="header-content">
                            <h1>Empowering Industries with Cutting-Edge AI Solutions</h1>
                            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh</p>
                            <div class="button-group button-group-animated">
                                <router-link to="/contact" class="btn main-btn">
                                    Get Started
                                </router-link>
                                <router-link to="/contact" class="btn main-btn main-btn-white">
                                    Start A Free Trial
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 p-lg-0 order-lg-1">
                    <div class="header-content-image text-center">
                        <img src="../../assets/images/homepage-two/header-shape.png" alt="header">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainBanner'
}
</script>