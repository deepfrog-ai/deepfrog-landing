<template>
    <div>
        <Navbar class="bg-white" />
        <PageTitle pageTitle="Testimonial" />
        <Testimonial />
        <WhyChooseUs />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import Testimonial from '../Testimonial/Testimonial'
import WhyChooseUs from '../Testimonial/WhyChooseUs'
import Newsletter from '../Common/Newsletter'
import Footer from '../Layout/Footer'

export default {
    name: 'TestimonialPage',
    components: {
        Navbar,
        PageTitle,
        Testimonial,
        WhyChooseUs,
        Newsletter,
        Footer,
    }
}
</script>