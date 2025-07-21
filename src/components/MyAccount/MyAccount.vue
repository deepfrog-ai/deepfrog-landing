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
                        <form>
                            <div class="account-setting-item account-setting-avatar">
                                <div class="sub-section-title sub-section-title-white mt-0 text-center text-md-start">
                                    <h2 class="sub-section-title-heading">Avatar</h2>
                                </div>
                                <div class="account-avatar-info">
                                    <div class="account-avatar-thumb">
                                        <img src="../../assets/images/author-1.jpg" alt="avatar">
                                    </div>
                                    <ul class="account-avatar-action">
                                        <li><button class="btn main-btn">Upload</button></li>
                                        <li><button class="btn main-btn">Remove</button></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="divider"></div>
                            <div class="account-setting-item">
                                <div class="row">
                                    <div class="col-sm-12 col-md-6 col-lg-6">
                                        <div class="form-group mb-20">
                                            <input type="text" name="first_name" id="first_name" class="form-control" placeholder="First name"/>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-lg-6">
                                        <div class="form-group mb-20">
                                            <input type="text" name="last_name" id="last_name" class="form-control" placeholder="Last name"/>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-12 col-lg-12">
                                        <div class="form-group mb-20">
                                            <input type="text" name="email" id="email" class="form-control" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-12 col-lg-12">
                                        <div class="form-group">
                                            <input type="text" name="phone" id="phone" class="form-control" placeholder="Phone Number*" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="divider"></div>
                            <div class="account-setting-item account-setting-avatar">
                                <div class="sub-section-title sub-section-title-white mt-0 text-center text-md-start">
                                    <h2 class="sub-section-title-heading">Change Password</h2>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 col-md-12 col-lg-6">
                                        <div class="form-group mb-20">
                                            <input type="password" name="pass1" id="pass1" class="form-control" placeholder="Password" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 col-md-12 col-lg-6">
                                        <div class="form-group mb-20">
                                            <input type="password" name="pass2" id="pass2" class="form-control" placeholder="New password" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 col-md-12 col-lg-6">
                                        <div class="form-group">
                                            <input type="password" name="pass3" id="pass3" class="form-control" placeholder="Confirm password" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="divider"></div>
                            <div class="account-setting-item account-setting-button">
                                <button class="btn main-btn btn-small">Save Changes</button>
                                <button class="btn main-btn main-btn-black btn-small">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyAccount'
}
</script>