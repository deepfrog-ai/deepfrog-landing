<template>
    <div class="case-study-section pt-100 pb-100">
        <div class="container">
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
                            <h3><router-link to="/single-project">Enabling Medical Staff To Prescribe The Right Antibiotics</router-link></h3>
                            <router-link to="/single-project" class="redirect-link">Watch The Video <i class="icofont-play-alt-2"></i></router-link>
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
                            <h3><router-link to="/single-project">Categorizing Airbnb Listing Photos Using Tensorflow</router-link></h3>
                            <router-link to="/single-project" class="redirect-link">Watch The Video <i class="icofont-play-alt-2"></i></router-link>
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
                <div class="col-md-6 col-lg-4 pb-30">
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
                            <h3><router-link to="/single-project">Prescribe The Right Antibiotics With Tensorflow</router-link></h3>
                            <router-link to="/single-project" class="redirect-link">Watch The Video <i class="icofont-play-alt-2"></i></router-link>
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
                <div class="col-md-6 col-lg-4 pb-30">
                    <div class="blog-card">
                        <div class="blog-card-image">
                            <img src="../../assets/images/projects/project-4.jpg" alt="project">
                            <div class="card-video">
                                <div 
                                    class="video-popup"
                                    style="cursor: pointer"
                                    @click="active3 = !active3" :aria-pressed="active3 ? 'true' : 'false'"
                                    v-bind:class="{ 'active3': button_active_state }"
                                    v-on:click="button_active_state = !button_active_state"
                                >
                                    <i class="icofont-ui-play"></i>
                                </div>
                            </div>
                        </div>
                        <div class="blog-card-text">
                            <div class="blog-category-text">Machine</div>
                            <h3><router-link to="/single-project">Neural Machine Translation With Full Attention</router-link></h3>
                            <router-link to="/single-project" class="redirect-link">Watch The Video <i class="icofont-play-alt-2"></i></router-link>
                        </div>
                    </div>
                    <div 
                        class="popup-video" 
                        :class="{ show: active3 }"
                    >
                        <div class="d-table">
                            <div class="d-table-cell">
                                <div 
                                    class="popup-overlay-close"
                                    @click="active3 = !active3" :aria-pressed="active3 ? 'true' : 'false'"
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
                            <img src="../../assets/images/projects/project-5.jpg" alt="project">
                            <div class="card-video">
                                <div 
                                    class="video-popup"
                                    style="cursor: pointer"
                                    @click="active4 = !active4" :aria-pressed="active4 ? 'true' : 'false'"
                                    v-bind:class="{ 'active4': button_active_state }"
                                    v-on:click="button_active_state = !button_active_state"
                                >
                                    <i class="icofont-ui-play"></i>
                                </div>
                            </div>
                        </div>
                        <div class="blog-card-text">
                            <div class="blog-category-text">Data Mining</div>
                            <h3><router-link to="/single-project">Generative Adversarial Networks With Ml</router-link></h3>
                            <router-link to="/single-project" class="redirect-link">Watch The Video <i class="icofont-play-alt-2"></i></router-link>
                        </div>
                    </div>
                    <div 
                        class="popup-video" 
                        :class="{ show: active4 }"
                    >
                        <div class="d-table">
                            <div class="d-table-cell">
                                <div 
                                    class="popup-overlay-close"
                                    @click="active4 = !active4" :aria-pressed="active4 ? 'true' : 'false'"
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
                            <img src="../../assets/images/projects/project-6.jpg" alt="project">
                            <div class="card-video">
                                <div 
                                    class="video-popup"
                                    style="cursor: pointer"
                                    @click="active5 = !active" :aria-pressed="active5 ? 'true' : 'false'"
                                    v-bind:class="{ 'active5': button_active_state }"
                                    v-on:click="button_active_state = !button_active_state"
                                >
                                    <i class="icofont-ui-play"></i>
                                </div>
                            </div>
                        </div>
                        <div class="blog-card-text">
                            <div class="blog-category-text">Robot</div>
                            <h3><router-link to="/single-project">Your First Neural Network Technology Machine</router-link></h3>
                            <router-link to="/single-project" class="redirect-link">Watch The Video <i class="icofont-play-alt-2"></i></router-link>
                        </div>
                    </div>
                    <div 
                        class="popup-video" 
                        :class="{ show: active5 }"
                    >
                        <div class="d-table">
                            <div class="d-table-cell">
                                <div 
                                    class="popup-overlay-close"
                                    @click="active5 = !active5" :aria-pressed="active5 ? 'true' : 'false'"
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
            <nav class="page-pagination" aria-label="Page Pagination">
                <ul class="pagination">
                    <li class="page-item disabled">
                        <a class="page-link" href="blogs" tabindex="-1" aria-disabled="true">
                            <i class="flaticon-left-chevron"></i>
                        </a>
                    </li>
                    <li class="page-item active">
                        <a class="page-link" href="blogs">1</a>
                    </li>
                    <li class="page-item" aria-current="page">
                        <a class="page-link" href="blogs">2</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="blogs">3</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="blogs">...</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="blogs">10</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="blogs">
                            <i class="flaticon-right-chevron"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Projects',
    data (){
        return {
            active: false,
            active1: false,
            active2: false,
            active3: false,
            active4: false,
            active5: false,
            button_active_state: false,
        }
    },
}
</script>