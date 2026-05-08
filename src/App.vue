<template>
  <EnvelopeIntro />
  <main class="wedding-page">
    <HeaderSection />
    <HeroSection />
    <CountdownSection />
    <DetailsSection />
    <ProgramSection />
    <RsvpSection />
  </main>
</template>

<script setup>
import EnvelopeIntro from './components/EnvelopeIntro.vue'
import HeaderSection from './components/HeaderSection.vue'
import HeroSection from './components/HeroSection.vue'
import CountdownSection from './components/CountdownSection.vue'
import DetailsSection from './components/DetailsSection.vue'
import ProgramSection from './components/ProgramSection.vue'
import RsvpSection from './components/RsvpSection.vue'
</script>

<style scoped>
.wedding-page {
  min-height: 100vh;
  background: #111;
  color: #d8b67a;
  overflow-x: hidden;
  font-family: "Comfortaa", sans-serif;
}
</style>