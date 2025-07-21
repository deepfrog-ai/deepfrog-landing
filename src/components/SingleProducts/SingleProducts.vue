<template>
    <div class="product-details-section pt-100 pb-100">
        <div class="container">
            <div class="product-details-content">
                <div class="row align-items-center">
                    <div class="col-12 col-lg-5 pb-30">
                        <div class="product-details-item desk-pad-right-40">
                            <div class="product-details-slider">
                                <div class="product-slider-for gallery-grid">
                                    <div class="item">
                                        <img src="../../assets/images/products/product-preview1.png" alt="product">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-7 pb-30">
                        <div class="product-details-item">
                            <div class="product-details-caption">
                                <h3>Magnite Camera</h3>
                                <h5>ID: ER-001-002</h5>
                                <div class="review-star-group">
                                    <ul class="review-star-list">
                                        <li class="starred"><i class="icofont-star"></i></li>
                                        <li class="starred"><i class="icofont-star"></i></li>
                                        <li class="starred"><i class="icofont-star"></i></li>
                                        <li class="starred"><i class="icofont-star"></i></li>
                                        <li class="starred"><i class="icofont-star"></i></li>
                                    </ul>
                                    <span>(4.5 Reviews)</span>
                                </div>
                                <h4 class="product-price"><del>$156.99</del>  $130.89</h4>
                                <div class="product-details-para">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <p>Ut enim ad minimquae aut fugit, sed quia consequuntur magni doloreratione voluptatem  a incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                </div>
                                <div class="product-quantity product-action-info">
                                    <h4 class="mb-0">Quantity:</h4>
                                    <div class="d-flex flex-wrap align-items-center">
                                        <div class="cart-quantity">
                                            <button @click="decrement" class="qu-btn dec">
                                                <i class="icofont-minus"></i>
                                            </button>
                                            <input type="text" class="qu-input" :value="itemNumber">
                                            <button @click="increment" class="qu-btn inc">
                                                <i class="icofont-plus"></i>
                                            </button>
                                        </div>
                                        <a href="#" class="btn main-btn">Add To Cart</a>
                                    </div>
                                </div>
                                <div class="share-post product-action-info">
                                    <h4>Share</h4>
                                    <ul class="social-list">
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank"><i class="icofont-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank"><i class="icofont-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank"><i class="icofont-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.pinterest.com/" target="_blank"><i class="icofont-pinterest"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product-details-tab">
                    <h1>Description</h1>
                    <div class="product-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consete.</li>
                            <li>Ture sadipscing elitr, sed diam. </li>
                            <li>Nonumy eirmo od tey mpor invidunt.</li>
                            <li>Uti labore et dolorer magna aliqu. </li>
                            <li>Erat, sed diam voluptui. At veropei. </li>
                        </ul>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    </div>
                    <h1>Reviews</h1>
                    <div class="product-review-box">
                        <div class="post-review-box">
                            <div class="review-holder-item">
                                <!-- main comment holder -->
                                <div class="post-review-item post-review-item-main">
                                    <div class="post-review-thumb">
                                        <img src="../../assets/images/blogs/blog-author-1.jpg" alt="user">
                                    </div>
                                    <div class="post-review-content">
                                        <div class="post-review-content-header">
                                            <div class="post-review-header-item">
                                                <h3>Jane Ronan</h3>
                                                <p>3 weeks ago</p>
                                            </div>
                                            <div class="post-review-header-item">
                                                <a href="#" class="post-review-btn">Reply</a>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consetetur sa dipscing elitr, sed diam nonumy ser irmodey tey mporep invidunt ut laboredi et dolore ma gna aliquyam.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="review-holder-item">
                                <!-- main comment holder -->
                                <div class="post-review-item post-review-item-main">
                                    <div class="post-review-thumb">
                                        <img src="../../assets/images/blogs/blog-author-3.jpg" alt="review">
                                    </div>
                                    <div class="post-review-content">
                                        <div class="post-review-content-header">
                                            <div class="post-review-header-item">
                                                <h3>Robert John</h3>
                                                <p>3 weeks ago</p>
                                            </div>
                                            <div class="post-review-header-item">
                                                <a href="#" class="post-review-btn">Reply</a>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consetetur sa dipscing elitr, sed diam nonumy ser irmodey tey mporep invidunt ut laboredi et dolore ma gna aliquyam.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="post-comment-area mt-40">
                            <div class="sub-section-title">
                                <h2 class="sub-section-title-heading">Leave A Review</h2>
                            </div>
                            <form class="contact-form" id="contactForm">
                                <div class="star-rating mb-20">
                                    <input type="radio" id="5-stars" name="rating" value="5" />
                                    <label for="5-stars" class="star"></label>
                                    <input type="radio" id="4-stars" name="rating" value="4" />
                                    <label for="4-stars" class="star"></label>
                                    <input type="radio" id="3-stars" name="rating" value="3" />
                                    <label for="3-stars" class="star"></label>
                                    <input type="radio" id="2-stars" name="rating" value="2" />
                                    <label for="2-stars" class="star"></label>
                                    <input type="radio" id="1-star" name="rating" value="1" />
                                    <label for="1-star" class="star"></label>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group mb-20">
                                            <input type="text" name="name" id="name" class="form-control" placeholder="Your Name*" required />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group mb-20">
                                            <input type="text" name="email" id="email" class="form-control" placeholder="Your Email*" required/>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group mb-20">
                                            <textarea name="message" class="form-control" id="message" rows="6" placeholder="Your Review*"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="input-checkbox mb-20">
                                            <input type="checkbox" id="contact1">
                                            <label for="contact1">Save my name and email in this browser for the next time I review.</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn main-btn full-width" type="submit">Send A Review</button>
                                        <div id="msgSubmit"></div>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SingleProducts',
    data() {
        return {
            itemNumber: 1,
        };
    },
    methods: {
        increment() {
            if (this.itemNumber) {
                this.itemNumber++;
            }
        },
        decrement() {
            if (this.itemNumber > 1) {
                this.itemNumber--;
            }
        },
    },
}
</script>