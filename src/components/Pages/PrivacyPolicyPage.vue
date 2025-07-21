<template>
    <div>
        <Navbar class="bg-white" />
        <PageTitle pageTitle="Privacy Policy" />
        <PrivacyPolicy />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy'
import Newsletter from '../Common/Newsletter'
import Footer from '../Layout/Footer'

export default {
    name: 'PrivacyPolicyPage',
    components: {
        Navbar,
        PageTitle,
        PrivacyPolicy,
        Newsletter,
        Footer,
    }
}
</script>