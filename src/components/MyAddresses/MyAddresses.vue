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
                        <div class="account-setting-item account-setting-avatar">
                            <div class="sub-section-title sub-section-title-white mt-0">
                                <h2 class="sub-section-title-heading">My Addresses</h2>
                                <p>The following addresses will be used on the checkout page by default.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="billing-title">
                                    <h4>Biliing Address</h4>
                                    <p
                                        @click="active = !active" 
                                        :aria-pressed="active ? 'true' : 'false'"
                                        v-bind:class="{ 'active': button_active_state }"
                                        v-on:click="button_active_state = !button_active_state"
                                    >Edit</p>
                                </div>
                                <div class="billing-address" :class="{ none: active }">
                                    <address>
                                        214, Queens Road 4th Cross <br>
                                        New York, 5240
                                    </address>
                                    <p class="billing-address-info">You have not set up this type of address yet.</p> <!-- Right now, it's css is display: none. This element will be used if there are no any content inside address tag. -->
                                </div>
                                <div class="billing-address-input" :class="{ active: active }">
                                    <form>
                                        <div class="row">
                                            <div class="col-12 col-md-6">
                                                <div class="form-group mb-20">
                                                    <input type="text" name="name" class="form-control" required placeholder="First name*">
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6">
                                                <div class="form-group mb-20">
                                                    <input type="text" name="name" class="form-control" required placeholder="Last name*">
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6">
                                                <div class="form-group mb-20">
                                                    <input type="text" name="email" class="form-control" required placeholder="Email*">
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6">
                                                <div class="form-group mb-20">
                                                    <input type="text" name="phone" class="form-control" required placeholder="Phone no*">
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group mb-20">
                                                    <input type="text" name="address" class="form-control" required placeholder="Address*">
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group mb-20">
                                                    <input type="text" name="state" class="form-control" required placeholder="State*">
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group mb-20">
                                                    <input type="text" name="country" class="form-control" required placeholder="Country*">
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <button type="submit" class="btn main-btn full-width">Place Order</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyAddresses',
    data(){
        return {
            isSticky: false,
            isMenu: false,
            active: false,
            button_active_state: false,
        }
    },
}
</script>