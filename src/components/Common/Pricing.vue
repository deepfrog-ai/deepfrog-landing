<template>
    <div class="pricing-section pt-min-100 pb-70">
        <div class="container">
            <div class="section-title section-title-lg">
                <h2>Our Pricing</h2>
                <p>Our purpose is to deliver excellence in service and execution Our purpose is to deliver excellence in service and Our purpose is to deliver excellence in service.</p>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-4 pb-30">
                    <div class="pricing-card">
                        <div class="pricing-category">
                            <h3>Basic</h3>
                            <div class="pricing-thumb">
                                <i class="flaticon-rocket"></i>
                            </div>
                        </div>
                        <div class="pricing-info">
                            <h3>Free <span>/ 10 Days</span></h3>
                            <ul>
                                <li class="pricing-available">Bot & Digital Assistants</li>
                                <li class="pricing-available">Drag & Drop Page Builder</li>
                                <li class="pricing-available">Something Special One</li>
                                <li>Unlimited Broadcast</li>
                                <li>24/7 Customer Support</li>
                                <li>Unlimited Staff</li>
                            </ul>
                            <router-link to="/authentication" class="btn main-btn">
                                Get Started
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 pb-30">
                    <div class="pricing-card">
                        <div class="pricing-category">
                            <h3>Professional</h3>
                            <div class="pricing-thumb">
                                <i class="flaticon-rocket"></i>
                            </div>
                        </div>
                        <div class="pricing-info">
                            <h3>$120 <span>/ Month</span></h3>
                            <ul>
                                <li class="pricing-available">Bot & Digital Assistants</li>
                                <li class="pricing-available">Drag & Drop Page Builder</li>
                                <li class="pricing-available">Something Special One</li>
                                <li class="pricing-available">Unlimited Broadcast</li>
                                <li class="pricing-available">24/7 Customer Support</li>
                                <li>Unlimited Staff</li>
                            </ul>
                            <router-link to="/authentication" class="btn main-btn">
                                Get Started
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 offset-md-3 offset-lg-0 pb-30">
                    <div class="pricing-card">
                        <div class="pricing-category">
                            <h3>Business</h3>
                            <div class="pricing-thumb">
                                <i class="flaticon-rocket"></i>
                            </div>
                        </div>
                        <div class="pricing-info">
                            <h3>$500 <span>/ Month</span></h3>
                            <ul>
                                <li class="pricing-available">Bot & Digital Assistants</li>
                                <li class="pricing-available">Drag & Drop Page Builder</li>
                                <li class="pricing-available">Something Special One</li>
                                <li class="pricing-available">Unlimited Broadcast</li>
                                <li class="pricing-available">24/7 Customer Support</li>
                                <li class="pricing-available">Unlimited Staff</li>
                            </ul>
                            <router-link to="/authentication" class="btn main-btn">
                                Get Started
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Pricing'
}
</script>