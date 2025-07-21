<template>
    <div>
        <Navbar class="bg-white" />
        <PageTitle pageTitle="Products" />
        <Products />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import Products from '../Shop/Products'
import Newsletter from '../Common/Newsletter'
import Footer from '../Layout/Footer'

export default {
    name: 'ProductsPage',
    components: {
        Navbar,
        PageTitle,
        Products,
        Newsletter,
        Footer,
    }
}
</script>