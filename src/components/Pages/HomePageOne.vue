<template>
    <div>
        <Navbar />
        <MainBanner />
        <Feature />
        <About />
        <Services />
        <FreeTrial />
        <Process />
        <Testimonial />
        <Blog class="bg-off-white" />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import MainBanner from '../HomeOne/MainBanner'
import Feature from '../HomeOne/Feature'
import About from '../Common/About'
import Services from '../Common/Services'
import FreeTrial from '../Common/FreeTrial'
import Process from '../HomeOne/Process'
import Testimonial from '../HomeOne/Testimonial'
import Blog from '../Common/Blog'
import Newsletter from '../Common/Newsletter'
import Footer from '../Layout/Footer'

export default {
    name: 'HomePageOne',
    components: {
        Navbar,
        MainBanner,
        Feature,
        About,
        Services,
        FreeTrial,
        Process,
        Testimonial,
        Blog,
        Newsletter,
        Footer,
    }
}
</script>