<template>
    <section id="action-contact">
        <SectionTitle :title="'Case Studies'"
            :desc="'Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies'"
            class="title" />
        <UseCase>
            <UseCaseCard :id="'left'"
                :text="'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.'" />
            <UseCaseCard
                :text="'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.'" />
            <UseCaseCard :id="'right'"
                :text="'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.'" />
        </UseCase>
    </section>
</template>

<script setup>
import UseCase from '@/components/Articles/UseCase/UseCase.vue';
import UseCaseCard from '@/components/Cards/UseCaseCard.vue';
</script>