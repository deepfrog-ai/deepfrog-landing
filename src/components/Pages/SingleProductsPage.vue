<template>
    <div>
        <Navbar class="bg-white" />
        <PageTitle pageTitle="Single Products" />
        <SingleProducts />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import SingleProducts from '../SingleProducts/SingleProducts'
import Newsletter from '../Common/Newsletter'
import Footer from '../Layout/Footer'

export default {
    name: 'SingleProductsPage',
    components: {
        Navbar,
        PageTitle,
        SingleProducts,
        Newsletter,
        Footer,
    }
}
</script>