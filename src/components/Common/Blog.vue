<template>
    <div class="news-section pt-100 pb-70">
        <div class="container">
            <div class="section-title section-title-lg">
                <small>Latest Insights: AI News & Updates from DeepFrog</small>
                <h2>Stay ahead with our expert articles on AI trends in Fintech, Logistics, and Healthcare. Read All</h2>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-4 pb-30">
                    <div class="blog-card">
                        <div class="blog-card-image">
                            <router-link to="/single-blog">
                                <img src="../../assets/images/blogs/blog-1.jpg" alt="blog">
                            </router-link>
                        </div>
                        <div class="blog-card-text">
                            <div class="blog-category">Technology</div>
                            <h3>
                                <router-link to="/single-blog">
                                    Is Machine Learning Right Going On Good Way
                                </router-link>
                            </h3>
                            <div class="blog-card-entry">
                                <div class="blog-entry-thumb">
                                    <img src="../../assets/images/blogs/blog-author-1.jpg" alt="author">
                                </div>
                                <div class="blog-entry-text">
                                    <h4>By: <strong>David Joe</strong></h4>
                                    <p>5 January 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 pb-30">
                    <div class="blog-card">
                        <div class="blog-card-image">
                            <router-link to="/single-blog">
                                <img src="../../assets/images/blogs/blog-2.jpg" alt="blog">
                            </router-link>
                        </div>
                        <div class="blog-card-text">
                            <div class="blog-category">Robot</div>
                            <h3>
                                <router-link to="/single-blog">
                                    The Current State Of Artificial Intelligence Infographic
                                </router-link>
                            </h3>
                            <div class="blog-card-entry">
                                <div class="blog-entry-thumb">
                                    <img src="../../assets/images/blogs/blog-author-2.jpg" alt="author">
                                </div>
                                <div class="blog-entry-text">
                                    <h4>By: <strong>Lona Rabisa</strong></h4>
                                    <p>4 January 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 offset-md-3 offset-lg-0 pb-30">
                    <div class="blog-card">
                        <div class="blog-card-image">
                            <router-link to="/single-blog">
                                <img src="../../assets/images/blogs/blog-3.jpg" alt="blog">
                            </router-link>
                        </div>
                        <div class="blog-card-text">
                            <div class="blog-category">Machine</div>
                            <h3>
                                <router-link to="/single-blog">
                                    Our Company As A Global Leader In Big Data
                                </router-link>
                            </h3>
                            <div class="blog-card-entry">
                                <div class="blog-entry-thumb">
                                    <img src="../../assets/images/blogs/blog-author-3.jpg" alt="author">
                                </div>
                                <div class="blog-entry-text">
                                    <h4>By: <strong>Richard Jac</strong></h4>
                                    <p>3 January 2022</p>
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
    name: 'Blog'
}
</script>