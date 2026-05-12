<template>
  <section id="couple-message" class="couple-message">
    <div class="bg-title">
      <span>{{ t.bgTitle }}</span>
    </div>

    <div class="gold-glow glow-one"></div>
    <div class="gold-glow glow-two"></div>

    <div class="couple-container">
      <div class="message-side" data-aos="fade-right">
        <div class="small-line">
          <span></span>
          <p>{{ t.label }}</p>
        </div>

        <h2>
          {{ titleLineOne }}<br />
          {{ titleLineTwo }}
        </h2>

        <div class="message-text">
          <p
            v-for="message in t.messages"
            :key="message"
          >
            {{ message }}
          </p>
        </div>

        <div class="respect">
          <span>{{ t.respect }}</span>
          <i>✦</i>
        </div>
      </div>

      <div class="photo-side" data-aos="fade-left">
        <div class="photo-card groom-card">
          <div class="photo">
            <img
              :src="t.groom.image"
              :alt="t.groom.alt"
            />
          </div>

          <div class="person-info">
            <h3>{{ t.groom.name }}</h3>

            <a
              :href="t.groom.instagramUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="bi bi-instagram"></i>
              {{ t.groom.instagram }}
            </a>
          </div>
        </div>

        <div class="photo-card bride-card">
          <div class="photo">
            <img
              :src="t.bride.image"
              :alt="t.bride.alt"
            />
          </div>

          <div class="person-info">
            <h3>{{ t.bride.name }}</h3>

            <a
              :href="t.bride.instagramUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="bi bi-instagram"></i>
              {{ t.bride.instagram }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import coupleMessageText from '@/data/couple-message.json'

const props = defineProps({
  lang: {
    type: String,
    default: 'kk'
  }
})

const t = computed(() => {
  return coupleMessageText[props.lang] || coupleMessageText.kk
})

const titleLines = computed(() => {
  return t.value.title.split('\n')
})

const titleLineOne = computed(() => {
  return titleLines.value[0] || ''
})

const titleLineTwo = computed(() => {
  return titleLines.value[1] || ''
})
</script>

<style scoped>
.couple-message {
  position: relative;
  min-height: 760px;
  padding: 110px 22px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background:
    radial-gradient(circle at 18% 22%, rgba(216, 182, 122, 0.2), transparent 28%),
    radial-gradient(circle at 84% 76%, rgba(216, 182, 122, 0.14), transparent 30%),
    linear-gradient(135deg, #262a24 0%, #383c34 52%, #1f211d 100%);
  isolation: isolate;
}

.bg-title {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: -3;
  transform: translate(-50%, -50%) rotate(-7deg);
  opacity: 0.055;
  pointer-events: none;
}

.bg-title span {
  color: #fff1d0;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(92px, 18vw, 240px);
  font-weight: 500;
  letter-spacing: 10px;
  white-space: nowrap;
}

.gold-glow {
  position: absolute;
  border-radius: 50%;
  background: rgba(216, 182, 122, 0.18);
  filter: blur(55px);
  z-index: -2;
  animation: glowMove 8s ease-in-out infinite;
  pointer-events: none;
}

.glow-one {
  width: 320px;
  height: 320px;
  left: -120px;
  top: 80px;
}

.glow-two {
  width: 380px;
  height: 380px;
  right: -140px;
  bottom: -130px;
  animation-delay: -4s;
}

.couple-container {
  width: min(1120px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 520px;
  gap: 68px;
  align-items: center;
}

.message-side {
  color: #f4e5c7;
}

.small-line {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.small-line span {
  width: 72px;
  height: 1px;
  background: #d8b67a;
}

.small-line p {
  margin: 0;
  color: #d8b67a;
  font-size: 12px;
  letter-spacing: 5px;
}

h2 {
  margin: 0 0 34px;
  color: #fff4db;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(54px, 8vw, 96px);
  font-weight: 400;
  line-height: 0.9;
  letter-spacing: -1px;
}

.message-text {
  max-width: 570px;
}

.message-text p {
  margin: 0;
  color: rgba(244, 229, 199, 0.9);
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(24px, 3vw, 34px);
  line-height: 1.38;
}

.message-text p + p {
  margin-top: 24px;
}

.respect {
  margin-top: 42px;
  display: inline-flex;
  align-items: center;
  gap: 18px;
  color: #d8b67a;
}

.respect span {
  font-family: "Cormorant Garamond", serif;
  font-size: 34px;
}

.respect i {
  font-style: normal;
  font-size: 24px;
  animation: starPulse 2.4s ease-in-out infinite;
}

.photo-side {
  position: relative;
  min-height: 620px;
}

.photo-card {
  position: absolute;
  width: 300px;
  padding: 12px;
  border-radius: 34px;
  background:
    linear-gradient(180deg, rgba(255, 250, 240, 0.94), rgba(239, 226, 203, 0.88));
  border: 1px solid rgba(216, 182, 122, 0.28);
  box-shadow: 0 34px 90px rgba(0, 0, 0, 0.34);
}

.groom-card {
  left: 0;
  top: 34px;
  transform: rotate(-4deg);
  z-index: 2;
}

.bride-card {
  right: 0;
  bottom: 28px;
  transform: rotate(4deg);
  z-index: 3;
}

.photo {
  width: 100%;
  aspect-ratio: 1 / 1.16;
  border-radius: 26px;
  overflow: hidden;
  background: #efe2cb;
}

.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.45s ease;
}

.photo-card:hover .photo img {
  transform: scale(1.045);
}

.person-info {
  padding: 18px 8px 8px;
  text-align: center;
}

.person-info h3 {
  margin: 0 0 8px;
  color: #242424;
  font-family: "Cormorant Garamond", serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 1;
}

.person-info a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  max-width: 100%;
  color: #b65a50;
  font-size: 15px;
  text-decoration: none;
  transition: 0.25s ease;
}

.person-info a:hover {
  color: #9f7336;
  transform: translateY(-1px);
}

@keyframes glowMove {
  0%,
  100% {
    transform: translateY(0) scale(1);
  }

  50% {
    transform: translateY(24px) scale(1.08);
  }
}

@keyframes starPulse {
  0%,
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 0.7;
  }

  50% {
    transform: scale(1.16) rotate(12deg);
    opacity: 1;
  }
}

@media (max-width: 980px) {
  .couple-message {
    padding: 86px 18px;
  }

  .couple-container {
    grid-template-columns: 1fr;
    gap: 54px;
  }

  .message-side {
    text-align: center;
  }

  .small-line {
    justify-content: center;
  }

  .message-text {
    margin: 0 auto;
  }

  .photo-side {
    min-height: 560px;
    width: min(520px, 100%);
    margin: 0 auto;
  }
}

@media (max-width: 560px) {
  .couple-message {
    padding: 74px 14px;
  }

  .small-line span {
    width: 48px;
  }

  .small-line p {
    font-size: 11px;
    letter-spacing: 4px;
  }

  h2 {
    font-size: 56px;
    margin-bottom: 28px;
  }

  .message-text p {
    font-size: 24px;
    line-height: 1.45;
  }

  .photo-side {
    min-height: auto;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
    align-items: start;
  }

  .photo-card {
    position: relative;
    width: 100%;
    max-width: none;
    margin: 0;
    padding: 8px;
    border-radius: 22px;
  }

  .groom-card,
  .bride-card {
    left: auto;
    right: auto;
    top: auto;
    bottom: auto;
  }

  .groom-card {
    transform: rotate(-2deg);
  }

  .bride-card {
    transform: rotate(2deg);
    margin-top: 28px;
  }

  .photo {
    aspect-ratio: 1 / 1.15;
    border-radius: 18px;
  }

  .person-info {
    padding: 12px 4px 4px;
  }

  .person-info h3 {
    font-size: 26px;
    margin-bottom: 7px;
  }

  .person-info a {
    font-size: 12px;
    gap: 5px;
    word-break: break-word;
  }

  .respect span {
    font-size: 30px;
  }
}

@media (max-width: 420px) {
  .couple-message {
    padding: 64px 12px;
  }

  .bg-title span {
    font-size: 68px;
    letter-spacing: 4px;
  }

  h2 {
    font-size: 50px;
  }

  .message-text p {
    font-size: 22px;
  }

  .photo-side {
    gap: 10px;
  }

  .photo-card {
    padding: 7px;
    border-radius: 20px;
  }

  .photo {
    border-radius: 16px;
  }

  .person-info h3 {
    font-size: 24px;
  }

  .person-info a {
    font-size: 11px;
  }
}
</style>