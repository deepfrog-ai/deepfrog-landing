<template>
    <div>
        <Navbar class="bg-white" />
        <PageTitle pageTitle="Blog Right Sidebar" />
        <Blog />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import Blog from '../BlogRightSidebar/Blog'
import Newsletter from '../Common/Newsletter'
import Footer from '../Layout/Footer'

export default {
    name: 'BlogRightSidebarPage',
    components: {
        Navbar,
        PageTitle,
        Blog,
        Newsletter,
        Footer,
    }
}
</script>