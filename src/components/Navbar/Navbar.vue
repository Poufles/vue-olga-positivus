<template>
    <nav id="navbar">
        <div id="left">
            <RouterLink :to="{ name: 'home' }" class="logo">
                <Logo :dark="true" />
            </RouterLink>
        </div>
        <div id="right">
            <ul id="links" v-if="!isMobile">
                <li class="link">
                    <RouterLink :to="{ name: 'about' }"><NavLinkButton :text="'About'" /></RouterLink>
                </li>
                <li class="link">
                    <RouterLink :to="{ name: 'services' }"><NavLinkButton :text="'Services'" /></RouterLink>
                </li>
                <li class="link">
                    <RouterLink :to="{ name: 'usecases' }"><NavLinkButton :text="'Use Cases'" /></RouterLink>
                </li>
                <li class="link">
                    <RouterLink :to="{ name: 'pricing' }"><NavLinkButton :text="'Pricing'" /></RouterLink>
                </li>
                <li class="link">
                    <RouterLink :to="{ name: 'blogs' }"><NavLinkButton :text="'Blog'" /></RouterLink>
                </li>
                <li class="link">
                    <a href="https://github.com/Poufles/vue-olga-positivus" target="_blank"><BasicButton :text="'Request a quote'" :type="1" /></a>
                </li>
            </ul>
            <div class="component" v-else>
                I am a component
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
import Logo from '../Logo/Logo.vue';
import NavLinkButton from '../Buttons/NavLinkButton/NavLinkButton.vue';

const isMobile = ref(false);

CheckWidth();

window.addEventListener('resize', () => {
    CheckWidth();
});

function CheckWidth() {
    const width = window.innerWidth;

    if (width < 1050) isMobile.value = true;
    else isMobile.value = false;
}

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
</style>