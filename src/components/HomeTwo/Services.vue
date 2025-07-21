<template>
    <div class="service-section pt-min-100 pb-70 bg-off-white">
        <div class="container">
            <div class="section-title section-title-lg">
                <h2>Solutions To Common ML Problems</h2>
                <p>Our Purpose Is To Deliver Excellence In Service And Execution Our Purpose Is To Deliver</p>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-4 pb-30">
                    <div class="service-card-2">
                        <div class="service-card-image-2">
                            <router-link to="/single-services">
                                <img src="../../assets/images/services/service-1.png" alt="service">
                            </router-link>
                        </div>
                        <div class="service-card-text-2">
                            <div class="service-category-2">AI Tech</div>
                            <h3>
                                <router-link to="/single-services">
                                    Your First Neural Network Technology Machine
                                </router-link>
                            </h3>
                            <p>Proin gravida nibh vel velit auctor aliquet. wean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 pb-30">
                    <div class="service-card-2">
                        <div class="service-card-image-2">
                            <router-link to="/single-services">
                                <img src="../../assets/images/services/service-2.png" alt="service">
                            </router-link>
                        </div>
                        <div class="service-card-text-2">
                            <div class="service-category-2">Machine Learning</div>
                            <h3>
                                <router-link to="/single-services">
                                    Neural Machine Translation With Full Attention
                                </router-link>
                            </h3>
                            <p>Proin gravida nibh vel velit auctor aliquet. wean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 offset-md-3 offset-lg-0 pb-30">
                    <div class="service-card-2">
                        <div class="service-card-image-2">
                            <router-link to="/single-services">
                                <img src="../../assets/images/services/service-3.png" alt="service">
                            </router-link>
                        </div>
                        <div class="service-card-text-2">
                            <div class="service-category-2">Data Mining</div>
                            <h3>
                                <router-link to="/single-services">
                                    Generative Adversarial Networks With Ml
                                </router-link>
                            </h3>
                            <p>Proin gravida nibh vel velit auctor aliquet. wean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Services'
}
</script>