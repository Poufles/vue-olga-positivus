<template>
    <MainLayout>
        <HeroHome />
        <LogoCarousel :logos="logos"></LogoCarousel>
        <ServiceSection />
        <ActionContact />
        <CaseStudies />
        <WorkingProcess />
        <Team />
        <Testimonials />
        <ContactAccess />
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
import Testimonials from '@/components/Sections/Testimonials/Testimonials.vue';
import ContactAccess from '@/components/Sections/ContactAccess/ContactAccess.vue';

import amazonLogo from '/logo/logo-amazon.svg?raw';
import dribbleLogo from '/logo/logo-dribble.svg?raw';
import hubspotLogo from '/logo/logo-hubspot.svg?raw';
import notionLogo from '/logo/logo-notion.svg?raw';
import netflixLogo from '/logo/logo-netflix.svg?raw';
import zoomLogo from '/logo/logo-zoom.svg?raw';

const logos = [
    {
        logo: amazonLogo,
        id: 'amazon'
    },
    {
        logo: dribbleLogo,
        id: 'dribble'
    },
    {
        logo: hubspotLogo,
        id: 'hubspot'
    },
    {
        logo: notionLogo,
        id: 'notion'
    },
    {
        logo: netflixLogo,
        id: 'netflix'
    },
    {
        logo: zoomLogo,
        id: 'zoom'
    }
];
</script>

<style scoped>
section {
    margin-top: 70px;
    padding-bottom: 70px;
}

@media screen and (max-width: 620px) {
    section {
        margin-top: 0;
        padding-bottom: 70px;
    }
}
</style>