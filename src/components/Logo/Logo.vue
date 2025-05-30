<template>
    <div class="component logo">
        <picture id="logo-container">
            <svg v-if="dark" id="logo" width="36" height="36" viewBox="0 0 36 36" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1902_83)">
                    <path
                        d="M17.9986 5.53472L35.5997 0.349121L30.464 18.0001L35.5997 35.6012L17.9986 30.4655L0.347656 35.6012L5.53325 18.0001L0.347656 0.349121L17.9986 5.53472Z"
                        fill="black" />
                </g>
                <defs>
                    <clipPath id="clip0_1902_83">
                        <rect width="36" height="36" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <svg v-else class="white" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_403_258)">
                    <path
                        d="M17.9986 5.53472L35.5997 0.349121L30.464 18.0001L35.5997 35.6012L17.9986 30.4655L0.347656 35.6012L5.53325 18.0001L0.347656 0.349121L17.9986 5.53472Z"
                        fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_403_258">
                        <rect width="36" height="36" fill="white" />
                    </clipPath>
                </defs>
            </svg>

        </picture>
        <h2 id="logo-text" v-if="dark">Positivus</h2>
        <h2 id="logo-text" class="white" v-else>Positivus</h2>
    </div>
</template>

<script setup>

import { defineProps } from 'vue';

const props = defineProps({
    dark: { type: Boolean, default: true },
});

</script>

<style scoped>
.logo {
    display: flex;
    align-items: center;
    gap: 5px;
}

#logo-text.white {
    color: var(--white)
}

#logo.white {
    fill: var(--white)
}
</style>