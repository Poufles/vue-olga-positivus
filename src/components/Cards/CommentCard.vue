<template>
    <article class="component comment-card" ref="component">
        <div id="comment-info">
            <p id="comment">{{ comment }}</p>
        </div>
        <div id="commenter-info">
            <p id="author">{{ author }}</p>
            <p id="job">{{ job }}</p>
        </div>
    </article>
</template>

<script setup>
import { defineExpose, ref } from 'vue';

const component = ref(null);
const props = defineProps({
    author: { type: String, required: true },
    job: { type: String, default: '' },
    comment: { type: String, required: true },
});

function getComponent() {
    return component;
};

defineExpose({ getComponent })
</script>

<style scoped>
.comment-card {
    position: relative;
}

#comment-info {
    --padding: 50px;
    --border: 2px;

    background-color: var(--secondary-color);
    border: var(--border) solid var(--primary-color);
    border-radius: 45px;
    width: 100%;
    max-width: calc(600px - (var(--padding) * 2));
    padding: var(--padding);
    min-height: 150px;
    position: relative;
}

#comment-info::before,
#comment-info::after {
    --size: 20px;

    content: '';
    position: absolute;
}

#comment-info::before {
    border-top: var(--size) solid var(--secondary-color);
    /* border-top: var(--size) solid var(--white); */
    border-right: var(--size) solid transparent;
    border-bottom: var(--size) solid transparent;
    border-left: var(--size) solid transparent;
    bottom: calc((-1 * var(--size) * 2) + var(--border));
    left: 60px;
    z-index: 2;
}

#comment-info::after {
    border-top: calc(var(--size) + var(--border))solid var(--primary-color);
    border-right: calc(var(--size) + var(--border))solid transparent;
    border-bottom: calc(var(--size) + var(--border))solid transparent;
    border-left: calc(var(--size) + var(--border)) solid transparent;
    bottom: calc((-1 * var(--size) * 2) - (var(--border) * 2));
    left: 58px;
}

#comment {
    color: var(--white)
}

#commenter-info {
    margin-top: 40px;
    margin-left: 60px;
}

#author {
    color: var(--primary-color);
}

#job {
    color: var(--white);
    margin-top: -5px;
}
</style>