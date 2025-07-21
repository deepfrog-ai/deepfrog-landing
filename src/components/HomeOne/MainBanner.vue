<template>
    <div class="header header-bg-lg header-bg-shape border-bottom-1">
        <div class="container-fluid p-lg-0">
            <div class="row m-lg-0">
                <div class="col-lg-6 p-lg-0">
                    <div class="max-585 ms-auto">
                        <div class="header-content">
                            <h1>AI Product Development for Mission-Critical Industries</h1>
                            <p>At DeepFrog AI, we specialize in developing Agentic AI solutions, Data Intelligence Platforms, and expert consulting to transform Fintech, Logistics, and Healthcare. Unlock efficiency, insights, and innovation tailored to your business needs.</p>
                            <div class="button-group button-group-animated">
                                <router-link to="/contact" class="btn main-btn">
                                    Get Started Today
                                </router-link>
                                <router-link to="/contact" class="btn main-btn main-btn-white">
                                    Schedule a Free Consultation
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-image-shape">
            <img src="../../assets/images/homepage-one/header-shape.png" alt="shape">
        </div>
        <div class="header-animation-shapes animation-d-none">
            <div class="header-animation-shape"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainBanner'
}
</script>