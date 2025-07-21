<template>
    <div>
        <Navbar class="bg-white" />
        <MainBanner />
        <Feature />
        <About />
        <Services />
        <WhyChooseUs />
        <FreeTrial />
        <News />
        <Project />
        <Pricing />
        <Testimonial />
        <Blog />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import MainBanner from '../HomeThree/MainBanner'
import Feature from '../HomeThree/Feature'
import About from '../Common/About'
import Services from '../Common/Services'
import WhyChooseUs from '../HomeThree/WhyChooseUs'
import FreeTrial from '../Common/FreeTrial'
import News from '../Common/News'
import Project from '../Common/Project'
import Pricing from '../Common/Pricing'
import Testimonial from '../Common/Testimonial'
import Blog from '../Common/Blog'
import Newsletter from '../Common/Newsletter'
import Footer from '../Layout/Footer'

export default {
    name: 'HomePageThree',
    components: {
        Navbar,
        MainBanner,
        Feature,
        About,
        Services,
        WhyChooseUs,
        FreeTrial,
        News,
        Project,
        Pricing,
        Testimonial,
        Blog,
        Newsletter,
        Footer,
    }
}
</script>