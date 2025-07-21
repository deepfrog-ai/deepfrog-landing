<template>
    <div class="inner-page-header">
        <div class="container">
            <div class="inner-header-content">
                <h1>{{pageTitle}}</h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">{{pageTitle}}</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageTitle',
    props: ['pageTitle']
}
</script>