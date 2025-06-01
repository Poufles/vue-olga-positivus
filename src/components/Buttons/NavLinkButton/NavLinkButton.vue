<template>
    <button type="button" class="component nav-link-btn" :class="{ 'type-2': type === 2 }" @mouseenter="MoveAnimation()" @mouseleave="MoveAnimation()">
        <p id="text" :class="{ isMoving }" :data-text="text">{{ text }}</p>
    </button>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
    text: { type: String, default: 'Button Text' },
    type: { type: Number, default: 1 }
});

const isMoving = ref(false);

function MoveAnimation() {
    isMoving.value = true;
    setTimeout(() => {
        isMoving.value = false;
    }, 70);
};

</script>

<style scoped>
.nav-link-btn {
    background-color: transparent;
    border: 0;
}

.nav-link-btn #text {
    --_transition-main: 0.2s;

    position: relative;
    transition-duration: var(--_transition-main);
    transition-delay: 0.1s;
    opacity: 1;
}

.nav-link-btn #text::before {
    content: '';
    aspect-ratio: 1;
    background-color: var(--primary-color);
    border-radius: 50%;
    width: 15px;
    position: absolute;
    left: 50%;
    bottom: calc(0px - 15px);
    transform: translateX(-50%);
    transition: var(--_transition-main);
    opacity: 0;
}

.nav-link-btn #text.isMoving::before {
    opacity: 1;
}

.nav-link-btn #text::after {
    content: attr(data-text);
    color: var(--primary-color);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    transition: var(--_transition-main);
    transition-delay: 0.1s;
    opacity: 0;
}

/* TYPE */
.nav-link-btn.type-2 #text  {
    color: var(--white);
}

/* LISTENERS */
.nav-link-btn:hover #text {
    color: transparent
}

.nav-link-btn:hover #text::before {
    bottom: 3px;
}

.nav-link-btn:hover #text::after {
    opacity: 1;
}
</style>