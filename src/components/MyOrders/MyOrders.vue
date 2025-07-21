<template>
    <div class="account-page-section pt-100 pb-70">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-4 col-lg-4 pb-30">
                    <div class="account-sidebar account-sidebar-dark">
                        <ul class="account-sidebar-list">
                            <li><router-link to="/my-account">My Account</router-link></li>
                            <li><router-link to="/my-orders">My Orders</router-link></li>
                            <li><router-link to="/my-addresses">My Addresses</router-link></li>
                            <li><router-link to="/">Sign Out</router-link></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-12 col-md-8 col-lg-8 pb-30">
                    <div class="account-info">
                        <div class="my-order align-items-center">
                            <div class="sub-section-title sub-section-title-white text-center text-lg-start">
                                <h2 class="sub-section-title-heading">My Orders</h2>
                            </div>
                            <div class="product-list-action">
                                <div class="product-list-form">
                                    <form>
                                        <select class="product-sort">
                                            <option value="default-sorting">Sort by latest</option>
                                            <option value="popularity">Sort by popoularity</option>
                                            <option value="lowtohigh">Sort by price: low to high</option>
                                            <option value="hightolow">Sort by price: high to low</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="cart-table cart-table-white">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Id</th>
                                        <th>Price</th>
                                        <th></th>
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
                                        <td class="cancel"><a href="#"><i class="icofont-close"></i></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyOrders'
}
</script>