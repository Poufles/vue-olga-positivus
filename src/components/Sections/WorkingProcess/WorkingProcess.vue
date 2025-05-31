<template>
    <section id="working-process">
        <SectionTitle :title="'Our Working Process'"
            :desc="'Step-by-Step Guide to Achieving Your Business Goals'"
            class="title" />
        <div class="processes">
            <QnACard v-for="(process, index) in processes" :num="index+1" :title="process.title" :msg="process.msg" />
        </div>
    </section>
</template>

<script setup>
import QnACard from '@/components/Cards/QnACard.vue';

const processes = [
    {
        title: 'Consultation',
        msg: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
    },
    {
        title: 'Research and Strategy Deployment',
        msg: 'In this phase, we conduct in-depth market research to understand your industry, competitors, and target audience. Using this data, we develop a customized strategy that aligns with your goals and ensures a solid foundation for success.'
    },
    {
        title: 'Implementation',
        msg: 'Once the strategy is finalized, our team moves forward with executing the plan. From setting up the necessary tools to launching campaigns, we ensure everything is seamlessly integrated to deliver consistent and impactful results.'
    },
    {
        title: 'Monitoring Optimization',
        msg: 'After implementation, we continuously track performance metrics and user engagement. Our team analyzes the data to identify areas of improvement and makes real-time adjustments to optimize effectiveness and maximize ROI.'
    },
    {
        title: 'Reporting and Communication',
        msg: 'We believe in full transparency and regular communication. You’ll receive comprehensive reports outlining key metrics, progress, and insights. Our team will walk you through the results and provide clear explanations to keep you fully informed.'
    },
    {
        title: 'Continual Improvement',
        msg: 'The journey doesn’t stop after launch. We’re committed to ongoing growth and refinement. By regularly reviewing performance and incorporating feedback, we ensure your strategy evolves to meet changing market demands and long-term goals.'
    },
];


</script>

<style scoped>
.processes {
    display: flex;
    flex-direction: column;
    gap: 35px;
}
</style>