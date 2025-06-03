<template>
    <div class="component comment-carousel" ref="component">
        <div id="comments" :style="[`left: ${centerValue}px`]">
            <CommentCard class="comment" ref="commentCardObj" v-for="comment in comments" :author="comment.author"
                :job="comment.job" :comment="comment.comment" :key="`comment-${comment.id}`" />
            <CommentCard class="comment" :author="comments[0].author" :job="comments[0].job"
                :comment="comments[0].comment" :key="`comment-${comments[0].id}`" />
        </div>
        <div id="actions">
            <button type="button" class="arrow" id="left-arrow" @click="GoLeft()">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z"
                        fill="#FFF" />
                </svg>
            </button>
            <div id="stars" ref="stars">
                <button class="star" :class="{ clicked: selectedId === comment.id }" v-for="comment in comments"
                    :key="`star-${comment.id}`" @click="ChangeStarState(comment.id)">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
                            fill="" />
                    </svg>
                </button>
            </div>
            <button type="button" class="arrow" id="right-arrow" @click="GoRight()">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z"
                        fill="#FFF" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup>
import CommentCard from '@/components/Cards/CommentCard.vue';
import { ref, computed, onMounted } from 'vue';

const component = ref(null);
const commentCardObj = ref(null);
const commentCard = ref(null);
const centerValue = ref(20);
const comments = ref([
    {
        id: 1,
        author: 'John Smith',
        job: 'Marketing Director at XYZ Corp',
        comment: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.'
    },
    {
        id: 2,
        author: 'John Smith',
        job: 'Marketing Director at XYZ Corp',
        comment: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.'
    },
    {
        id: 3,
        author: 'John Smith',
        job: 'Marketing Director at XYZ Corp',
        comment: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.'
    },
    {
        id: 4,
        author: 'John Smith',
        job: 'Marketing Director at XYZ Corp',
        comment: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.'
    },
    {
        id: 5,
        author: 'John Smith',
        job: 'Marketing Director at XYZ Corp',
        comment: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.'
    }
]);

const selectedId = ref(comments.value[0].id);

const currentIndex = computed(() =>
    comments.value.findIndex(c => c.id === selectedId.value)
);

onMounted(() => {
    commentCard.value = commentCardObj.value[0].getComponent();

    commentCardObj.value.forEach(card => {
        card.defineParent(component.value);
    });

    setTimeout(() => {
        ChangeCarouselItem();
    }, 100);
});

window.addEventListener('resize', (e) => {
    ChangeCarouselItem();
});

function ChangeCarouselItem() {
    const parentRect = component.value.getBoundingClientRect();
    const cardRect = commentCard.value.getBoundingClientRect();

    centerValue.value = (parentRect.width / 2) - (((cardRect.width / 2) * ((2 * (selectedId.value)) - 1)) + (50 * selectedId.value));
};

function ChangeStarState(id) {
    selectedId.value = id;
    ChangeCarouselItem();
};

function GoLeft() {
    if (currentIndex.value > 0) {
        selectedId.value = comments.value[currentIndex.value - 1].id;
        ChangeCarouselItem();
    };
};

function GoRight() {
    if (currentIndex.value < comments.value.length - 1) {
        selectedId.value = comments.value[currentIndex.value + 1].id;
        ChangeCarouselItem();
    };
};
</script>

<style scoped>
.comment-carousel {
    --padding-v: 90px;
    --padding-h: 20px;

    background-color: var(--secondary-color);
    border-radius: 45px;
    height: calc(625px - (var(--padding-v) + 50px));
    padding: var(--padding-v) var(--padding-h) 50px;
    position: relative;
    overflow: hidden;
}

#comments {
    --left: 0;

    width: max-content;
    display: flex;
    position: absolute;
    left: var(--left);
    transition: 0.2s;
}

#comments .comment {
    margin-left: 50px;
}

#comments .comment:last-of-type {
    visibility: hidden;
}

#actions {
    width: max-content;
    display: flex;
    align-items: center;
    position: absolute;
    left: 50%;
    bottom: 50px;
    transform: translateX(-50%);
}

#stars {
    margin: 0 150px;
}

.star svg {
    fill: var(--white);
    transition: 0.2s;
}

.star.clicked svg {
    fill: var(--primary-color);
}

#left-arrow svg {
    transform: rotate(-150deg);
}

#right-arrow svg {
    transform: rotate(30deg);
}

#stars {
    display: flex;
    gap: 5px;
    align-items: center;
}

#actions button {
    background-color: transparent;
    border: 0;
    outline: none;
}

/* RESPONSIVE */
@media screen and (max-width: 799px) {
    #stars {
        margin: 0 50px;
    }
}

/* RESPONSIVE */
@media screen and (max-width: 520px) {
    .comment-carousel {
        --padding-v: 40px;
    }
}

@media screen and (max-width: 420px) {
    .comment-carousel {
        height: calc(700px - (var(--padding-v) + 50px));
    }

    .arrow {
        display: none;
    }
}
</style>