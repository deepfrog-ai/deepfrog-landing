<template>
    <div>
        <Navbar class="bg-white" />
        <PageTitle pageTitle="Forget Password" />
        <ForgetPassword />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import ForgetPassword from '../ForgetPassword/ForgetPassword'
import Newsletter from '../Common/Newsletter'
import Footer from '../Layout/Footer'

export default {
    name: 'ForgetPasswordPage',
    components: {
        Navbar,
        PageTitle,
        ForgetPassword,
        Newsletter,
        Footer,
    }
}
</script>