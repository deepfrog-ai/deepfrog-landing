<template>
    <div :class="['fixed-top', {'non-fixed': isSticky}]">
        <div class="topbar">
            <div class="container">
                <div class="topbar-inner">
                    <div class="row justify-content-center justify-content-lg-between">
                        <div class="topbar-item topbar-left">
                            <ul class="topbar-list">
                                 <li>
                                    <i class="icofont-headphone"></i>
                                    <a href="/tel:00321-654-98">+00 321 654 98</a>
                                </li>
                                <li>
                                    <i class="icofont-ui-message"></i>
                                    <a href="/mailto:info@deepfrog.ai">info@deepfrog.ai</a>
                                </li>
                            </ul>
                        </div>
                        <div class="topbar-item topbar-right">
                            <ul class="topbar-list">
                                <li>
                                    <i class="icofont-paper-plane"></i>
                                    <router-link to="/contact">Request For Demo</router-link>
                                </li>
                                <li 
                                    class="search-option"
                                    @click="overlay = !overlay"
                                    :aria-pressed="overlay ? 'true' : 'false'"
                                    v-bind:class="{ 'overlay': button_overlay_state }"
                                    v-on:click="button_overlay_state = !button_overlay_state"
                                >
                                    <i class="icofont-search-1"></i>
                                    <a href="#" class="search-popup">Search</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div :class="['navbar-area sticky-black', {'is-sticky': isSticky}]">
            <div class="main-nav">
                <div class="container">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <router-link class="navbar-brand" to="/">
                            <img src="../../assets/images/logo.png" alt="logo" class="logo">
                        </router-link>

                        <div 
                            class="navbar-toggler"
                            @click="active = !active" 
                            :aria-pressed="active ? 'true' : 'false'"
                            v-bind:class="{ 'active': button_active_state }"
                            v-on:click="button_active_state = !button_active_state"
                        >
                            <i class="icofont-navigation-menu"></i>
                            <i class="icofont-close"></i>
                        </div>

                        <div class="collapse navbar-collapse" :class="{ show: active }">
                            <ul class="navbar-nav mx-auto">
                                <li class="nav-item">
                                    <a href="#" class="nav-link dropdown-toggle">Home</a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item ">
                                            <router-link to="/" class="nav-link">
                                                Home Demo 1
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/home-two" class="nav-link">
                                                Home Demo 2
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/home-three" class="nav-link">
                                                Home Demo 3
                                            </router-link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/about-us" class="nav-link">
                                        About Us
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link dropdown-toggle">Services</a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <router-link to="/services" class="nav-link">
                                                Services
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/single-services" class="nav-link">
                                                Single Service
                                            </router-link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link dropdown-toggle">Pages</a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <router-link to="/pricing" class="nav-link">
                                                Pricing
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/faqs" class="nav-link">
                                                FAQ's
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/our-team" class="nav-link">
                                                Our Team
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link dropdown-toggle">Projects</a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <router-link to="/projects" class="nav-link">
                                                        Projects
                                                    </router-link>
                                                </li>
                                                <li class="nav-item">
                                                    <router-link to="/single-project" class="nav-link">
                                                        Single Project
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link dropdown-toggle">Case Study</a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <router-link to="/cases" class="nav-link">
                                                        Case
                                                    </router-link>
                                                </li>
                                                <li class="nav-item">
                                                    <router-link to="/cases-two-columns" class="nav-link">
                                                        Cases Two Columns
                                                    </router-link>
                                                </li>
                                                <li class="nav-item">
                                                    <router-link to="/single-case" class="nav-link">
                                                        Single Case
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/testimonial" class="nav-link">
                                                Testimonial
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/our-clients" class="nav-link">
                                                Our Clients
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/careers" class="nav-link">
                                                Careers
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link dropdown-toggle">Products</a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <router-link to="/products" class="nav-link">
                                                        Products
                                                    </router-link>
                                                </li>
                                                <li class="nav-item">
                                                    <router-link to="/single-product" class="nav-link">
                                                        Single Product
                                                    </router-link>
                                                </li>
                                                <li class="nav-item">
                                                    <router-link to="/cart" class="nav-link">
                                                        Cart
                                                    </router-link>
                                                </li>
                                                <li class="nav-item">
                                                    <router-link to="/checkout" class="nav-link">
                                                        Checkout
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link dropdown-toggle">Users</a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <router-link to="/authentication" class="nav-link">
                                                        Authentication
                                                    </router-link>
                                                </li>
                                                <li class="nav-item">
                                                    <router-link to="/forget-password" class="nav-link">
                                                        Forget Password
                                                    </router-link>
                                                </li>
                                                <li class="nav-item">
                                                    <router-link to="/my-account" class="nav-link">
                                                        My Account
                                                    </router-link>
                                                </li>
                                                <li class="nav-item">
                                                    <router-link to="/my-orders" class="nav-link">
                                                        My Orders
                                                    </router-link>
                                                </li>
                                                <li class="nav-item">
                                                    <router-link to="/my-addresses" class="nav-link">
                                                        My Addresses
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link dropdown-toggle">Others</a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <router-link to="/demo-product" class="nav-link">
                                                        Demo Product
                                                    </router-link>
                                                </li>
                                                <li class="nav-item">
                                                    <router-link to="/feedback" class="nav-link">
                                                        Feedback
                                                    </router-link>
                                                </li>
                                                <li class="nav-item">
                                                    <router-link to="/terms-of-service" class="nav-link">
                                                        Terms Of Service
                                                    </router-link>
                                                </li>
                                                <li class="nav-item">
                                                    <router-link to="/privacy-policy" class="nav-link">
                                                        Privacy Policy
                                                    </router-link>
                                                </li>
                                                <li class="nav-item">
                                                    <router-link to="/search-page" class="nav-link">
                                                        Search Page
                                                    </router-link>
                                                </li>
                                                <li class="nav-item">
                                                    <router-link to="/coming-soon" class="nav-link">
                                                        Coming Soon
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link dropdown-toggle">Blogs</a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <router-link to="/blogs" class="nav-link">
                                                Blogs Grid
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/blogs-right-sidebar" class="nav-link">
                                                Blogs Right Sidebar
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/single-blog" class="nav-link">
                                                Single Blog
                                            </router-link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/contact" class="nav-link">Contact</router-link>
                                </li>
                            </ul>
                        </div>
                        <div class="navbar-option">
                            <div class="navbar-option-item">
                                <router-link to="/authentication" class="btn main-btn">
                                    Login Or Register
                                </router-link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

        <div class="search-overlay" :class="{ search: overlay }">
            <div 
                class="search-close"
                @click="overlay = !overlay"
            >
                <i class="icofont-close"></i>
            </div>
            <div class="search-form-area">
                <div class="search-area-logo">
                    <router-link to="/">
                        <img src="../../assets/images/logo-white.png" alt="logo">
                    </router-link>
                </div>
                <form>
                    <div class="form-group search-form-group">
                        <input type="text" placeholder="Search..." class="form-control" autofocus="autofocus">
                        <button>
                            <i class="icofont-search-1"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
        return {
            isSticky: false,
            isMenu: false,
            active: false,
            button_active_state: false,
            overlay: false,
            button_overlay_state: false,
        }
    },
    mounted(){
        const that = this
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY
            if(scrollPos >= 100){
                that.isSticky = true
            } else {
                that.isSticky = false
            }
        })
    },
}
</script>