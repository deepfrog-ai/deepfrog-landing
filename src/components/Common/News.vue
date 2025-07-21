<template>
    <div class="news-section pt-min-100 pb-70">
        <div class="container">
            <div class="section-title section-title-lg">
                <h2>Powered By Lada</h2>
                <p>Our purpose is to deliver excellence in service and execution Our purpose is to deliver excellence in service and Our purpose is to deliver excellence in service.</p>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-4 pb-30">
                    <div class="blog-card">
                        <div class="blog-card-image">
                            <img src="../../assets/images/projects/project-1.jpg" alt="project">
                            <div class="card-video">
                                <div 
                                    class="video-popup"
                                    style="cursor: pointer"
                                    @click="active = !active" :aria-pressed="active ? 'true' : 'false'"
                                    v-bind:class="{ 'active': button_active_state }"
                                    v-on:click="button_active_state = !button_active_state"
                                >
                                    <i class="icofont-ui-play"></i>
                                </div>
                            </div>
                        </div>
                        <div class="blog-card-text">
                            <div class="blog-category-text">Technology</div>
                            <h3>
                                <router-link to="/single-project">
                                    Enabling Medical Staff To Prescribe The Right Antibiotics
                                </router-link>
                            </h3>
                            <router-link to="/single-project" class="redirect-link">
                                Watch The Video 
                                <i class="icofont-play-alt-2"></i>
                            </router-link>
                        </div>
                    </div>
                    <div 
                        class="popup-video" 
                        :class="{ show: active }"
                    >
                        <div class="d-table">
                            <div class="d-table-cell">
                                <div 
                                    class="popup-overlay-close"
                                    @click="active = !active" :aria-pressed="active ? 'true' : 'false'"
                                >
                                    <div class="popup-overlay-close-line"></div>
                                    <div class="popup-overlay-close-line"></div>
                                </div>
                                <div class="play-video">
                                    <iframe src="https://www.youtube.com/embed/Cx5aNwnZYDc" title="How will Artificial Intelligence and Internet of Things change the world?" frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 pb-30">
                    <div class="blog-card">
                        <div class="blog-card-image">
                            <img src="../../assets/images/projects/project-2.jpg" alt="project">
                            <div class="card-video">
                                <div 
                                    class="video-popup"
                                    style="cursor: pointer"
                                    @click="active1 = !active1" :aria-pressed="active1 ? 'true' : 'false'"
                                    v-bind:class="{ 'active1': button_active_state }"
                                    v-on:click="button_active_state = !button_active_state"
                                >
                                    <i class="icofont-ui-play"></i>
                                </div>
                            </div>
                        </div>
                        <div class="blog-card-text">
                            <div class="blog-category-text">Machine</div>
                            <h3>
                                <router-link to="/single-project">
                                    Categorizing Airbnb Listing Photos Using Tensorflow
                                </router-link>
                            </h3>
                            <router-link to="/single-project" class="redirect-link">
                                Watch The Video 
                                <i class="icofont-play-alt-2"></i>
                            </router-link>
                        </div>
                    </div>
                    <div 
                        class="popup-video" 
                        :class="{ show: active1 }"
                    >
                        <div class="d-table">
                            <div class="d-table-cell">
                                <div 
                                    class="popup-overlay-close"
                                    @click="active1 = !active1" :aria-pressed="active1 ? 'true' : 'false'"
                                >
                                    <div class="popup-overlay-close-line"></div>
                                    <div class="popup-overlay-close-line"></div>
                                </div>
                                <div class="play-video">
                                    <iframe src="https://www.youtube.com/embed/Cx5aNwnZYDc" title="How will Artificial Intelligence and Internet of Things change the world?" frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 offset-md-3 offset-lg-0 pb-30">
                    <div class="blog-card">
                        <div class="blog-card-image">
                            <img src="../../assets/images/projects/project-3.jpg" alt="project">
                            <div class="card-video">
                                <div 
                                    class="video-popup"
                                    style="cursor: pointer"
                                    @click="active2 = !active2" :aria-pressed="active2 ? 'true' : 'false'"
                                    v-bind:class="{ 'active2': button_active_state }"
                                    v-on:click="button_active_state = !button_active_state"
                                >
                                    <i class="icofont-ui-play"></i>
                                </div>
                            </div>
                        </div>
                        <div class="blog-card-text">
                            <div class="blog-category-text">Robot</div>
                            <h3>
                                <router-link to="/single-project">
                                    Prescribe The Right Antibiotics With Tensorflow
                                </router-link>
                            </h3>
                            <router-link to="/single-project" class="redirect-link">
                                Watch The Video 
                                <i class="icofont-play-alt-2"></i>
                            </router-link>
                        </div>
                    </div>
                    <div 
                        class="popup-video" 
                        :class="{ show: active2 }"
                    >
                        <div class="d-table">
                            <div class="d-table-cell">
                                <div 
                                    class="popup-overlay-close"
                                    @click="active2 = !active2" :aria-pressed="active2 ? 'true' : 'false'"
                                >
                                    <div class="popup-overlay-close-line"></div>
                                    <div class="popup-overlay-close-line"></div>
                                </div>
                                <div class="play-video">
                                    <iframe src="https://www.youtube.com/embed/Cx5aNwnZYDc" title="How will Artificial Intelligence and Internet of Things change the world?" frameborder="0" allowfullscreen></iframe>
                                </div>
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
    name: 'News',
    data (){
        return {
            active: false,
            active1: false,
            active2: false,
            button_active_state: false,
        }
    },
}
</script>