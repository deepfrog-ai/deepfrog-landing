<template>
    <div>
        <Navbar class="bg-white" />
        <PageTitle pageTitle="Contact" />
        <ContactInfo />
        <ContactForm />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import ContactInfo from '../Contact/ContactInfo'
import ContactForm from '../Contact/ContactForm'
import Newsletter from '../Common/Newsletter'
import Footer from '../Layout/Footer'

export default {
    name: 'ContactPage',
    components: {
        Navbar,
        PageTitle,
        ContactInfo,
        ContactForm,
        Newsletter,
        Footer,
    }
}
</script>