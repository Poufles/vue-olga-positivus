<template>
    <section id="testimonials">
        <SectionTitle :title="'Testimonials'"
            :desc="'Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services'"
            class="title" />
        <div class="testimonies">
            <CommentCarousel />
        </div>
    </section>
</template>

<script setup>
import CommentCarousel from '@/components/Carousel/CommentCarousel/CommentCarousel.vue';


</script>

<style scoped></style>