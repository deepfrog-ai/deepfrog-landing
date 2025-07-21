<template>
    <div>
        <Navbar class="bg-white" />
        <PageTitle pageTitle="Pricing" />
        <Pricing />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import Pricing from '../Pricing/Pricing'
import Newsletter from '../Common/Newsletter'
import Footer from '../Layout/Footer'

export default {
    name: 'PricingPage',
    components: {
        Navbar,
        PageTitle,
        Pricing,
        Newsletter,
        Footer,
    }
}
</script>