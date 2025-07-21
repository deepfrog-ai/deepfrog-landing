<template>
    <div>
        <Navbar class="bg-white" />
        <PageTitle pageTitle="Feedback" />
        <Feedback />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import Feedback from '../Feedback/Feedback'
import Newsletter from '../Common/Newsletter'
import Footer from '../Layout/Footer'

export default {
    name: 'FeedbackPage',
    components: {
        Navbar,
        PageTitle,
        Feedback,
        Newsletter,
        Footer,
    }
}
</script>