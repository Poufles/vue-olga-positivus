<template>
    <label :for="id" class="component simple-radbtn">
        <input type="radio" :name="name" :id="id" :checked="default">
        <div class="custom">
        </div>
        <p id="text">{{ label }}</p>
    </label>
</template>

<script setup>
const props = defineProps({
    label: { type: String, required: true },
    name: { type: String, required: true },
    id: { type: String, required: true },
    default: { type: Boolean, default: false }
});
</script>

<style scoped>
.simple-radbtn {
    cursor: pointer;
    display: flex;
    gap: 10px;
    align-items: center;
    position: relative;
}

.custom {
    --size: 28px;

    aspect-ratio: 1;
    background-color: var(--white);
    border: 1px solid var(--secondary-color);
    border-radius: 50%;
    height: var(--size);
    position: relative;
}

.custom::after {
    content: '';
    aspect-ratio: 1;
    background-color: var(--primary-color);
    border-radius: 50%;
    height: 0px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.2s;
}

input {
    position: absolute;
    display: none;
}

/* LISTENERS */
.simple-radbtn:hover .custom::after {
    height: calc(var(--size) / 4);
}

.simple-radbtn:has(input:checked) .custom::after {
    height: calc(var(--size) / 2);
}
</style>