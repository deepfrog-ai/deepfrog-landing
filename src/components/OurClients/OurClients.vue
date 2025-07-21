<template>
    <div class="partner-section pt-min-100 pb-100">
        <div class="container">
            <div class="section-title section-title-lg">
                <h2>Our Happy Clients</h2>
                <p>Our purpose is to deliver excellence in service and execution Our purpose is to deliver excellence in service and Our purpose is to deliver excellence in service.</p>
            </div>
            <div class="partner-carousel">
                <carousel
                    :autoplay="5000"
                    :settings='settings'
                    :breakpoints='breakpoints'
                >
                    <slide 
                        v-for="slide in carouselItems" 
                        :key="slide.id"
                    >
                        <div class="item">
                            <img :src="slide.image" alt="partner">
                        </div>
                    </slide>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'OurClients',
    components: {
        Carousel,
        Slide,
    },
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        carouselItems: [
            {
                id: 1,
                image: require('../../assets/images/partner/partner-1.png'),
            },
            {
                id: 2,
                image: require('../../assets/images/partner/partner-2.png'),
            },
            {
                id: 3,
                image: require('../../assets/images/partner/partner-3.png'),
            },
            {
                id: 4,
                image: require('../../assets/images/partner/partner-4.png'),
            },
            {
                id: 5,
                image: require('../../assets/images/partner/partner-5.png'),
            },
            {
                id: 6,
                image: require('../../assets/images/partner/partner-6.png'),
            },
            {
                id: 7,
                image: require('../../assets/images/partner/partner-7.png'),
            },
        ],
        breakpoints: {
            0: {
                itemsToShow: 1,
                snapAlign: 'left',
			},
            768: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            992: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
            1200: {
                itemsToShow: 5,
                snapAlign: 'center',
            },
        },
    }),
})
</script>