<template>
    <div>
        <Navbar class="bg-white" />
        <PageTitle pageTitle="My Addresses" />
        <MyAddresses />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import MyAddresses from '../MyAddresses/MyAddresses'
import Newsletter from '../Common/Newsletter'
import Footer from '../Layout/Footer'

export default {
    name: 'MyAddressesPage',
    components: {
        Navbar,
        PageTitle,
        MyAddresses,
        Newsletter,
        Footer,
    }
}
</script>