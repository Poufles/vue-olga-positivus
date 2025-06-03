<template>
    <article class="component use-case">
        <div class="wrapper">
            <slot></slot>
        </div>
    </article>
</template>

<script setup>
</script>

<style scoped>
.component {
    min-height: 350px;
    display: flex;
}

.wrapper {
    background-color: var(--secondary-color);
    width: 100%;
    border-radius: 45px;
    padding: 60px;
    display: flex;
    gap: 50px;
}

/* RESPONSIVE */
@media screen and (max-width: 920px) {
    .wrapper {
        flex-direction: column;
    }
}


@media screen and (max-width: 420px) {
    .wrapper {
    padding: 50px 30px;
}
}
</style>