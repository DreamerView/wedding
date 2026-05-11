<template>
  <section ref="heroRef" class="hero">
    <div
      class="bg-image"
      :class="{ loaded: imageLoaded }"
      :style="{
        backgroundImage: imageLoaded ? `url(${currentImage})` : 'none'
      }"
    ></div>

    <div class="overlay"></div>

    <div class="hero-content">
      <p
        class="small-text"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        {{ t.smallText }}
      </p>

      <p
        class="invite-text"
        data-aos="fade-up"
        data-aos-delay="350"
        v-html="t.inviteText"
      ></p>

      <div
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <h1 class="hero-title">
          {{ t.groom }}
          <span>&</span>
          {{ t.bride }}
        </h1>
      </div>

      <p
        class="date"
        data-aos="fade-up"
        data-aos-delay="850"
      >
        {{ t.date }}
      </p>

      <div
        class="arrow"
        data-aos="fade-up"
        data-aos-delay="1050"
      >
        ⌄
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import AOS from 'aos'

import heroText from '@/data/hero.json'

const props = defineProps({
  lang: {
    type: String,
    default: 'ru'
  }
})

const t = computed(() => {
  return heroText[props.lang] || heroText.ru
})

const heroRef = ref(null)
const imageLoaded = ref(false)
const currentImage = ref('')

let observer = null

const getImageByScreen = () => {
  return window.innerWidth <= 768
    ? '/poster-hero-light-mobile.png'
    : '/poster-hero-light.png'
}

const preloadImage = (src) => {
  const img = new Image()

  img.onload = async () => {
    currentImage.value = src
    imageLoaded.value = true

    await nextTick()
    AOS.refresh()
  }

  img.src = src
}

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        preloadImage(getImageByScreen())

        if (observer && heroRef.value) {
          observer.unobserve(heroRef.value)
        }
      }
    },
    {
      root: null,
      threshold: 0.1,
      rootMargin: '200px'
    }
  )

  if (heroRef.value) {
    observer.observe(heroRef.value)
  }

  AOS.refresh()
})

onBeforeUnmount(() => {
  if (observer && heroRef.value) {
    observer.unobserve(heroRef.value)
  }
})
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 720px;
  display: flex;
  flex-direction: column;
  background: #f4f0ec;
  isolation: isolate;
  overflow: hidden;
}

.bg-image {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center top;
  opacity: 0;
  z-index: -3;
  transform: scale(1.04);
  transition:
    opacity 1.4s ease,
    transform 3.2s ease;
}

.bg-image.loaded {
  opacity: 1;
  transform: scale(1);
}

.overlay {
  position: absolute;
  inset: 0;
  z-index: -2;
  background:
    radial-gradient(
      circle at center,
      rgba(244, 240, 236, 0.08) 0%,
      rgba(244, 240, 236, 0.2) 48%,
      rgba(244, 240, 236, 0.38) 100%
    );
}

.hero-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateY(44px);
  text-align: center;
  padding: 150px 24px 80px;
}

.small-text {
  margin: 0 0 18px;
  font-size: 12px;
  letter-spacing: 2px;
  color: #a27a45;
  font-weight: 600;
}

.invite-text {
  margin: 0 0 48px;
  color: hsl(0, 0%, 40%);
  font-size: 10px;
  line-height: 1.7;
  letter-spacing: 1.3px;
}

h1 {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: clamp(44px, 7vw, 76px);
  line-height: 1.08;
  letter-spacing: 4px;
  font-family: "Cormorant Garamond", serif;
}

.hero-title {
  color: transparent;
  background-image: linear-gradient(
    90deg,
    #8f6634 0%,
    #a27a45 18%,
    #d8b67a 38%,
    #f2dca6 50%,
    #c89b58 62%,
    #a27a45 82%,
    #8f6634 100%
  );
  background-size: 240% auto;
  background-position: 0% center;
  background-clip: text;
  -webkit-background-clip: text;
  text-shadow:
    0 8px 28px rgba(162, 122, 69, 0.12),
    0 0 18px rgba(216, 182, 122, 0.08);
  animation: goldShimmer 8s ease-in-out infinite;
  will-change: background-position;
}

.hero-title span {
  font-size: 42px;
  line-height: 1;
  font-style: italic;
  margin: 4px 0;
}

.date {
  margin: 58px 0 0;
  font-size: 18px;
  letter-spacing: 3px;
  color: #a27a45;
}

.arrow {
  margin-top: 16px;
  font-size: 24px;
  color: #a27a45;
  opacity: 0.75;
  animation: arrowFloat 1.8s ease-in-out infinite;
}

@keyframes goldShimmer {
  0% {
    background-position: 0% center;
  }

  50% {
    background-position: 100% center;
  }

  100% {
    background-position: 0% center;
  }
}

@keyframes arrowFloat {
  0% {
    transform: translateY(0);
    opacity: 0.45;
  }

  50% {
    transform: translateY(7px);
    opacity: 0.9;
  }

  100% {
    transform: translateY(0);
    opacity: 0.45;
  }
}

:deep([data-aos]) {
  transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
}

@media (max-width: 768px) {
  .hero {
    min-height: 650px;
  }

  .bg-image {
    background-position: center top;
  }

  .hero-content {
    padding: 120px 20px 70px;
    transform: translateY(10px);
  }

  .invite-text {
    margin-bottom: 38px;
    font-size: 12px;
  }

  h1 {
    font-size: 44px;
    letter-spacing: 3px;
  }

  .hero-title span {
    font-size: 36px;
  }

  .date {
    margin-top: 44px;
    font-size: 15px;
  }
}
</style>