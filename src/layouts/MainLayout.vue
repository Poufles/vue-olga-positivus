<template>
    <div id="main-layout">
        <Navbar />
        <main>
            <slot></slot>
        </main>
        <Footer />
    </div>
</template>

<script setup>
import Navbar from '@/components/Navbar/Navbar.vue';
import Footer from '@/components/Footer/Footer.vue';
</script>

<style scoped>
#main-layout {
    margin-top: 50px;
    width: 100%;
    max-width: 1366px;
    display: flex;
    flex-direction: column;
}
</style>