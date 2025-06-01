<template>
    <button type="button" class="component basic-btn" :style="CheckLongWidth() ?
        { '--width': `${width + 300}px` } : null
        " :class="{ 'type-1': type === 1, 'type-2': type === 2, 'type-3': type === 3, }" ref="component"
        @mouseenter="BackgroundAnimation()" @mouseleave="BackgroundAnimation()">
        <span id="text">{{ text }}</span>
        <span id="bg-color" :class="{ hover: isHover, blur: isBlur }"></span>
    </button>
</template>

<script setup>
import { defineProps, onMounted, ref } from 'vue';

const props = defineProps({
    text: { type: String, default: 'Button Text' },
    type: { type: Number, default: 1 }
});

const component = ref(null);
const width = ref(0);
const isHover = ref(false);
const isBlur = ref(false);

onMounted(() => {
    if (component.value) {
        width.value = component.value.offsetWidth;
    };
});

function CheckLongWidth() {
    if (width.value > 300) return true;
    return false;
};

function BackgroundAnimation() {
    if (!isHover.value) isHover.value = true;
    else {
        isHover.value = false;
        isBlur.value = true;
        setTimeout(() => {
            isBlur.value = false;
        }, 200);
    }
};
</script>

<style scoped>
.basic-btn {
    --width: 300px;

    background-color: var(--white);
    border: 2px solid var(--secondary-color);
    border-radius: 14px;
    color: var(--secondary-color);
    height: 68px;
    padding: 0 34px;
    overflow: hidden;
    position: relative;
}

.basic-btn #text {
    position: relative;
    z-index: 2;
}

.basic-btn #bg-color {
    aspect-ratio: 1;
    background-color: var(--primary-color);
    border-radius: 50%;
    width: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition-property: opacity, width;
    transition-duration: 0.2s, 0.2s;
    transition-delay: 0s, 0.065s;
    opacity: 0;
    z-index: 1;
}

.basic-btn #bg-color.blur {
    transition-property: opacity, width;
    transition-delay: 0.1s, 0s;
}

.basic-btn #bg-color.hover {
    opacity: 1;
}

/* TYPES */
.basic-btn.type-2 {
    background-color: var(--secondary-color);
}

.basic-btn.type-2 #text {
    color: var(--white);
}

.basic-btn.type-3 {
    background-color: var(--primary-color);
    border: 2px solid transparent;
}

.basic-btn.type-3 #text {
    color: var(--secondary-color);
    transition: 0.1s;
    transition-delay: 0.05s;
}

.basic-btn.type-3 #bg-color {
    background-color: var(--secondary-color);
    border: 2px solid var(--secondary-color);
}

/* LISTENERS */
.basic-btn:hover #bg-color {
    width: var(--width);
}

.basic-btn.type-3:hover #text {
    color: var(--white);
}

;
</style>