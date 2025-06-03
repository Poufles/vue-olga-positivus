<template>
    <nav class="component side-panel" :class="{ show: isOpen }" v-if="isMobile">
        <Hamburger @click="emits('closeNavbarPanel')" />
        <ul id="links" v-if="isMobile">
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
    </nav>
</template>

<script setup>
import Hamburger from '../Buttons/Hamburger/Hamburger.vue';
import NavLinkButton from '../Buttons/NavLinkButton/NavLinkButton.vue';

const props = defineProps({
    isMobile: Boolean,
    isOpen: Boolean
});

const emits = defineEmits(['closeNavbarPanel']);
</script>

<style scoped>
.side-panel {
    --width: 320px;

    border-left: 5px solid var(--primary-color);
    background-color: var(--white);
    width: calc(var(--width) - 60px);
    height: calc(100dvh - 50px);
    padding: 50px 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    right: calc((var(--width) * -1) - 5px);
    transition: 0.2s;
    z-index: 50;
}

.side-panel.show {
    right: 0px;
}

#links {
    padding-top: 30px;
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
}

/* RESPONSIVE */
@media screen and (max-width: 620px) {
    .side-panel {
        --width: calc(100% - 5px);
    }
}
</style>