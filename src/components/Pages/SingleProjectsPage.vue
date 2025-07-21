<template>
    <div>
        <Navbar class="bg-white" />
        <PageTitle pageTitle="Single Project" />
        <ProjectsDetails />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import ProjectsDetails from '../SingleProjects/ProjectsDetails'
import Newsletter from '../Common/Newsletter'
import Footer from '../Layout/Footer'

export default {
    name: 'SingleProjectsPage',
    components: {
        Navbar,
        PageTitle,
        ProjectsDetails,
        Newsletter,
        Footer,
    }
}
</script>