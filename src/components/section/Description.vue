<script setup>
import { defineProps } from 'vue';
</script>

<template>
<div class="bg-clr1">
    <div class="container">
        <div class="d-flex justify-content-center align-items-center" id="card-description">
            <div class="bg-clr3 rounded-m overflow-hidden w-100 shadow-xl">
                <div class="row">
                    <div class="col-md-4 d-flex flex-column justify-content-center align-items-center">
                        <div class="w-75 overflow-hidden d-flex justify-content-center align-items-end shadow my-5" style="width:100px;aspect-ratio:4/5;">
                            <img src="/public/me/profile.jpeg" class="img-cover">
                        </div>
                    </div>
                    <div class="col-12 col-md-8 ps-4 ps-md-4 pe-md-5 py-4 d-flex flex-column justify-content-center text-dark position-relative">
                        <h1 class="fw-800 text-clr4">Raikhan Geza Alburama</h1>
                        <p class="text-secondary">Undergraduate Informatics Engineering at Brawijaya University</p>
                        <p>Saya memiliki pengalaman dalam pengembangan perangkat lunak, khususnya dalam pembuatan prototype website penjualan gerabah dan aplikasi kesehatan mental. Menguasai berbagai teknologi, termasuk Java, Kotlin, HTML, CSS, serta memiliki pemahaman dalam pengembangan aplikasi web dan mobile.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
#card-description {
    padding: 60px 0;
}
#id-star {
    border: solid 1px black;
    background-color: black;
    color: #ffffff;
    aspect-ratio: 1/1;
    width: 40px;
}
#id-header {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>