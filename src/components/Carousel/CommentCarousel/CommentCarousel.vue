<template>
    <div class="component comment-carousel">
        <div id="comments">
            <CommentCard v-for="comment in comments" :author="comment.author" :job="comment.job" :comment="comment.comment" />
        </div>
    </div>
</template>

<script setup>
import CommentCard from '@/components/Cards/CommentCard.vue';

const comments = [
    {
        author: 'John Smith',
        job: 'Marketing Director at XYZ Corp',
        comment: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.'
    }
]
</script>

<style scoped>
.comment-carousel {
    --padding-v: 90px;
    --padding-h: 20px;

    background-color: var(--secondary-color);
    border-radius: 45px;
    height: calc(625px - (var(--padding-v) * 2));
    padding: var(--padding-v) var(--padding-h);
    overflow: hidden;
}
</style>