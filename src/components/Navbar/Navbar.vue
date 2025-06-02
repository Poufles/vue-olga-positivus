<template>
    <nav id="navbar">
        <div id="left">
            <RouterLink :to="{ name: 'test' }" class="logo">
                <Logo :dark="true" />
            </RouterLink>
        </div>
        <div id="right">
            <ul id="links" v-if="!isMobile">
                <li class="link">
                    <NavLinkButton :text="'About'" />
                </li>
                <li class="link">
                    <NavLinkButton :text="'Services'" />
                </li>
                <li class="link">
                    <NavLinkButton :text="'Use Cases'" />
                </li>
                <li class="link">
                    <NavLinkButton :text="'Pricing'" />
                </li>
                <li class="link">
                    <NavLinkButton :text="'Blog'" />
                </li>
                <li class="link">
                    <a href="https://github.com/Poufles/vue-olga-positivus" target="_blank">
                        <BasicButton :text="'Request a quote'" :type="1" />
                    </a>
                </li>
            </ul>
            <Hamburger v-else @click="ShowSidePanel()" />
        </div>
        <!-- DEAL LATER -->
        <!-- <div class="component side-panel" :class="{ show: sidePanel }" v-if="isMobile">
            <Hamburger @click="ShowSidePanel()" />
        </div> -->
    </nav>
</template>

<script setup>
import { ref } from 'vue';
import Logo from '../Logo/Logo.vue';
import NavLinkButton from '../Buttons/NavLinkButton/NavLinkButton.vue';
import Hamburger from '../Buttons/Hamburger/Hamburger.vue';

const isMobile = ref(false);
const sidePanel = ref(false);

CheckWidth();

window.addEventListener('resize', () => {
    CheckWidth();
});

function CheckWidth() {
    const width = window.innerWidth;

    if (width < 1120) isMobile.value = true;
    else isMobile.value = false;
}

// Deal Later
function ShowSidePanel() {
    if (isMobile.value && !sidePanel.value) {
        sidePanel.value = true;
        document.body.setAttribute('style', 'height: 100dvh; overflow-y: hidden');
        return;
    };

    if (isMobile.value && sidePanel.value) {
        sidePanel.value = false;
        document.body.removeAttribute('style');
    };
};
</script>

<style scoped>
#navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#left {
    display: flex;
    align-items: center;
    gap: 5px;
}

#left .logo {
    text-decoration: none;
    color: var(--secondary-color);
}

#right #links {
    list-style: none;
    display: flex;
    gap: 40px;
    align-items: center;
}

/* Deal Later */
.side-panel {
    --width: 320px;

    /* border: 2px solid red; */
    background-color: var(--white);
    width: var(--width);
    height: 100dvh;
    padding-top: 50px;
    position: absolute;
    top: 0;
    right: calc(var(--width) * -1);
    transition: 0.2s;
    z-index: 50;
}

.side-panel.show {
    right: 0px;
}
</style>