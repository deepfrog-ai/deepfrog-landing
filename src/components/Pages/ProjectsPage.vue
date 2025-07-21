<template>
    <div>
        <Navbar class="bg-white" />
        <PageTitle pageTitle="Our Projects" />
        <Projects />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import Projects from '../Projects/Projects'
import Newsletter from '../Common/Newsletter'
import Footer from '../Layout/Footer'

export default {
    name: 'ProjectsPage',
    components: {
        Navbar,
        PageTitle,
        Projects,
        Newsletter,
        Footer,
    }
}
</script>