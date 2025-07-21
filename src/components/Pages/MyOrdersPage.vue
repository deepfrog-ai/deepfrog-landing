<template>
    <div>
        <Navbar class="bg-white" />
        <PageTitle pageTitle="My Orders" />
        <MyOrders />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import MyOrders from '../MyOrders/MyOrders'
import Newsletter from '../Common/Newsletter'
import Footer from '../Layout/Footer'

export default {
    name: 'MyOrdersPage',
    components: {
        Navbar,
        PageTitle,
        MyOrders,
        Newsletter,
        Footer,
    }
}
</script>