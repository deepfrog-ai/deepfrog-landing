<template>
    <div class="job-section pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <small>Lada Jobs</small>
                <h2>Searching For A Job? Get Your Suitable One</h2>
            </div>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4 pb-30">
                    <div class="job-card">
                        <div class="job-card-title">
                            <h3>Assistant Programmer</h3>
                            <h4>New York, USA</h4>
                            <p>Lada Ltd.</p>
                        </div>
                        <div class="job-card-brief">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <router-link to="/contact" class="btn main-btn">Apply Now</router-link>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 pb-30">
                    <div class="job-card">
                        <div class="job-card-title">
                            <h3>Senior Associate</h3>
                            <h4>New York, USA</h4>
                            <p>Lada Ltd.</p>
                        </div>
                        <div class="job-card-brief">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <router-link to="/contact" class="btn main-btn">Apply Now</router-link>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 pb-30 offset-md-3 offset-lg-0">
                    <div class="job-card">
                        <div class="job-card-title">
                            <h3>Junior Programmer</h3>
                            <h4>New York, USA</h4>
                            <p>Lada Ltd.</p>
                        </div>
                        <div class="job-card-brief">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <router-link to="/contact" class="btn main-btn">Apply Now</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Career'
}
</script>