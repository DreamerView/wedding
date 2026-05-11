<template>
  <RsvpModal :lang="languageStore.locale" />
  <EnvelopeIntro />
  <LanguageIntro />
  <main class="wedding-page">
    <HeaderSection :lang="languageStore.locale" />
    <HeroSection :lang="languageStore.locale" />
    <CountdownSection :lang="languageStore.locale" />
    <DetailsSection :lang="languageStore.locale" />
    <ProgramSection :lang="languageStore.locale" />
    <RsvpSection :lang="languageStore.locale" />
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
import RsvpModal from './modal/rsvp.vue'
import LanguageIntro from './components/LanguageIntro.vue'
import { useLanguageStore } from '@/stores/languageStore'

const languageStore = useLanguageStore()
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