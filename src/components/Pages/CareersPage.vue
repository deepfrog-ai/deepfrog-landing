<template>
    <div>
        <Navbar class="bg-white" />
        <PageTitle pageTitle="Career" />
        <Career />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import Career from '../Career/Career'
import Newsletter from '../Common/Newsletter'
import Footer from '../Layout/Footer'

export default {
    name: 'CareersPage',
    components: {
        Navbar,
        PageTitle,
        Career,
        Newsletter,
        Footer,
    }
}
</script>