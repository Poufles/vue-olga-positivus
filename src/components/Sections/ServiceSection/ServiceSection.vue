<template>
    <section id="action-contact">
        <SectionTitle :title="'Services'"
            :desc="'At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:'"
            class="title" />
        <div class="info">
            <InfoCard :title="'Search Engine Optimization'" :src="imgService1" />
            <InfoCard :title="'Search Engine Optimization'" :src="imgService2" :type="2" />
            <InfoCard :title="'Search Engine Optimization'" :src="imgService3" :type="3" />
            <InfoCard :title="'Search Engine Optimization'" :src="imgService4" />
            <InfoCard :title="'Search Engine Optimization'" :src="imgService5" :type="2" />
            <InfoCard :title="'Search Engine Optimization'" :src="imgService6" :type="3" />
        </div>
    </section>
</template>

<script setup>
import imgService1 from '/img/img-2.png';
import imgService2 from '/img/img-3.png';
import imgService3 from '/img/img-4.png';
import imgService4 from '/img/img-1.png';
import imgService5 from '/img/img-5.png';
import imgService6 from '/img/img-6.png';
</script>

<style setup>
.title {
    margin-bottom: 70px;
}

.info {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: space-between;
}
</style>