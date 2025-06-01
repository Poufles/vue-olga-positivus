<template>
    <div class="component info-card-template" :class="{ 'type-2': type === 2, 'type-3': type === 3, 'type-4': type === 4 }">
        <div class="shadow"></div>
        <div class="wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    type: { type: Number, default: 1 },
});

</script>

<style scoped>
.info-card-template {
    min-height: 100px;
    height: 300px;
    width: 500px;
    position: relative;
}

.info-card-template .shadow {
    background-color: var(--secondary-color);
    content: '';
    border-radius: 45px;
    height: 100%;
    width: 100%;
    height: inherit;
    max-width: inherit;
    position: absolute;
    top: 8px;
    left: 0%;
    transform: translateX(-0%);
    transition-property: opacity, width;
    transition-duration: 0.2s, 0.2s;
    z-index: -1;
}

.info-card-template .wrapper {
    background-color: var(--gray);
    border-radius: 45px;
    border: 2px solid var(--secondary-color);
    height: 100%;
    display: flex;
    transition: 0.2s;
}

.info-card-template .container {
    --padding: 50px;

    width: 100%;
    padding: var(--padding);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
}

/* TYPES */
.info-card-template.type-2 .wrapper {
    background-color: var(--primary-color);
}

.info-card-template.type-3 .wrapper {
    background-color: var(--secondary-color);
}

.info-card-template.type-4 .wrapper {
    background-color: var(--white);
}

/* LISTENERS */
.info-card-template:hover .wrapper {
    transform: translateY(-5px) scale(1.01);
}

.info-card-template:hover .shadow {
    opacity: 0.7;
    left: 50%;
    transform: translateX(-50%);
    width: 95%;
}
</style>