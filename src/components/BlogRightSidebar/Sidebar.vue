<template>
    <div>
        <div class="sidebar-item sidebar-bg details-sidebar-search">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Search">
                <button type="submit">
                    <i class="flaticon-search"></i>
                </button>
            </div>
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
                    <router-link to="/single-blog">
                        <img src="../../assets/images/blogs/blog-7.jpg" alt="service">
                        <div class="recent-post-details">
                            <h3>Is Machine Learning Right Going On Good Way</h3>
                            <ul class="post-entry">
                                <li>January 25, 2021</li>
                            </ul>
                        </div>
                    </router-link>
                </div>
                <div class="sidebar-recent-post-item">
                    <router-link to="/single-blog">
                        <img src="../../assets/images/blogs/blog-8.jpg" alt="service">
                        <div class="recent-post-details">
                            <h3>The Current State Of Artificial Intelligence Infographic</h3>
                            <ul class="post-entry">
                                <li>January 24, 2021</li>
                            </ul>
                        </div>
                    </router-link>
                </div>
                <div class="sidebar-recent-post-item">
                    <router-link to="/single-blog">
                        <img src="../../assets/images/blogs/blog-9.jpg" alt="service">
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
        <div class="sidebar-item sidebar-bg">
            <h3>Categories</h3>
            <ul class="sidebar-category">
                <li>
                    <router-link to="blogs">
                        Technology
                        <span>(02)</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="blogs">
                        Machine Learning
                        <span>(15)</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="blogs">
                        Development
                        <span>(05)</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="blogs">
                        Data Mining
                        <span>(07)</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="blogs">
                        IT
                        <span>(02)</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar'
}
</script>