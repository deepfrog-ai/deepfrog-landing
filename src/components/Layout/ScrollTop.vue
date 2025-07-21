<template>
    <div 
        @click="scrollToTop()" 
        :class="['scroll-top', {'scrolltopactive': isTop}]"
    >
        <div class="scroll-top-inner">
            <i class="icofont-long-arrow-up"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ScrollTop',
    data (){
        return {
            isTop: false
        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    },
    mounted(){
        const that = this
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY
            if(scrollPos >= 100){
                that.isTop = true
            } else {
                that.isTop = false
            }
        })
    }
}
</script>