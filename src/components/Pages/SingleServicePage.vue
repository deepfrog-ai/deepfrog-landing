<template>
    <div>
        <Navbar class="bg-white" />
        <PageTitle pageTitle="Single Service" />
        <ServicesDetails />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import ServicesDetails from '../SingleService/ServicesDetails'
import Newsletter from '../Common/Newsletter'
import Footer from '../Layout/Footer'

export default {
    name: 'SingleServicePage',
    components: {
        Navbar,
        PageTitle,
        ServicesDetails,
        Newsletter,
        Footer,
    }
}
</script>