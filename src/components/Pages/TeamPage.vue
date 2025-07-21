<template>
    <div>
        <Navbar class="bg-white" />
        <PageTitle pageTitle="Our Team" />
        <Team />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import Team from '../Team/Team'
import Newsletter from '../Common/Newsletter'
import Footer from '../Layout/Footer'

export default {
    name: 'TeamPage',
    components: {
        Navbar,
        PageTitle,
        Team,
        Newsletter,
        Footer,
    }
}
</script>