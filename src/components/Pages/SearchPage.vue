<template>
    <div>
        <Navbar class="bg-white" />
        <PageTitle pageTitle="Search Page" />
        <Search />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import Search from '../Search/Search'
import Newsletter from '../Common/Newsletter'
import Footer from '../Layout/Footer'

export default {
    name: 'SearchPage',
    components: {
        Navbar,
        PageTitle,
        Search,
        Newsletter,
        Footer,
    }
}
</script>