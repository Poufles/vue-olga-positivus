<template>
    <div class="component logo-carousel" :class="{ running: isMobile }" ref="component">
        <div class="layer" id="top-layer" ref="cont_layer">
            <div class="logo-container">
                <picture class="logo" v-for="(logo) in logos" v-html="logo.logo" :id="`logo-${logo.id}`">
                </picture>
            </div>
            <div class="logo-container copy">
                <picture class="logo" v-if="isMobile" v-for="(logo) in logos" v-html="logo.logo" :id="`logo-${logo.id}-alt`">
                </picture>
            </div>
        </div>
        <div class="layer" id="bottom-layer" v-if="isMobile">
            <div class="logo-container alt">
                <picture class="logo" v-for="(logo) in logosReversed" v-html="logo.logo" :id="`logo-${logo.id}-alt`">
                </picture>
            </div>
            <div class="logo-container alt copy">
                <picture class="logo" v-for="(logo) in logosReversed" v-html="logo.logo" :id="`logo-${logo.id}-alt`">
                </picture>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';

const props = defineProps({
    logos: { type: Array, required: true },
});

/**
 * @type {HTMLElement} component
 */
const component = ref(null);
const componentWidth = ref(0);
const cont_layer = ref(null); 
const layerWidth = ref(0);

const logosReversed = computed(() => [...props.logos].reverse());

const isMobile = ref(false);

onMounted(() => {
    layerWidth.value = cont_layer.value.getBoundingClientRect().width;
    CheckSize();
});

window.addEventListener('resize', (e) => {
    CheckSize();
});

function CheckSize() {
    componentWidth.value = component.value.getBoundingClientRect().width;

    if (componentWidth.value < layerWidth.value - 1) isMobile.value = true;
    else isMobile.value = false;
};
</script>

<style scoped>
.logo-carousel {
    margin-bottom: 125px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    overflow: hidden;
}

.logo-carousel.running {
    -webkit-mask-image: linear-gradient(to left, transparent 1%, black 7% 93%, transparent 99%);
    mask-image: linear-gradient(to left, transparent 1%, black 7% 93%, transparent 99%);
}

.layer {
    min-width: max-content;
    white-space: nowrap;
}

.logo-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo-carousel.running .logo-container {
    display: inline-block;
    animation: slide linear infinite 20s;
}

.logo-carousel.running .logo-container.alt {
    display: inline-block;
    animation: slide_alt linear infinite 20s;
}

.logo {
    display: inline-block;
    transition: 0.2s;
}

.logo-carousel.running .logo {
    filter: grayscale(100%);
}

.logo:not(:first-of-type) {
    margin-left: 60px;
}

.logo-carousel.running .logo {
    margin: 0 30px;
}

/* ANIMATE */
@keyframes slide {
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(-100%);
    }
}

@keyframes slide_alt {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0%);
    }
}

/* LISTENER */
.logo-carousel.running .logo:hover {
    filter: grayscale(0%);
}
</style>