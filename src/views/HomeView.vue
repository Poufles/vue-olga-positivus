<template>
    <MainLayout>
        <HeroHome />
        <LogoCarousel />
        <section id="service-info">
            <SectionTitle :title="'Services'"
                :desc="'At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:'" id="service-title" />
            <div class="info">
                <InfoCard :title="'Search Engine Optimization'" :src="imgService1" />
                <InfoCard :title="'Search Engine Optimization'" :src="imgService2" :type="2" />
                <InfoCard :title="'Search Engine Optimization'" :src="imgService3" :type="3" />
                <InfoCard :title="'Search Engine Optimization'" :src="imgService4" />
                <InfoCard :title="'Search Engine Optimization'" :src="imgService5" :type="2" />
                <InfoCard :title="'Search Engine Optimization'" :src="imgService6" :type="3" />
            </div>
        </section>
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import HeroHome from '@/components/Heroes/HeroHome.vue';
import LogoCarousel from '@/components/Carousel/LogoCarousel/LogoCarousel.vue';

import imgService1 from '../../public/img/img-2.png';
import imgService2 from '../../public/img/img-3.png';
import imgService3 from '../../public/img/img-4.png';
import imgService4 from '../../public/img/img-1.png';
import imgService5 from '../../public/img/img-5.png';
import imgService6 from '../../public/img/img-6.png';
</script>

<style scoped>
section {
    margin-top: 70px;
}

section #service-title {
    margin-bottom: 70px;
}

section .info {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: space-between;
}
</style>