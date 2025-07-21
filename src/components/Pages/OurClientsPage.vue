<template>
    <div>
        <Navbar class="bg-white" />
        <PageTitle pageTitle="Our Clients" />
        <OurClients />
        <WhyChooseUs />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import OurClients from '../OurClients/OurClients'
import WhyChooseUs from '../OurClients/WhyChooseUs'
import Newsletter from '../Common/Newsletter'
import Footer from '../Layout/Footer'

export default {
    name: 'OurClientsPage',
    components: {
        Navbar,
        PageTitle,
        OurClients,
        WhyChooseUs,
        Newsletter,
        Footer,
    }
}
</script>