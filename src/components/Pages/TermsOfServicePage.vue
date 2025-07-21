<template>
    <div>
        <Navbar class="bg-white" />
        <PageTitle pageTitle="Terms Of Service" />
        <TermsOfService />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import TermsOfService from '../TermsOfService/TermsOfService'
import Newsletter from '../Common/Newsletter'
import Footer from '../Layout/Footer'

export default {
    name: 'TermsOfServicePage',
    components: {
        Navbar,
        PageTitle,
        TermsOfService,
        Newsletter,
        Footer,
    }
}
</script>