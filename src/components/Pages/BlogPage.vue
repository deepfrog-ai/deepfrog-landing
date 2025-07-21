<template>
    <div>
        <Navbar class="bg-white" />
        <PageTitle pageTitle="Latest News & Blogs" />
        <Blog />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import Blog from '../Blog/Blog'
import Newsletter from '../Common/Newsletter'
import Footer from '../Layout/Footer'

export default {
    name: 'BlogPage',
    components: {
        Navbar,
        PageTitle,
        Blog,
        Newsletter,
        Footer,
    }
}
</script>