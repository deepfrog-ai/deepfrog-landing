<template>
    <footer class="bg-off-white footer">
        <div class="footer-shapes">
            <div class="footer-shape">
                <img src="../../assets/images/shape-1.png" alt="shape">
            </div>
            <div class="footer-shape footer-round-shape">
                <img src="../../assets/images/shape-2.png" alt="shape">
            </div>
        </div>
        <div class="footer-upper pt-100 pb-80 position-relative">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div class="footer-content-item">
                            <div class="footer-logo">
                                <router-link to="/">
                                    <img src="../../assets/images/logo.png" alt="logo">
                                </router-link>
                            </div>
                            <div class="footer-details">
                                <p>DeepFrog AI: Pioneering AI solutions for industries that matter. Specializing in Agent AI, Data Intelligence, and Consulting.</p>
                                <ul class="social-list social-list-btn">
                                    <li>
                                        <a href="https://www.github.com/deepfrog-ai" target="_blank">
                                            <i class="icofont-github"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://x.com/@deepfrogai" target="_blank">
                                            <i class="icofont-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/deepfrogai" target="_blank">
                                            <i class="icofont-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.pinterest.com/deepfrogai" target="_blank">
                                            <i class="icofont-pinterest"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="footer-content-list footer-content-item desk-pad-left-70">
                            <div class="footer-content-title">
                                <h3>Useful Links</h3>
                            </div>
                            <ul class="footer-details footer-list">
                                <li><router-link to="/about-us">About Us</router-link></li>
                                <li><router-link to="/blogs">News & Blogs</router-link></li>
                                <li><router-link to="/services">Services</router-link></li>
                                <li><router-link to="/products">Products</router-link></li>
                                <li><router-link to="/pricing">Our Pricing</router-link></li>
                                <li><router-link to="/contact">Contact</router-link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="footer-content-list footer-content-item desk-pad-left-70">
                            <div class="footer-content-title">
                                <h3>Services</h3>
                            </div>
                            <ul class="footer-details footer-list">
                                <li><router-link to="/single-services">Robotic Automation</router-link></li>
                                <li><router-link to="/single-services">Predictive Analytic</router-link></li>
                                <li><router-link to="/single-services">Deep Learning</router-link></li>
                                <li><router-link to="/single-services">Statistic Modeling</router-link></li>
                                <li><router-link to="/single-services">Data Mining</router-link></li>
                                <li><router-link to="/single-services">Security & Surveillance</router-link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="footer-content-list footer-content-item desk-pad-left-70">
                            <div class="footer-content-title">
                                <h3>Contact</h3>
                            </div>
                            <div class="footer-details footer-address">
                                <div class="footer-address-item">
                                    <div class="footer-address-text">
                                        <h4>Phone:</h4>
                                        <p><a href="tel:001-987-654-432">(+1) 987 654 432</a></p>
                                    </div>
                                </div>
                                <div class="footer-address-item">
                                    <div class="footer-address-text">
                                        <h4>Email:</h4>
                                        <p><a href="mailto:info@deepfrog.ai">info@deepfrog.ai</a></p>
                                    </div>
                                </div>
                                <div class="footer-address-item">
                                    <div class="footer-address-text">
                                        <h4>Location:</h4>
                                        <p>India, UAE</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-lower bg-blue position-relative">
            <div class="container">
                <div class="footer-copyright-text footer-copyright-text-white">
                    <p>Copyright ©{{currentYear}} DeepFrog AI.</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    }
}
</script>