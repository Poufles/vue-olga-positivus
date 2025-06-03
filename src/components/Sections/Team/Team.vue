<template>
    <section id="team">
        <SectionTitle :title="'The Team'"
            :desc="'Meet the skilled and experienced team behind our successful digital marketing strategies'"
            class="title" />
        <div class="team-info">
            <TeamInfo v-for="profile in teamProfile" :name="profile.name" :title="profile.title" :desc="profile.desc"
                :img="profile.img" />
        </div>
        <div class="action">
            <BasicButton class="btn" :text="'See all team'" :type="2" />
        </div>
    </section>
</template>

<script setup>
import TeamInfo from '@/components/Cards/TeamInfo.vue';

import teamProfile1 from '/img/img-team-mouckup-1.png';
import teamProfile2 from '/img/img-team-mouckup-2.png';
import teamProfile3 from '/img/img-team-mouckup-3.png';
import teamProfile4 from '/img/img-team-mouckup-4.png';
import teamProfile5 from '/img/img-team-mouckup-5.png';
import teamProfile6 from '/img/img-team-mouckup-6.png';

const teamProfile = [
    {
        name: 'John Smith',
        title: 'CEO and Founder',
        desc: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
        img: teamProfile1
    },
    {
        name: 'Jane Doe',
        title: 'Director of Operations',
        desc: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
        img: teamProfile2
    },
    {
        name: 'Michael Brown',
        title: 'SEO Specialist',
        desc: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
        img: teamProfile3,
    },
    {
        name: 'Emily Johnson',
        title: 'PP3Manager',
        desc: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
        img: teamProfile4,
    },
    {
        name: 'Brian Willians',
        title: 'Social Media Specialist',
        desc: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
        img: teamProfile5,
    },
    {
        name: 'Sarah Kim',
        title: 'Content Creator',
        desc: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries',
        img: teamProfile6,
    },
];
</script>

<style scoped>
.action {
    display: flex;
    justify-content: right;
}

.team-info {
    margin-bottom: 70px;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: space-between;
}

/* RESPONSIVE */
@media screen and (max-width: 420px) {
    .action {
        display: block;
    }

    .team-info {
        margin-bottom: 40px;
    }

    .btn {
        width: 100%;
    }
}
</style>