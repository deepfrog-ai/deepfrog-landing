<template>
    <div class="cart-section pt-100 pb-70">
        <div class="container">
            <div class="cart-section-inner">
                <div class="cart-section-item cart-section-contents"> 
                    <div class="cart-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>ID</th>
                                    <th>Unit Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="product-table-info">
                                            <div class="product-table-thumb">
                                                <img src="../../assets/images/products/product-1.png" alt="product">
                                            </div>
                                            <span>Magnite Camera</span>
                                        </div>
                                    </td>
                                    <td class="weight-500">ER-001-001</td>
                                    <td>$144.79</td>
                                    <td>
                                        <div class="cart-quantity">
                                            <button @click="decrement" class="qu-btn dec">
                                                <i class="icofont-minus"></i>
                                            </button>
                                            <input type="text" class="qu-input" :value="itemNumber">
                                            <button @click="increment" class="qu-btn inc">
                                                <i class="icofont-plus"></i>
                                            </button>
                                        </div>
                                    </td>
                                    <td>$144.79</td>
                                    <td class="cancel"><a href="#"><i class="icofont-close"></i></a></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="product-table-info">
                                            <div class="product-table-thumb">
                                                <img src="../../assets/images/products/product-2.png" alt="product">
                                            </div>
                                            <span>Spy Camera</span>
                                        </div>
                                    </td>
                                    <td class="weight-500">ER-001-002</td>
                                    <td>$130.89</td>
                                    <td>
                                        <div class="cart-quantity">
                                            <button @click="decrement" class="qu-btn dec">
                                                <i class="icofont-minus"></i>
                                            </button>
                                            <input type="text" class="qu-input" :value="itemNumber">
                                            <button @click="increment" class="qu-btn inc">
                                                <i class="icofont-plus"></i>
                                            </button>
                                        </div>
                                    </td>
                                    <td>$261.78</td>
                                    <td class="cancel"><a href="#"><i class="icofont-close"></i></a></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="product-table-info">
                                            <div class="product-table-thumb">
                                                <img src="../../assets/images/products/product-3.png" alt="product">
                                            </div>
                                            <span>Security Camera</span>
                                        </div>
                                    </td>
                                    <td class="weight-500">ER-001-003</td>
                                    <td>$108.59</td>
                                    <td>
                                        <div class="cart-quantity">
                                            <button @click="decrement" class="qu-btn dec">
                                                <i class="icofont-minus"></i>
                                            </button>
                                            <input type="text" class="qu-input" :value="itemNumber">
                                            <button @click="increment" class="qu-btn inc">
                                                <i class="icofont-plus"></i>
                                            </button>
                                        </div>
                                    </td>
                                    <td>$217.18</td>
                                    <td class="cancel"><a href="#"><i class="icofont-close"></i></a></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="product-table-info">
                                            <div class="product-table-thumb">
                                                <img src="../../assets/images/products/product-4.png" alt="product">
                                            </div>
                                            <span>Smart Camera</span>
                                        </div>
                                    </td>
                                    <td class="weight-500">ER-001-004</td>
                                    <td>$105.59</td>
                                    <td>
                                        <div class="cart-quantity">
                                            <button @click="decrement" class="qu-btn dec">
                                                <i class="icofont-minus"></i>
                                            </button>
                                            <input type="text" class="qu-input" :value="itemNumber">
                                            <button @click="increment" class="qu-btn inc">
                                                <i class="icofont-plus"></i>
                                            </button>
                                        </div>
                                    </td>
                                    <td>$316.77</td>
                                    <td class="cancel"><a href="#"><i class="icofont-close"></i></a></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="product-table-info">
                                            <div class="product-table-thumb">
                                                <img src="../../assets/images/products/product-5.png" alt="product">
                                            </div>
                                            <span>CCTV Hidden</span>
                                        </div>
                                    </td>
                                    <td class="weight-500">ER-001-005</td>
                                    <td>$115.14</td>
                                    <td>
                                        <div class="cart-quantity">
                                            <button @click="decrement" class="qu-btn dec">
                                                <i class="icofont-minus"></i>
                                            </button>
                                            <input type="text" class="qu-input" :value="itemNumber">
                                            <button @click="increment" class="qu-btn inc">
                                                <i class="icofont-plus"></i>
                                            </button>
                                        </div>
                                    </td>
                                    <td>$115.14</td>
                                    <td class="cancel"><a href="#"><i class="icofont-close"></i></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="row justify-content-between align-items-center mt-30">
                        <div class="col-sm-12 col-md-7 col-lg-5">
                            <div class="cart-coupon cart-info-item">
                                <form>
                                    <div class="form-group">
                                        <input type="email" class="form-control" placeholder="Enter Coupon Code">
                                        <button class="btn main-btn">Apply Coupon</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-sm-12 col-md-6 col-lg-6 pb-30">
                            <div class="cart-image">
                                <img src="../../assets/images/cart.png" alt="cart">
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-6 pb-30">
                            <div class="cart-details default-box-shadow">
                                <h3 class="cart-details-title">Cart Totals</h3>
                                <div class="cart-total-box">
                                    <div class="cart-total-item">
                                        <h4>Subtotal</h4>
                                        <p>$144.79</p>
                                    </div>
                                    <div class="cart-total-item">
                                        <h4>Shipping</h4>
                                        <p>$261.78</p>
                                    </div>
                                    <div class="cart-total-item">
                                        <h4>Total</h4>
                                        <p>$406.57</p>
                                    </div>
                                </div>
                                <router-link to="/checkout" class="btn main-btn">Make Payment</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cart-section-item cart-section-empty">
                    <div class="cart-empty-content">
                        <div class="cart-empty-image">
                            <img src="../../assets/images/cart.png" alt="cart">
                        </div>
                        <div class="cart-empty-text">
                            <h3><span>Sorry!!</span> Your Cart Is Currently Empty.</h3>
                            <p>Get the most dedicated consultation for your life-changing course</p>
                            <router-link to="/products" class="btn main-btn">Back To Shop</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cart',
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