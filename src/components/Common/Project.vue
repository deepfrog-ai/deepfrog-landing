<template>
    <div class="project-section pt-min-100 pb-100 bg-off-white">
        <div class="container">
            <div class="section-title section-title-lg">
                <h2>Projects In Different Domain Of Industry</h2>
                <p>Our purpose is to deliver excellence in service and execution Our purpose is to deliver excellence in service and Our purpose is to deliver excellence in service.</p>
            </div>
        </div>
        <div class="container-fluid p-md-0">
            <div class="project-carousel default-carousel">
                <carousel
                    :autoplay="5000"
                    :settings='settings'
                    :breakpoints='breakpoints'
                    :wrap-around="true"
                >
                    <slide 
                        v-for="slide in carouselItems" 
                        :key="slide.id"
                    >
                        <div class="project-flat-card">
                            <div class="project-flat-thumb">
                                <router-link to="/single-case">
                                    <img :src="slide.image" alt="project">
                                </router-link>
                            </div>
                            <div class="project-flat-text">
                                <h3>
                                    <router-link to="/single-case">
                                        {{slide.title}}
                                    </router-link>
                                </h3>
                            </div>
                        </div>
                    </slide>

                    <template #addons>
                        <navigation>
                            <template #next>
                                <i class='icofont-arrow-right'></i>
                            </template>
                            <template #prev>
                                <i class='icofont-arrow-left'></i>
                            </template>
                        </navigation>
                    </template>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'Project',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data: () => ({
        carouselItems: [
            {
                id: 1,
                title: 'Drone And Robot Training',
                image: require('../../assets/images/cases/case-lg-1.jpg'),
            },
            {
                id: 2,
                title: 'Data Mining Revolution',
                image: require('../../assets/images/cases/case-lg-2.jpg'),
            },
            {
                id: 3,
                title: 'Automatic Project Management',
                image: require('../../assets/images/cases/case-lg-3.jpg'),
            },
            {
                id: 4,
                title: 'Drone And Robot Training',
                image: require('../../assets/images/cases/case-lg-1.jpg'),
            },
            {
                id: 5,
                title: 'Data Mining Revolution',
                image: require('../../assets/images/cases/case-lg-2.jpg'),
            },
            {
                id: 6,
                title: 'Automatic Project Management',
                image: require('../../assets/images/cases/case-lg-3.jpg'),
            },
        ],
        breakpoints: {
            0: {
                itemsToShow: 1,
                snapAlign: 'center',
			},
            768: {
                itemsToShow: 1.5,
                snapAlign: 'center',
            },
            992: {
                itemsToShow: 2.1,
                snapAlign: 'center',
            },
        },
    }),
})
</script>