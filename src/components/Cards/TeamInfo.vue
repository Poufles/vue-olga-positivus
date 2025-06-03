<template>
    <InfoCardTemplate :type="4" class="--_component-template">
        <div class="component team-info-card">
            <a id="logo-icon" href="#">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.317757 17H3.81308V5.68438H0.317757V17Z" fill="#B9FF66" />
                    <path
                        d="M0 2.07188C0 3.1875 0.900311 4.09062 2.06542 4.09062C3.17757 4.09062 4.07788 3.1875 4.07788 2.07188C4.07788 0.95625 3.17757 0 2.06542 0C0.900311 0 0 0.95625 0 2.07188Z"
                        fill="#B9FF66" />
                    <path
                        d="M13.4517 17H17V10.7844C17 7.75625 16.3115 5.36562 12.7632 5.36562C11.0685 5.36562 9.90343 6.32188 9.42679 7.225H9.37383V5.68438H6.03738V17H9.53271V11.4219C9.53271 9.93437 9.79751 8.5 11.6511 8.5C13.4517 8.5 13.4517 10.2 13.4517 11.475V17Z"
                        fill="#B9FF66" />
                </svg>
            </a>
            <div id="top">
                <picture id="profile">
                    <img :src="img" :alt="`Profile Picture of ${name}`">
                </picture>
                <div id="profile-info">
                    <h4 id="name">{{ name }}</h4>
                    <p id="title">{{ title }}</p>
                </div>
            </div>
            <div id="bottom">
                <p id="desc">{{ desc }}</p>
            </div>
        </div>
    </InfoCardTemplate>
</template>

<script setup>
import InfoCardTemplate from './InfoCardTemplate.vue';

const props = defineProps({
    img: { type: String, required: true },
    name: { type: String, required: true },
    title: { type: String, required: true },
    desc: { type: String, required: true }
});
</script>

<style scoped>
.--_component-template {
    flex-basis: calc(33% - 40px);
    flex-shrink: 1;
    flex-grow: 1;

    min-width: 320px;
    height: 380px;
}

.team-info-card {
    position: relative;
    width: 100%;
    padding: 40px 35px;
}

#top {
    display: flex;
    gap: 20px;
    align-items: end;
    margin-bottom: 28px;
}

#profile-info {
    margin-bottom: 1px;
}

#bottom {
    border-top: 2px solid var(--secondary-color);
    padding-top: 28px;
}

#logo-icon {
    aspect-ratio: 1;
    background-color: var(--secondary-color);
    border-radius: 50%;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 35px;
}

/* RESPONSIVE */
@media screen and (max-width: 420px) {
    .--_component-template {
        flex-basis: 100%;
        min-width: auto;
        height: auto;
    }

    .team-info-card {
        padding: 35px 30px;
    }

    #top {
        gap: 10px;
        align-items: end;
    }
}
</style>