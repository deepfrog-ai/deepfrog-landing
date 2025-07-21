<template>
    <div class="product-section pt-100 pb-100">
        <div class="container">
            <div class="product-list-header">
                <div class="product-list-header-item">
                    <div class="product-list-result">
                        <p>Showing <span>1-8</span> out of <span>32</span></p>
                    </div>
                </div>
                <div class="product-list-header-item">
                    <div class="product-list-action">
                        <div class="product-list-search product-list-action-item">
                            <form>
                                <div class="form-group">
                                    <input type="text" placeholder="Search your product" class="form-control">
                                    <button><i class="flaticon-loupe"></i></button>
                                </div>
                            </form>
                        </div>
                        <div class="product-list-form product-list-action-item">
                            <form>
                                <select class="product-sort">
                                    <option value="default-sorting" selected>Sort by latest</option>
                                    <option value="popularity">Sort by popoularity</option>
                                    <option value="lowtohigh">Sort by price: low to high</option>
                                    <option value="hightolow">Sort by price: high to low</option>
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-3 pb-30 product-card-item">
                    <div class="product-card">
                        <div class="product-card-thumb">
                            <router-link to="/single-product">
                                <img src="../../assets/images/products/product-1.png" alt="product">
                            </router-link>
                        </div>
                        <div class="product-card-details">
                            <h3><router-link to="/single-product">Magnite Camera</router-link></h3>
                            <ul class="review-star-list">
                                <li class="starred"><i class="icofont-star"></i></li>
                                <li class="starred"><i class="icofont-star"></i></li>
                                <li class="starred"><i class="icofont-star"></i></li>
                                <li class="starred"><i class="icofont-star"></i></li>
                                <li class="starred"><i class="icofont-star"></i></li>
                            </ul>
                            <h4 class="product-price"><del>$195.99</del>  $144.79</h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 pb-30 product-card-item">
                    <div class="product-card">
                        <div class="product-card-thumb">
                            <router-link to="/single-product">
                                <img src="../../assets/images/products/product-2.png" alt="product">
                            </router-link>
                        </div>
                        <div class="product-card-details">
                            <h3><router-link to="/single-product">Spy Camera</router-link></h3>
                            <ul class="review-star-list">
                                <li class="starred"><i class="icofont-star"></i></li>
                                <li class="starred"><i class="icofont-star"></i></li>
                                <li class="starred"><i class="icofont-star"></i></li>
                                <li class="starred"><i class="icofont-star"></i></li>
                                <li class="starred"><i class="icofont-star"></i></li>
                            </ul>
                            <h4 class="product-price"><del>$156.99</del>  $130.89</h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 pb-30 product-card-item">
                    <div class="product-card">
                        <div class="product-card-thumb">
                            <router-link to="/single-product">
                                <img src="../../assets/images/products/product-3.png" alt="product">
                            </router-link>
                        </div>
                        <div class="product-card-details">
                            <h3><router-link to="/single-product">Security Camera</router-link></h3>
                            <ul class="review-star-list">
                                <li class="starred"><i class="icofont-star"></i></li>
                                <li class="starred"><i class="icofont-star"></i></li>
                                <li class="starred"><i class="icofont-star"></i></li>
                                <li class="starred"><i class="icofont-star"></i></li>
                                <li class="starred"><i class="icofont-star"></i></li>
                            </ul>
                            <h4 class="product-price"><del>$123.99</del>  $108.59</h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 pb-30 product-card-item">
                    <div class="product-card">
                        <div class="product-card-thumb">
                            <router-link to="/single-product">
                                <img src="../../assets/images/products/product-4.png" alt="product">
                            </router-link>
                        </div>
                        <div class="product-card-details">
                            <h3><router-link to="/single-product">Smart Camera</router-link></h3>
                            <ul class="review-star-list">
                                <li class="starred"><i class="icofont-star"></i></li>
                                <li class="starred"><i class="icofont-star"></i></li>
                                <li class="starred"><i class="icofont-star"></i></li>
                                <li class="starred"><i class="icofont-star"></i></li>
                                <li><i class="icofont-star"></i></li>
                            </ul>
                            <h4 class="product-price"><del>$156.75</del>  $105.59</h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 pb-30 product-card-item">
                    <div class="product-card">
                        <div class="product-card-thumb">
                            <router-link to="/single-product">
                                <img src="../../assets/images/products/product-5.png" alt="product">
                            </router-link>
                        </div>
                        <div class="product-card-details">
                            <h3><router-link to="/single-product">CCTV Hidden</router-link></h3>
                            <ul class="review-star-list">
                                <li class="starred"><i class="icofont-star"></i></li>
                                <li class="starred"><i class="icofont-star"></i></li>
                                <li class="starred"><i class="icofont-star"></i></li>
                                <li><i class="icofont-star"></i></li>
                                <li><i class="icofont-star"></i></li>
                            </ul>
                            <h4 class="product-price"><del>$145.15</del>  $115.14</h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 pb-30 product-card-item">
                    <div class="product-card">
                        <div class="product-card-thumb">
                            <router-link to="/single-product">
                                <img src="../../assets/images/products/product-6.png" alt="product">
                            </router-link>
                        </div>
                        <div class="product-card-details">
                            <h3><router-link to="/single-product">CCTV Camera</router-link></h3>
                            <ul class="review-star-list">
                                <li class="starred"><i class="icofont-star"></i></li>
                                <li class="starred"><i class="icofont-star"></i></li>
                                <li class="starred"><i class="icofont-star"></i></li>
                                <li class="starred"><i class="icofont-star"></i></li>
                                <li class="starred"><i class="icofont-star"></i></li>
                            </ul>
                            <h4 class="product-price"><del>$168.85</del>  $112.45</h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 pb-30 product-card-item">
                    <div class="product-card">
                        <div class="product-card-thumb">
                            <router-link to="/single-product">
                                <img src="../../assets/images/products/product-7.png" alt="product">
                            </router-link>
                        </div>
                        <div class="product-card-details">
                            <h3><router-link to="/single-product">Smart Television</router-link></h3>
                            <ul class="review-star-list">
                                <li class="starred"><i class="icofont-star"></i></li>
                                <li class="starred"><i class="icofont-star"></i></li>
                                <li class="starred"><i class="icofont-star"></i></li>
                                <li class="starred"><i class="icofont-star"></i></li>
                                <li class="starred"><i class="icofont-star"></i></li>
                            </ul>
                            <h4 class="product-price"><del>$205.85</del>  $175.48</h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 pb-30 product-card-item">
                    <div class="product-card">
                        <div class="product-card-thumb">
                            <router-link to="/single-product">
                                <img src="../../assets/images/products/product-8.png" alt="product">
                            </router-link>
                        </div>
                        <div class="product-card-details">
                            <h3><router-link to="/single-product">Room Camera</router-link></h3>
                            <ul class="review-star-list">
                                <li class="starred"><i class="icofont-star"></i></li>
                                <li class="starred"><i class="icofont-star"></i></li>
                                <li class="starred"><i class="icofont-star"></i></li>
                                <li class="starred"><i class="icofont-star"></i></li>
                                <li><i class="icofont-star"></i></li>
                            </ul>
                            <h4 class="product-price"><del>$156.99</del>  $130.89</h4>
                        </div>
                    </div>
                </div>
            </div>
            <nav aria-label="Page Pagination" class="page-pagination">
                <ul class="pagination">
                    <li class="page-item disabled">
                    <a class="page-link" href="/products" tabindex="-1" aria-disabled="true"><i class="flaticon-left-chevron"></i></a>
                    </li>
                    <li class="page-item"><a class="page-link" href="/products">1</a></li>
                    <li class="page-item active" aria-current="page">
                    <a class="page-link" href="/products">2</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="/products">3</a></li>
                    <li class="page-item">
                    <a class="page-link" href="/products"><i class="flaticon-right-chevron"></i></a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Products'
}
</script>