<template>
  <Transition name="intro-fade">
    <div
      v-if="visible"
      class="envelope-intro"
      :class="{
        opened: isOpened,
        'show-letter': showLetter,
        'hide-envelope': hideEnvelope
      }"
      @click="openEnvelope"
    >
      <div class="envelope-scene">
        <p class="hint">НАЖМИТЕ, ЧТОБЫ ОТКРЫТЬ</p>

        <div class="envelope">
          <div class="back"></div>

          <div class="flap-top"></div>

          <div class="front-left"></div>
          <div class="front-right"></div>
          <div class="front-bottom"></div>

          <div class="seal">♥</div>
        </div>

        <div class="letter">
          <p>Приглашение</p>
          <h2>Темірхан & Жансая</h2>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onBeforeUnmount } from 'vue'

const visible = ref(true)
const isOpened = ref(false)
const showLetter = ref(false)
const hideEnvelope = ref(false)

const musicSrc = '/wedding.mp3'

let audio = null
let letterTimer = null
let envelopeTimer = null
let hideTimer = null

const playMusic = async () => {
  try {
    if (!audio) {
      audio = new Audio(musicSrc)
      audio.loop = true
      audio.volume = 0.65
      audio.preload = 'auto'
    }

    audio.currentTime = 0
    await audio.play()
  } catch (error) {
    console.log('Audio play blocked:', error)
  }
}

const openEnvelope = async () => {
  if (isOpened.value) return

  isOpened.value = true

  await playMusic()

  letterTimer = setTimeout(() => {
    showLetter.value = true
  }, 1000)

  envelopeTimer = setTimeout(() => {
    hideEnvelope.value = true
  }, 1500)

  hideTimer = setTimeout(() => {
    visible.value = false
  }, 4600)
}

onBeforeUnmount(() => {
  if (letterTimer) clearTimeout(letterTimer)
  if (envelopeTimer) clearTimeout(envelopeTimer)
  if (hideTimer) clearTimeout(hideTimer)

  /*
    Если хочешь, чтобы музыка продолжала играть даже если компонент удалится,
    удали этот блок.
  */
  if (audio) {
    audio.pause()
    audio = null
  }
})
</script>

