<template>
    <div>
        <Preloader v-if="isLoading" />
        <router-view />
        <ScrollTop />
    </div>
</template>

<script>
import Preloader from './components/Layout/Preloader'
import ScrollTop from './components/Layout/ScrollTop'

export default {
    name: 'App',
    components: {
        Preloader,
        ScrollTop,
    },
    data() {
        return {
            isLoading: true
        }
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false
        }, 1000)
    }
}
</script>