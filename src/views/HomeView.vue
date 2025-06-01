<template>
    <MainLayout>
        <HeroHome />
        <LogoCarousel />
        <ServiceSection />
        <ActionContact />
        <CaseStudies />
        <WorkingProcess />
        <Team />
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import HeroHome from '@/components/Heroes/HeroHome.vue';
import LogoCarousel from '@/components/Carousel/LogoCarousel/LogoCarousel.vue';
import ServiceSection from '@/components/Sections/ServiceSection/ServiceSection.vue';
import ActionContact from '@/components/Sections/ActionContact/ActionContact.vue';
import CaseStudies from '@/components/Sections/CaseStudies/CaseStudies.vue';
import WorkingProcess from '@/components/Sections/WorkingProcess/WorkingProcess.vue';
import Team from '@/components/Sections/Team/Team.vue';
</script>

<style scoped>
section {
    margin-top: 70px;
    padding-bottom: 70px;
}
</style>