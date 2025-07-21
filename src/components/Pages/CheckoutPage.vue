<template>
    <div>
        <Navbar class="bg-white" />
        <PageTitle pageTitle="Checkout" />
        <Checkout />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import Checkout from '../Checkout/Checkout'
import Newsletter from '../Common/Newsletter'
import Footer from '../Layout/Footer'

export default {
    name: 'CheckoutPage',
    components: {
        Navbar,
        PageTitle,
        Checkout,
        Newsletter,
        Footer,
    }
}
</script>