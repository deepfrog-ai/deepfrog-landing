<template>
    <div class="error-page-section">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="error-page-content">
                        <img src="../../assets/images/404.png" alt="404">
                        <h2>Error 404: Page Not found</h2>
                        <p>The page you were looking for could not be found.</p>
                        <router-link to="/" class="btn main-btn">Go To Homepage</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchPage'
}
</script>