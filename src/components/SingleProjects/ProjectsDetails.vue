<template>
    <div>
        <div class="service-section pt-100 pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 pb-30">
                        <div class="forum-details desk-pad-right-40">
                            <div class="blog-card-image mb-0">
                                <img src="../../assets/images/projects/project-details.jpg" alt="project">
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
                        
                            <h2>Enabling Medical Staff To Prescribe The Right Antibiotics</h2>
                            <p>Lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulp theutate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class thaptent taciti sociosqu ad litora torquent per. conubia nostra, per inceptos himenaeos.</p>
                            <ul>
                                <li>Advance advisory team</li>
                                <li>Advance quality experts</li>
                                <li>There are many variations of passages.</li>
                                <li>High-Quality results</li>
                            </ul>
                            <p>Lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulp theutate cursus a sit amet mauris.</p>
                            <div class="row">
                                <div class="col-12 col-sm-6">
                                    <img src="../../assets/images/projects/project-3.jpg" alt="project">
                                </div>
                                <div class="col-12 col-sm-6">
                                    <img src="../../assets/images/projects/project-6.jpg" alt="project">
                                </div>
                            </div>
                            <h3>Advanced Analytics Strategies</h3>
                            <p>Lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulp theutate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class thaptent taciti sociosqu ad litora torquent per. conubia nostra, per inceptos himenaeos.</p>
                            <p>Lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulp theutate cursus a sit amet mauris.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 pb-30">
                        <div class="sidebar-item sidebar-bg details-sidebar-search">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Search">
                                <button type="submit">
                                    <i class="flaticon-search"></i>
                                </button>
                            </div>
                        </div>
                        <div class="sidebar-item sidebar-bg">
                            <h3>Recent Works</h3>
                            <ul class="sidebar-list">
                                <li><router-link to="/projects" class="active">Technology</router-link></li>
                                <li><router-link to="/projects">Machine</router-link></li>
                                <li><router-link to="/projects">Robot</router-link></li>
                                <li><router-link to="/projects">Data Mining</router-link></li>
                                <li><router-link to="/projects">Statistical Modeling</router-link></li>
                                <li><router-link to="/projects">Security & Surveillance</router-link></li>
                            </ul>
                        </div>
                        <div class="sidebar-item sidebar-bg bg-blue-dark">
                            <div class="sidebar-author">
                                <p>“Proin gravida nibh vel velit auctor aliquet nean sollicitudin.Proin gravida nibh vel velit auctor aliquet Aenean sollicitudin.Proin vel velit auctor aliquet Aenean sollicitudin.”</p>
                                <div class="author-info">
                                    <img src="../../assets/images/author-1.jpg" alt="author">
                                    <div class="author-info-details">
                                        <h3>Jonson Mandel</h3>
                                        <p>Los Angel</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sidebar-item">
                            <h3>Recent Works</h3>
                            <div class="sidebar-recent-post">
                                <div class="sidebar-recent-post-item">
                                    <router-link to="/single-project">
                                        <img src="../../assets/images/projects/project-2.jpg" alt="project">
                                        <div class="recent-post-details">
                                            <h3>Categorizing Airbnb Listing Photos Using Tensorflow</h3>
                                            <ul class="post-entry">
                                                <li>January 25, 2021</li>
                                            </ul>
                                        </div>
                                    </router-link>
                                </div>
                                <div class="sidebar-recent-post-item">
                                    <router-link to="/single-project">
                                        <img src="../../assets/images/projects/project-3.jpg" alt="project">
                                        <div class="recent-post-details">
                                            <h3>Prescribe The Right Antibiotics With Tensorflow</h3>
                                            <ul class="post-entry">
                                                <li>January 24, 2021</li>
                                            </ul>
                                        </div>
                                    </router-link>
                                </div>
                                <div class="sidebar-recent-post-item">
                                    <router-link to="/single-project">
                                        <img src="../../assets/images/projects/project-5.jpg" alt="project">
                                        <div class="recent-post-details">
                                            <h3>Generative Adversarial Networks With Ml</h3>
                                            <ul class="post-entry">
                                                <li>January 23, 2021</li>
                                            </ul>
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
</template>

<script>
export default {
    name: 'ProjectsDetails',
    data (){
        return {
            active: false,
            button_active_state: false,
        }
    },
}
</script>