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
    width: 100%;
    max-width: 1366px;
    min-height: 100dvh;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>