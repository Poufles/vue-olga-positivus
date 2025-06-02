<template>
    <div class="component simple-action-card">
        <div class="container">
            <div class="action-info">
                <h3 id="text">{{ title }}</h3>
                <p id="desc">
                    {{ desc }}
                </p>
                <BasicButton :text="'Get your free proposal'" :type="2" />
            </div>
            <picture id="icon" v-html="icon">
            </picture>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    icon: { type: String, required: true }
});
</script>

<style scoped>
.simple-action-card {
    height: 350px;
    position: relative;
}

.simple-action-card::before {
    content: '';
    aspect-ratio: 1;
    background-color: var(--primary-color);
    border-radius: 50%;
    height: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.2s;
}

.container {
    background-color: var(--gray);
    height: 100%;
    border-radius: 45px;
    display: flex;
}

.action-info {
    --padding: 60px;

    max-width: 50%;
    width: 100%;
    padding: var(--padding);
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    position: relative;
    z-index: 2;
}

#desc {
    max-width: 450px;
}

#icon {
    position: absolute;
    top: -30px;
    right: 0;
    transition: 0.2s;
    z-index: 1;
}

/* LISTENERS */
.simple-action-card:hover::before {
    height: 200px;
}

#icon:hover {
    transform: translateY(-10px);
}

/* RESPONSIVE */
@media screen and (max-width: 1220px) {
    #icon {
        right: -80px;
    }
}

@media screen and (max-width: 930px) {
    .simple-action-card {
        height: auto;
    }

    #icon {
        margin-left: 120px;
        position: initial;
    }

    .container {
        padding-bottom: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .action-info {
        gap: 30px;
        align-items: center;
        justify-content: initial;
        text-align: center;
    }

    /* LISTENERS */
    #icon:hover {
        transform: translateY(0);
    }
}

@media screen and (max-width: 620px) {
    .action-info {
        --padding: 60px;

        align-items: initial;
        max-width: 90%;
    }

    #icon {
        min-width: max-content;
    }
}

@media screen and (max-width: 480px) {
    .container {
        padding-bottom: 0;
    }

    #icon {
        display: none;
    }
}
</style>