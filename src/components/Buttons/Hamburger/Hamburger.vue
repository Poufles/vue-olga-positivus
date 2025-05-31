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

@property --bg-color {
    syntax: "<color>";
    inherits: false;
    initial-value: #191A23;
}

.hamburger-btn .hr {
    background-color: var(--bg-color);
    width: 30px;
    height: 5px;
    transition: 0.2s;
}

/* LISTENERS */
.hamburger-btn:hover .hr {
    --bg-color: var(--primary-color);
}
</style>