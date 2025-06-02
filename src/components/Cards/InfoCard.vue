<template>
    <InfoCardTemplate :type="type" class="--_card-template">
        <div class="component info-card">
            <h3 id="info-title">{{ title }}</h3>
            <MoreButton :dark-button="button.darkButton" :dark-text="button.darkText" :dark-text-bg="button.darkTextBg"
                :icon-type-bg="button.iconTypeBg" />
            <img :src="src" :alt="alt">
        </div>
    </InfoCardTemplate>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import MoreButton from '../Buttons/MoreButton/MoreButton.vue';
import InfoCardTemplate from './InfoCardTemplate.vue';
import defaultImg from '/img/img-1.png';

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
.--_card-template {
    flex-basis: calc(50% - 30px);
    flex-shrink: 1;
    flex-grow: 1;

    height: 320px;
}

.info-card {
    --padding: 50px;

    width: 100%;
    min-width: calc(420px - (var(--padding) * 2));
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

/* TYPES */
.--_card-template.type-3 #info-title {
    color: var(--white)
}

/* RESPONSIVE */
@media screen and (max-width: 520px) {
    .info-card {
        min-width: 0;
    }

    .info-card img {
        aspect-ratio: 1;
        height: 150px;
    }
}

@media screen and (max-width: 430px) {
    .--_card-template {
        height: 370px;
    }

    .info-card img {
        top: calc(50% + 20px);
        left: 50%;
        bottom: 0;
        right: 0;
        transform: translate(-50%, -50%);
    }
}
</style>