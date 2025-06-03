<template>
    <article class="component comment-card" ref="component">
        <div id="comment-info" :style="style">
            <p id="comment">{{ comment }}</p>
        </div>
        <div id="commenter-info">
            <p id="author">{{ author }}</p>
            <p id="job">{{ job }}</p>
        </div>
    </article>
</template>

<script setup>
import { computed, defineExpose, onMounted, ref, onActivated } from 'vue';

const parent = ref(null);
const component = ref(null);
const width = ref(0);
const props = defineProps({
    author: { type: String, required: true },
    job: { type: String, default: '' },
    comment: { type: String, required: true },
});

const style = computed(() => {
    return width.value !== 0 ? { '--width': `calc(${width.value}px - (var(--padding) * 2) - 4px)` } : {};
});

onMounted(() => {
    setTimeout(() => {
        CheckWidth();
    }, 100);
});

window.addEventListener('resize', (e) => {
    CheckWidth();
});

function CheckWidth() {
    if (parent.value) {
        const parentRect = parent.value.getBoundingClientRect();
        const cardRect = component.value.getBoundingClientRect();

        if (parentRect.width - 40 <= cardRect.width) {
            width.value = parentRect.width - 40;
        } else {
            width.value = 0;
        };
    };
};

function defineParent(parentComponent) {
    parent.value = parentComponent;
};

function getComponent() {
    return component.value;
};

defineExpose({ getComponent, defineParent });
</script>

<style scoped>
.comment-card {
    position: relative;
}

#comment-info {
    --padding: 50px;
    --width: calc(600px - (var(--padding) * 2));
    --border: 2px;

    background-color: var(--secondary-color);
    border: var(--border) solid var(--primary-color);
    border-radius: 45px;
    width: 100%;
    max-width: var(--width);
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

/* RESPONSIVE */
@media screen and (max-width: 420px) {
    #comment-info {
        --padding: 30px;
    }

    #commenter-info {
        margin-top: 40px;
        margin-left: 60px;
        max-width: 150px;
    }
}
</style>