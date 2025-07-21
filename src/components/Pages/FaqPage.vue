<template>
    <div>
        <Navbar class="bg-white" />
        <PageTitle pageTitle="FAQ's" />
        <Faq />
        <ContactForm />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import Faq from '../Faq/Faq'
import ContactForm from '../Faq/ContactForm'
import Newsletter from '../Common/Newsletter'
import Footer from '../Layout/Footer'

export default {
    name: 'FaqPage',
    components: {
        Navbar,
        PageTitle,
        Faq,
        ContactForm,
        Newsletter,
        Footer,
    }
}
</script>