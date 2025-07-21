<template>
    <div>
        <Navbar class="bg-white" />
        <PageTitle pageTitle="Single Cases" />
        <SingleCasesStudy />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import SingleCasesStudy from '../SingleCasesStudy/SingleCasesStudy'
import Newsletter from '../Common/Newsletter'
import Footer from '../Layout/Footer'

export default {
    name: 'SingleCasesStudyPage',
    components: {
        Navbar,
        PageTitle,
        SingleCasesStudy,
        Newsletter,
        Footer,
    }
}
</script>