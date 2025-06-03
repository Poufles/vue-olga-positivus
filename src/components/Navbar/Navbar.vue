<template>
    <nav id="navbar" :class="{ hide: isMobile }">
        <div id="left">
            <RouterLink :to="{ name: 'home' }" class="logo">
                <Logo :dark="true" />
            </RouterLink>
        </div>
        <div id="right">
            <ul id="links">
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
            <Hamburger class="nav-side-action" @click="emit('openNavbarPanel')" />
        </div>
    </nav>
</template>

<script setup>
import Logo from '../Logo/Logo.vue';
import NavLinkButton from '../Buttons/NavLinkButton/NavLinkButton.vue';
import Hamburger from '../Buttons/Hamburger/Hamburger.vue';

const props = defineProps({
    isMobile: { type: Boolean }
});

const emit = defineEmits([ 'openNavbarPanel' ]);
</script>

<style scoped>
#navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
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

#navbar.hide #right #links {
    display: none;
}

#navbar:not(.hide) .nav-side-action {
    display: none;
}
</style>