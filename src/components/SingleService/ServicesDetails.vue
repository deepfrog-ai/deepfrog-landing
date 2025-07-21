<template>
    <div class="service-section pt-100 pb-70">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 pb-30">
                    <div class="forum-details desk-pad-right-40">
                        <img src="../../assets/images/services/service-details.jpg" alt="service">
                        <h2>Robotic Automation</h2>
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
                                <img src="../../assets/images/services/service-details-1.jpg" alt="service">
                            </div>
                            <div class="col-12 col-sm-6">
                                <img src="../../assets/images/services/service-details-2.jpg" alt="service">
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
                        <h3>Services</h3>
                        <ul class="sidebar-list">
                            <li>
                                <router-link to="/single-services" class="current">Robotic Automation</router-link>
                            </li>
                            <li>
                                <router-link to="/single-services">Predictive Analytics</router-link>
                            </li>
                            <li>
                                <router-link to="/single-services">Deep Learning</router-link>
                            </li>
                            <li>
                                <router-link to="/single-services">Data Mining</router-link>
                            </li>
                            <li>
                                <router-link to="/single-services">Statistical Modeling</router-link>
                            </li>
                            <li>
                                <router-link to="/single-services">Security & Surveillance</router-link>
                            </li>
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
                        <h3>Recent Post</h3>
                        <div class="sidebar-recent-post">
                            <div class="sidebar-recent-post-item">
                                <router-link to="/single-services">
                                    <img src="../../assets/images/services/service-4.png" alt="service">
                                    <div class="recent-post-details">
                                        <h3>Is Machine Learning Right Going On Good Way</h3>
                                        <ul class="post-entry">
                                            <li>January 25, 2021</li>
                                        </ul>
                                    </div>
                                </router-link>
                            </div>
                            <div class="sidebar-recent-post-item">
                                <router-link to="/single-services">
                                    <img src="../../assets/images/services/service-5.png" alt="service">
                                    <div class="recent-post-details">
                                        <h3>The Current State Of Artificial Intelligence Infographic</h3>
                                        <ul class="post-entry">
                                            <li>January 24, 2021</li>
                                        </ul>
                                    </div>
                                </router-link>
                            </div>
                            <div class="sidebar-recent-post-item">
                                <router-link to="/single-services">
                                    <img src="../../assets/images/services/service-6.png" alt="service">
                                    <div class="recent-post-details">
                                        <h3>Our Company As A Global Leader In Big Data</h3>
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
</template>

<script>
export default {
    name: 'ServicesDetails'
}
</script>