<template>
    <div class="testimonial-section p-tb-100 bg-off-white">
        <div class="container">
            <div class="testimonial-carousel default-carousel">
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
                        <div class="testimonial-card">
                            <div class="testimonial-card-body">
                                <div class="testimonial-card-inner-header">
                                    <h3>{{slide.title}}</h3>
                                    <div class="testimonial-quote">
                                        <i class="icofont-quote-left"></i>
                                    </div>
                                </div>
                                <p class="testimonial-para">{{slide.desc}}</p>
                                <ul class="review-star-list">
                                    <li class="starred"><i class="icofont-star"></i></li>
                                    <li class="starred"><i class="icofont-star"></i></li>
                                    <li class="starred"><i class="icofont-star"></i></li>
                                    <li class="starred"><i class="icofont-star"></i></li>
                                    <li class="starred"><i class="icofont-star"></i></li>
                                </ul>
                            </div>
                            <div class="testimonial-card-info">
                                <div class="testimonial-card-info-thumb">
                                    <img :src="slide.image" alt="testimonial">
                                </div>
                                <div class="testimonial-card-info-text">
                                    <h3 class="testimonial-name">{{slide.name}}</h3>
                                    <p class="testimonial-address">{{slide.address}}</p>
                                </div>
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
    name: 'Testimonial',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        carouselItems: [
            {
                id: 1,
                title: 'Deltabel',
                desc: 'Proin gravida nibh vel velit auctor aliquet Aenean sollicitudin. Proin gravida nibh vel velit auctor aliquet Aenean sollicitudin.',
                image: require('../../assets/images/testimonial-1.jpg'),
                name: 'Johnson Mandel',
                address: 'Los Angel',
            },
            {
                id: 2,
                title: 'Pentham CX',
                desc: 'Proin gravida nibh vel velit auctor aliquet Aenean sollicitudin. Proin gravida nibh vel velit auctor aliquet Aenean sollicitudin.',
                image: require('../../assets/images/testimonial-1.jpg'),
                name: 'Bentham Rober',
                address: 'Bremen',
            },
            {
                id: 3,
                title: 'Floradex  TL',
                desc: 'Proin gravida nibh vel velit auctor aliquet Aenean sollicitudin. Proin gravida nibh vel velit auctor aliquet Aenean sollicitudin.',
                image: require('../../assets/images/testimonial-1.jpg'),
                name: 'Thomas Albin',
                address: 'New York',
            },
            {
                id: 4,
                title: 'Fantabulous',
                desc: 'Proin gravida nibh vel velit auctor aliquet Aenean sollicitudin. Proin gravida nibh vel velit auctor aliquet Aenean sollicitudin.',
                image: require('../../assets/images/testimonial-1.jpg'),
                name: 'Deanna',
                address: 'Los Angel',
            },
        ],
        breakpoints: {
            0: {
                itemsToShow: 1,
                snapAlign: 'center',
			},
            768: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            992: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
        },
    }),
})
</script>