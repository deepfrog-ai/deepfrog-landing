<template>
    <div>
        <Navbar />
        <MainBanner />
        <Process />
        <Services />
        <News />
        <Project />
        <Pricing />
        <Testimonial />
        <Feature />
        <Blog class="bg-off-white" />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import MainBanner from '../HomeTwo/MainBanner'
import Process from '../HomeTwo/Process'
import Services from '../HomeTwo/Services'
import News from '../Common/News'
import Project from '../Common/Project'
import Pricing from '../Common/Pricing'
import Testimonial from '../Common/Testimonial'
import Feature from '../HomeTwo/Feature'
import Blog from '../Common/Blog'
import Newsletter from '../Common/Newsletter'
import Footer from '../Layout/Footer'

export default {
    name: 'HomePageTwo',
    components: {
        Navbar,
        MainBanner,
        Process,
        Services,
        News,
        Project,
        Pricing,
        Testimonial,
        Feature,
        Blog,
        Newsletter,
        Footer,
    }
}
</script>