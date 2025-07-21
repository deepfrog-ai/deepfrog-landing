<template>
    <div>
        <Navbar class="bg-white" />
        <PageTitle pageTitle="Authentication" />
        <Authentication />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import Authentication from '../Authentication/Authentication'
import Newsletter from '../Common/Newsletter'
import Footer from '../Layout/Footer'

export default {
    name: 'AuthenticationPage',
    components: {
        Navbar,
        PageTitle,
        Authentication,
        Newsletter,
        Footer,
    }
}
</script>