<style scoped>
.envelope-intro {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100dvh;
  z-index: 99999999;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background:
    radial-gradient(circle at top, rgba(216, 182, 122, 0.22), transparent 34%),
    linear-gradient(135deg, #15120f, #070707);
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.envelope-scene {
  position: relative;
  width: min(86vw, 440px);
  padding-top: 90px;
  margin-top: -70px;
  text-align: center;
  perspective: 1200px;
  overflow: visible;
}

.hint {
  margin: 0 0 34px;
  font-size: 13px;
  letter-spacing: 2.4px;
  color: #c9a568;
  font-family: "Cormorant Garamond", serif;
  animation: hintPulse 1.8s ease-in-out infinite;
}

.envelope {
  position: relative;
  width: 100%;
  aspect-ratio: 1.55 / 1;
  overflow: visible;
  transform-style: preserve-3d;
  animation: envelopeIn 0.9s ease both;
  transition:
    opacity 0.8s ease,
    transform 0.8s ease,
    filter 0.8s ease;
  will-change: transform, opacity;
}

.back {
  position: absolute;
  inset: 0;
  z-index: 1;
  border-radius: 8px;
  background: linear-gradient(145deg, #d9b878, #a97b3f);
  box-shadow:
    0 28px 70px rgba(0, 0, 0, 0.42),
    inset 0 0 0 1px rgba(255, 255, 255, 0.24);
}

/* Бумага сначала спрятана, потом выходит в центр экрана */
.letter {
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 20;
  width: min(82vw, 420px);
  min-height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.98),
    rgba(245, 235, 214, 0.98)
  );
  color: #7a5528;
  opacity: 0;
  transform: translate(-50%, -10%) scale(0.62);
  transition:
    opacity 0.75s ease,
    transform 1.15s cubic-bezier(0.2, 0.9, 0.25, 1),
    filter 0.75s ease;
  box-shadow:
    0 28px 80px rgba(0, 0, 0, 0.38),
    inset 0 0 0 1px rgba(122, 85, 40, 0.12);
  pointer-events: none;
  will-change: opacity, transform, filter;
}

.letter p {
  margin: 0 0 8px;
  font-size: 20px;
  letter-spacing: 1.8px;
  font-family: "Cormorant Garamond", serif;
}

.letter h2 {
  margin: 0;
  font-size: 34px;
  font-weight: 400;
  letter-spacing: 1px;
  font-family: "Cormorant Garamond", serif;
}

.flap-top {
  position: absolute;
  inset: 0;
  z-index: 6;
  background: linear-gradient(145deg, #e6c98d, #b88947);
  clip-path: polygon(0 0, 100% 0, 50% 58%);
  transform-origin: top center;
  transform: rotateX(0deg);
  backface-visibility: visible;
  transition:
    transform 1s cubic-bezier(0.2, 0.9, 0.25, 1),
    z-index 0s linear 0.55s;
  will-change: transform;
}

.front-left {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50%;
  height: 100%;
  z-index: 5;
  background: linear-gradient(145deg, #cda35d, #9d7139);
  clip-path: polygon(0 0, 100% 50%, 0 100%);
}

.front-right {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
  height: 100%;
  z-index: 5;
  background: linear-gradient(145deg, #cda35d, #9d7139);
  clip-path: polygon(100% 0, 0 50%, 100% 100%);
}

.front-bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 56%;
  z-index: 7;
  background: linear-gradient(145deg, #d1a761, #9d7139);
  clip-path: polygon(0 100%, 50% 0, 100% 100%);
}

.seal {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 8;
  width: 54px;
  height: 54px;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #e5c17f, #8f1f1f);
  color: #f5d48b;
  font-size: 24px;
  box-shadow:
    0 8px 22px rgba(0, 0, 0, 0.35),
    inset 0 0 0 1px rgba(255, 255, 255, 0.26);
  transition:
    opacity 0.35s ease,
    transform 0.45s ease;
  will-change: opacity, transform;
}

.opened {
  pointer-events: none;
}

.opened .hint {
  opacity: 0;
  animation: none;
  transition: opacity 0.35s ease;
}

.opened .seal {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.45);
}

.opened .flap-top {
  z-index: 2;
  opacity: 1;
  transform: rotateX(165deg) translateY(-2px);
}

/* Бумага вытаскивается и центрируется */
.show-letter .letter {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

/* Конверт исчезает отдельно, бумага остаётся */
.hide-envelope .envelope {
  opacity: 0;
  transform: translateY(70px) scale(0.88);
  filter: blur(6px);
}

/* Через 3 секунды исчезает бумага */
.intro-fade-leave-active .letter {
  opacity: 0;
  transform: translate(-50%, -54%) scale(0.96);
  filter: blur(8px);
}

.intro-fade-leave-active {
  transition:
    opacity 0.8s ease,
    transform 0.8s ease,
    filter 0.8s ease;
}

.intro-fade-leave-to {
  opacity: 0;
  transform: scale(1.04);
  filter: blur(8px);
}

@keyframes envelopeIn {
  from {
    opacity: 0;
    transform: translateY(36px) scale(0.94);
    filter: blur(8px);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

@keyframes hintPulse {
  0%,
  100% {
    opacity: 0.65;
  }

  50% {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .envelope-scene {
    width: min(88vw, 360px);
    padding-top: 76px;
    margin-top: -58px;
  }

  .hint {
    margin-bottom: 28px;
    font-size: 11px;
  }

  .letter {
    width: min(84vw, 340px);
    min-height: 230px;
  }

  .letter p {
    font-size: 17px;
  }

  .letter h2 {
    font-size: 25px;
  }

  .seal {
    width: 46px;
    height: 46px;
    font-size: 20px;
  }
}
</style>