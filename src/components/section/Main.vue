<script setup>
import ButtonStyle from '../mini/ButtonStyle.vue'

</script>

<template>
<div class="w-100 bg-clr1">
    <div class="container">
        <div class="row" id="top-component">
            <div class="col-md-6" id="top-right-component">
                <div class="d-flex justify-content-center align-items-end">
                    <img src="/public/me/profile.jpeg" class="w-75 rounded-circle">
                </div>
            </div>
            <div class="col-md-6 d-flex justify-content-center justify-content-md-start align-items-center" id="top-left-component">
                <div class="mt-5 mt-md-0 text-light">
                    <h3 class="fw-800 text-clr3 text-shadow text-center text-md-start">Raikhan Geza Alburama</h3>
                    <h5 class="text-center text-md-start lh-1">Undergraduate Informatics Engineering<br>at Brawijaya University</h5>
                    <p class="mt-3 text-center text-md-start">Saya memiliki pengalaman dalam pengembangan perangkat lunak, khususnya dalam pembuatan prototype website penjualan gerabah dan aplikasi kesehatan mental. Menguasai berbagai teknologi, termasuk Java, Kotlin, HTML, CSS, serta memiliki pemahaman dalam pengembangan aplikasi web dan mobile.</p>
                    <div class="mt-4 d-flex justify-content-center justify-content-md-start">
                        <ButtonStyle url="/biodata" isi="Biodata <i class='fas fa-arrow-right ms-1'></i>" fsz="12" px="3" py="2" bgclr="var(--clr3)" clr="var(--clr1)" class="me-2" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
#top-component {
    min-height: 300px;
    padding: 100px 0;
}
#top-me {
    border-radius: 90px 0 90px 0;
}
</style>