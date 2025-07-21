<template>
    <div>
        <Navbar class="bg-white" />
        <PageTitle pageTitle="Services" />
        <Services />
        <Testimonial />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import Services from '../Common/Services'
import Testimonial from '../Common/Testimonial'
import Newsletter from '../Common/Newsletter'
import Footer from '../Layout/Footer'

export default {
    name: 'ServicesPage',
    components: {
        Navbar,
        PageTitle,
        Services,
        Testimonial,
        Newsletter,
        Footer,
    }
}
</script>