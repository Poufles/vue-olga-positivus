<template>
    <div class="component section-title">
        <h2 id="title">{{ title }}</h2>
        <div class="container">
            <p id="desc">{{ desc }}</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: { type: String, default: 'Section Title' },
    desc: { type: String, default: 'Section Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' }
});
</script>

<style scoped>
.component {
    display: flex;
    gap: 40px;
}

#title {
    background-color: var(--primary-color);
    border-radius: 7px;
    color: var(--secondary-color);
    width: max-content;
    padding: 0 10px;
    place-content: center;
}

#desc {
    max-width: 600px;
}
</style>