<template>
    <div>
        <Navbar class="bg-white" />
        <PageTitle pageTitle="Our Cases" />
        <CasesStudy />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import CasesStudy from '../CasesStudyTwo/CasesStudy'
import Newsletter from '../Common/Newsletter'
import Footer from '../Layout/Footer'

export default {
    name: 'CasesStudyTwoPage',
    components: {
        Navbar,
        PageTitle,
        CasesStudy,
        Newsletter,
        Footer,
    }
}
</script>