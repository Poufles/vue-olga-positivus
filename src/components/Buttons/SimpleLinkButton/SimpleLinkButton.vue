<template>
    <button type="button" class="component simple-link-btn" @mouseenter="Animate()" @mouseleave="Animate()" >
        <span id="text"><span id="learn" :class="{ hover: isHover }" >Learn</span> More</span>
        <span id="icon">
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z"
                    fill="#B9FF66" />
            </svg>
        </span>
    </button>
</template>

<script setup>
import { ref } from 'vue';

const isHover = ref(false);

function Animate() {
    isHover.value = !isHover.value;
}
</script>

<style scoped>
.simple-link-btn {
    background-color: transparent;
    border: 0;
    padding: 0;
    width: max-content;
    display: flex;
    gap: 10px;
    align-items: baseline;
    position: relative;
}

.simple-link-btn::before {
    content: '';
    background-color: var(--white);
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    height: calc(100% + 5px);
    width: 0%;
    position: absolute;
    top: -2.5px;
    left: -5px;
    transition: 0.2s;
}

#text {
    color: var(--primary-color);
    font-size: 20px;
    position: relative;
    z-index: 2;
}

#icon {
    flex-shrink: 0;
}

#learn {
    transition-duration: 0.1s;
}

#learn.hover {
    transition-delay: 0.5s;
}

svg {
    height: 15px;
    width: auto;
}

/* LISTENERS */
.simple-link-btn:hover::before {
    width: 47%;
}

.simple-link-btn:hover #learn {
    color: var(--secondary-color);
}
</style>