<template>
    <div class="component info-card" :class="{ 'type-2': type === 2, 'type-3': type === 3 }">
        <div class="shadow"></div>
        <div class="wrapper">
            <div class="container">
                <h3 id="info-title">{{ title }}</h3>
                <MoreButton :dark-button="button.darkButton" :dark-text="button.darkText" :dark-text-bg="button.darkTextBg" :icon-type-bg="button.iconTypeBg" />
                <img :src="src" :alt="alt">
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import MoreButton from '../Buttons/MoreButton/MoreButton.vue';
import defaultImg from '../../../public/img/img-1.png';

const props = defineProps({
    title: { type: String, default: 'Info Title' },
    type: { type: Number, default: 1 },
    src: { type: String, default: defaultImg },
    alt: { type: String, default: 'Image' },
});

const button = ref(null);

ButtonType();

function ButtonType() {
    if (props.type === 1) {
        button.value = {
            darkButton: true,
            darkText: true
        };
    };
    
    if (props.type === 2) {
        button.value = {
            darkButton: true,
            darkText: true,
            darkTextBg: false,
            iconTypeBg: 2
        };
    };
    
    if (props.type === 3) {
        button.value = {
            darkButton: false,
            darkText: false,
            iconTypeBg: 3
        };
    };
};
</script>

<style scoped>
.info-card {
    flex-basis: calc(50% - 30px);
    flex-shrink: 1;
    flex-grow: 1;

    height: 320px;
    width: 50%;
    min-width: 400px;
    position: relative;
}

.info-card .wrapper {
    background-color: var(--gray);
    border-radius: 45px;
    border: 2px solid var(--secondary-color);
    height: 100%;
    display: flex;
    transition: 0.2s;
}

.info-card .container {
    --padding: 50px;

    width: 100%;
    padding: var(--padding);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
}

.info-card #info-title {
    max-width: 300px;
    position: relative;
    z-index: 2;
}

.info-card img {
    position: absolute;
    bottom: var(--padding);
    right: var(--padding);
}

.info-card .shadow {
    background-color: var(--secondary-color);
    content: '';
    border-radius: 45px;
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

/* TYPES */
.info-card.type-2 .wrapper {
    background-color: var(--primary-color);
}

.info-card.type-3 .wrapper {
    background-color: var(--secondary-color);
}

.info-card.type-3 #info-title {
    color: var(--white)
}

/* LISTENERS */
.info-card:hover .wrapper {
    transform: translateY(-5px) scale(1.01);
}

.info-card:hover .shadow {
    opacity: 0.7;
    left: 50%;
    transform: translateX(-50%);
    width: 95%;
}
</style>