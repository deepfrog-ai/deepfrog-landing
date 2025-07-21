<template>
    <div>
        <Navbar class="bg-white" />
        <PageTitle pageTitle="About Us" />
        <About />
        <WhyChooseUs />
        <Testimonial />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import About from '../Common/About'
import WhyChooseUs from '../About/WhyChooseUs'
import Testimonial from '../Common/Testimonial'
import Newsletter from '../Common/Newsletter'
import Footer from '../Layout/Footer'

export default {
    name: 'AboutPage',
    components: {
        Navbar,
        PageTitle,
        About,
        WhyChooseUs,
        Testimonial,
        Newsletter,
        Footer,
    }
}
</script>