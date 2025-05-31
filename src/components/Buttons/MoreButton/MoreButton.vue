<template>
    <div class="component more-btn">
        <picture id="icon" v-if="darkButton">
            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
                <path
                    d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                    fill="#B9FF66" />
            </svg>
        </picture>
        <picture id="icon" v-else>
            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20.5" cy="20.5" r="20.5" fill="white" />
                <path
                    d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                    fill="black" />
            </svg>
        </picture>
        <p id="text" :class="{ dark: darkText, 'dark-bg': darkTextBg, 'icon-color-2': iconTypeBg === 2, 'icon-color-3': iconTypeBg === 3 }">Learn More</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    darkButton: { type: Boolean, default: true },
    darkText: { type: Boolean, default: true },
    darkTextBg: { type: Boolean, default: true },
    iconTypeBg: { type: Number, default: 1 }
});
</script>

<style scoped>
.more-btn {
    --circle-size: 35px;

    cursor: pointer;
    width: max-content;
    display: flex;
    position: relative;
    z-index: 2;
}

.more-btn #icon {
    transition: 0.5s;
    position: relative;
    z-index: 2;
}

svg {
    aspect-ratio: 1;
    height: var(--circle-size);
}

@property --bg-color {
    syntax: '<color>';
    inherits: true;
    initial-value: transparent;
}

.more-btn #text {
    border-radius: 5px;
    background-color: var(--bg-color);
    padding: 0 10px 0 20px;
    margin-left: -14px;
    display: flex;
    align-items: center;
    position: relative;
    transition: 0.2s;
}

.more-btn #text::before {
    content: '';
    aspect-ratio: 1;
    background-color: white;
    border-radius: 50%;
    width: var(--circle-size);
    position: absolute;
    left: -23px;
}

/* TYPES */
.more-btn #text:not(.dark) {
    color: var(--white);
}

.more-btn:hover #text:not(.dark-bg) {
    --bg-color: var(--white);
}

.more-btn #text.icon-color-2::before {
    background-color: var(--primary-color);
}

.more-btn #text.icon-color-3::before {
    background-color: var(--secondary-color);
}

/* LISTENERS */
.more-btn:hover #text {
    --bg-color: var(--primary-color);
    margin-left: -8px;
}

.more-btn:hover #icon {
    transform: rotate(390deg);
}
</style>