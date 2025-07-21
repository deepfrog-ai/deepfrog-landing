<template>
    <div class="case-study-section pt-100 pb-100">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-6 pb-30">
                    <div class="project-flat-card">
                        <div class="project-flat-thumb">
                            <router-link to="/single-case">
                                <img src="../../assets/images/cases/case-lg-1.jpg" alt="project">
                            </router-link>
                        </div>
                        <div class="project-flat-text">
                            <h3><router-link to="/single-case">Drone And Robot Training</router-link></h3>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 pb-30">
                    <div class="project-flat-card">
                        <div class="project-flat-thumb">
                            <router-link to="/single-case">
                                <img src="../../assets/images/cases/case-lg-2.jpg" alt="project">
                            </router-link>
                        </div>
                        <div class="project-flat-text">
                            <h3><router-link to="/single-case">ML Tech Robot Training</router-link></h3>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 pb-30">
                    <div class="project-flat-card">
                        <div class="project-flat-thumb">
                            <router-link to="/single-case">
                                <img src="../../assets/images/cases/case-lg-7.jpg" alt="project">
                            </router-link>
                        </div>
                        <div class="project-flat-text">
                            <h3><router-link to="/single-case">Devic Tech For Agriculture</router-link></h3>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 pb-30">
                    <div class="project-flat-card">
                        <div class="project-flat-thumb">
                            <router-link to="/single-case">
                                <img src="../../assets/images/cases/case-lg-4.jpg" alt="project">
                            </router-link>
                        </div>
                        <div class="project-flat-text">
                            <h3><router-link to="/single-case">Big Data Store</router-link></h3>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 pb-30">
                    <div class="project-flat-card">
                        <div class="project-flat-thumb">
                            <router-link to="/single-case">
                                <img src="../../assets/images/cases/case-lg-5.jpg" alt="project">
                            </router-link>
                        </div>
                        <div class="project-flat-text">
                            <h3><router-link to="/single-case">CX VirtualBox</router-link></h3>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 pb-30">
                    <div class="project-flat-card">
                        <div class="project-flat-thumb">
                            <router-link to="/single-case">
                                <img src="../../assets/images/cases/case-lg-6.jpg" alt="project">
                            </router-link>
                        </div>
                        <div class="project-flat-text">
                            <h3><router-link to="/single-case">Data Mining Software</router-link></h3>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="page-pagination" aria-label="Page Pagination">
                <ul class="pagination">
                    <li class="page-item disabled">
                        <a class="page-link" href="cases-two-columns" tabindex="-1" aria-disabled="true">
                            <i class="flaticon-left-chevron"></i>
                        </a>
                    </li>
                    <li class="page-item active">
                        <a class="page-link" href="/cases-two-columns">1</a>
                    </li>
                    <li class="page-item" aria-current="page">
                        <a class="page-link" href="/cases-two-columns">2</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="/cases-two-columns">3</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="/cases-two-columns">...</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="/cases-two-columns">10</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="/cases-two-columns">
                            <i class="flaticon-right-chevron"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CasesStudy'
}
</script>