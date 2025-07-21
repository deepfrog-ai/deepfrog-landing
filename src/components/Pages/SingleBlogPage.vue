<template>
    <div>
        <Navbar class="bg-white" />
        <PageTitle pageTitle="Single Blog" />
        <BlogDetails />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import BlogDetails from '../SingleBlog/BlogDetails'
import Newsletter from '../Common/Newsletter'
import Footer from '../Layout/Footer'

export default {
    name: 'SingleBlogPage',
    components: {
        Navbar,
        PageTitle,
        BlogDetails,
        Newsletter,
        Footer,
    }
}
</script>