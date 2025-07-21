<template>
    <div class="feature-section pt-min-100 pb-70">
        <div class="container">
            <div class="section-title section-title-lg">
                <h2>Resources And Community Support</h2>
                <p>Our purpose is to deliver excellence in service and execution Our purpose is to deliver excellence in service and Our purpose is to deliver excellence in service.</p>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-lg-3 pb-30">
                        <div class="feature-card">
                            <div class="feature-card-header">
                                <div class="feature-card-thumb feature-card-thumb-blue-dark">
                                    <div class="feature-card-thumb-wrapper">
                                        <i class="icofont-navigation-menu"></i>
                                    </div>
                                </div>
                                <span>Lada Blog</span>
                            </div>
                            <div class="feature-card-body">
                                <p>Proin gravida nibh vel velit auctor aliquet Aenean sollicitudin.</p>
                                <router-link to="/blogs-right-sidebar" class="redirect-link" target="_blank">
                                    Discover More 
                                    <i class="icofont-rounded-right"></i>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 pb-30">
                        <div class="feature-card">
                            <div class="feature-card-header">
                                <div class="feature-card-thumb feature-card-thumb-yellow-dark">
                                    <div class="feature-card-thumb-wrapper">
                                        <i class="icofont-youtube-play"></i>
                                    </div>
                                </div>
                                <span>Lada Youtube</span>
                            </div>
                            <div class="feature-card-body">
                                <p>Proin gravida nibh vel velit auctor aliquet Aenean sollicitudin.</p>
                                <a href="https://www.youtube.com/" class="redirect-link" target="_blank">
                                    Discover More 
                                    <i class="icofont-rounded-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 pb-30">
                        <div class="feature-card">
                            <div class="feature-card-header">
                                <div class="feature-card-thumb feature-card-thumb-lightgreen-dark">
                                    <div class="feature-card-thumb-wrapper">
                                        <i class="icofont-ui-message"></i>
                                    </div>
                                </div>
                                <span>Lada Events</span>
                            </div>
                            <div class="feature-card-body">
                                <p>Proin gravida nibh vel velit auctor aliquet Aenean sollicitudin.</p>
                                <router-link to="/careers" class="redirect-link">
                                    Discover More 
                                    <i class="icofont-rounded-right"></i>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 pb-30">
                        <div class="feature-card">
                            <div class="feature-card-header">
                                <div class="feature-card-thumb feature-card-thumb-violet-dark">
                                    <div class="feature-card-thumb-wrapper">
                                        <i class="icofont-twitter"></i>
                                    </div>
                                </div>
                                <span>Lada Twitter</span>
                            </div>
                            <div class="feature-card-body">
                                <p>Proin gravida nibh vel velit auctor aliquet Aenean sollicitudin.</p>
                                <a href="https://twitter.com/" class="redirect-link" target="_blank">
                                    Discover More 
                                    <i class="icofont-rounded-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Feature'
}
</script>