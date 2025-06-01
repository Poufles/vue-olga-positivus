<template>
    <button class="component hamburger-btn">
        <span class="hr"></span>
        <span class="hr"></span>
        <span class="hr"></span>
    </button>
</template>

<script setup>
</script>

<style scoped>
.hamburger-btn {
    aspect-ratio: 1;
    background-color: transparent;
    border: 0;
    height: 50px;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    justify-content: center;
}

.hamburger-btn .hr {
    background-color: #191A23;
    width: 30px;
    height: 5px;
    transition: 0.2s;
}

/* LISTENERS */
.hamburger-btn:hover .hr {
    background-color: var(--primary-color);
}
</style>