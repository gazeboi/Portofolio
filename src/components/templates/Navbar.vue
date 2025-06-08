<script setup>
import { defineProps } from 'vue';
import ButtonStyle from '../mini/ButtonStyle.vue';

const props = defineProps({
    page: {
        type: String,
        required: true
    },
})
</script>

<template>
<div class="bg-clr1">
    <div class="container">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand d-flex align-items-center gap-2" href="/">
                    <div class="text-light">
                        <p class="m-0 fw-900">Geza.</p>
                    </div>
                </a>
                <div class="collapse navbar-collapse justify-content-lg-center mb-4 mb-lg-0" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
                        <li class="nav-item mx-0 mx-lg-2 mt-3 mt-lg-0 px-1 d-flex justify-content-lg-center" :class="page === 'beranda' ? 'active' : 'nonactive'">
                            <a class="nav-link text-light" href="/">Beranda</a>
                        </li>
                        <li class="nav-item mx-0 mx-lg-2 mt-3 mt-lg-0 px-1 d-flex justify-content-lg-center" :class="page === 'biodata' ? 'active' : 'nonactive'">
                            <a class="nav-link text-light" href="/biodata">Biodata</a>
                        </li>
                    </ul>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars text-light"></i>
                </button>
            </div>
        </nav>
    </div>
</div>
</template>

<style scoped>
.active {
    border-bottom: 1px solid #ffffff;
}
.nonactive {
    color: #ffffff;
}

@media screen and (max-width: 992px) {
    .active {
        border-bottom: none;
    }
}
</style>