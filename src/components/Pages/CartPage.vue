<template>
    <div>
        <Navbar class="bg-white" />
        <PageTitle pageTitle="Cart" />
        <Cart />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import Cart from '../Cart/Cart'
import Newsletter from '../Common/Newsletter'
import Footer from '../Layout/Footer'

export default {
    name: 'CartPage',
    components: {
        Navbar,
        PageTitle,
        Cart,
        Newsletter,
        Footer,
    }
}
</script>