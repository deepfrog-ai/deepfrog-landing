<template>
    <div>
        <Navbar class="bg-white" />
        <PageTitle pageTitle="My Account" />
        <MyAccount />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import MyAccount from '../MyAccount/MyAccount'
import Newsletter from '../Common/Newsletter'
import Footer from '../Layout/Footer'

export default {
    name: 'MyAccountPage',
    components: {
        Navbar,
        PageTitle,
        MyAccount,
        Newsletter,
        Footer,
    }
}
</script>