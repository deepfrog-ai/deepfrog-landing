<template>
    <div>
        <Navbar class="bg-white" />
        <PageTitle pageTitle="Demo Product" />
        <DemoProduct />
        <WhyChooseUs />
        <Testimonial />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import DemoProduct from '../DemoProduct/DemoProduct'
import WhyChooseUs from '../DemoProduct/WhyChooseUs'
import Testimonial from '../Common/Testimonial'
import Newsletter from '../Common/Newsletter'
import Footer from '../Layout/Footer'

export default {
    name: 'DemoProductPage',
    components: {
        Navbar,
        PageTitle,
        DemoProduct,
        WhyChooseUs,
        Testimonial,
        Newsletter,
        Footer,
    }
}
</script>