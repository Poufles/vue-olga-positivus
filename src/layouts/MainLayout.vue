<template>
    <div id="main-layout">
        <Navbar :is-mobile="isMobile" @open-navbar-panel="ToggleNavbarPanel" />
        <NavbarPanel :is-mobile="isMobile" :is-open="isOpenNavbarPanel" @close-navbar-panel="ToggleNavbarPanel"
            v-if="isMobile" />
        <main>
            <slot></slot>
        </main>
        <Footer />
    </div>
</template>

<script setup>
import Navbar from '@/components/Navbar/Navbar.vue';
import Footer from '@/components/Footer/Footer.vue';
import NavbarPanel from '@/components/Navbar/NavbarPanel.vue';

import { ref } from 'vue';

const isMobile = ref(false);
const isOpenNavbarPanel = ref(false);

CheckWidth();

window.addEventListener('resize', (e) => {
    CheckWidth();
});

function ToggleNavbarPanel() {
    isOpenNavbarPanel.value = !isOpenNavbarPanel.value;
    CheckNavbarPanelActive();
};

function CheckWidth() {
    const width = window.innerWidth;

    if (width < 1120) isMobile.value = true;
    else isMobile.value = false;
}

function CheckNavbarPanelActive() {
    if (isOpenNavbarPanel.value) {
        document.body.setAttribute('style', 'height: 100dvh; overflow-y: hidden;');
    } else {
        document.body.removeAttribute('style');
    };
};
</script>

<style scoped>
#main-layout {
    width: 100%;
    max-width: 1366px;
    min-height: 100dvh;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>