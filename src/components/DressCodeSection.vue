<template>
  <section id="dress-code" class="dress-code">
    <div class="bg-word">DRESS CODE</div>

    <div class="gold-glow glow-one"></div>
    <div class="gold-glow glow-two"></div>

    <div class="dress-container">
      <div
        class="dress-head"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div class="section-label">
          <span></span>
          <p>{{ t.label }}</p>
          <span></span>
        </div>

        <h2>{{ t.title }}</h2>

        <p class="subtitle">
          {{ t.subtitle }}
        </p>
      </div>

      <div class="fashion-board">
        <div
          class="main-message"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="120"
        >
          <span class="message-number">01</span>

          <p>
            {{ t.text }}
          </p>

          <div class="note">
            <i>✦</i>
            <span>{{ t.note }}</span>
          </div>
        </div>

        <div
          class="style-cards"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="220"
        >
          <div class="style-card ladies">
            <div class="style-icon">
              <i class="bi bi-flower1"></i>
            </div>

            <span>01</span>
            <h3>{{ t.ladiesTitle }}</h3>
            <p>{{ t.ladiesText }}</p>
          </div>

          <div class="style-card gentlemen">
            <div class="style-icon">
              <i class="bi bi-stars"></i>
            </div>

            <span>02</span>
            <h3>{{ t.gentlemenTitle }}</h3>
            <p>{{ t.gentlemenText }}</p>
          </div>
        </div>
      </div>

      <div
        class="fabric-palette"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="320"
      >
        <div
          v-for="color in t.colors"
          :key="color.value"
          class="fabric"
          :style="{ '--color': color.value }"
        >
          <div class="fabric-color"></div>
          <span>{{ color.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import dressCodeText from '@/data/dress-code.json'

const props = defineProps({
  lang: {
    type: String,
    default: 'kk'
  }
})

const t = computed(() => {
  return dressCodeText[props.lang] || dressCodeText.kk
})
</script>

<style scoped>
.dress-code {
  position: relative;
  min-height: 100vh;
  padding: 108px 22px 118px;
  overflow: hidden;
  background:
    radial-gradient(circle at 18% 12%, rgba(216, 182, 122, 0.42), transparent 32%),
    radial-gradient(circle at 88% 86%, rgba(216, 182, 122, 0.26), transparent 34%),
    linear-gradient(180deg, #fffaf1 0%, #f5ead8 48%, #ead8ba 100%);
  color: #252525;
  isolation: isolate;
}

.dress-code::before {
  content: "";
  position: absolute;
  inset: 18px;
  border: 1px solid rgba(168, 121, 57, 0.16);
  pointer-events: none;
  z-index: -1;
}

.bg-word {
  position: absolute;
  left: 50%;
  top: 48%;
  z-index: -4;
  transform: translate(-50%, -50%) rotate(-8deg);
  color: rgba(168, 121, 57, 0.07);
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(82px, 16vw, 230px);
  font-weight: 500;
  letter-spacing: 12px;
  white-space: nowrap;
  pointer-events: none;
}

.gold-glow {
  position: absolute;
  border-radius: 50%;
  background: rgba(216, 182, 122, 0.36);
  filter: blur(62px);
  z-index: -3;
  pointer-events: none;
  animation: glowMove 8s ease-in-out infinite;
}

.glow-one {
  width: 340px;
  height: 340px;
  left: -130px;
  top: 90px;
}

.glow-two {
  width: 420px;
  height: 420px;
  right: -160px;
  bottom: -150px;
  animation-delay: -4s;
}

.dress-container {
  width: min(1120px, 100%);
  margin: 0 auto;
}

.dress-head {
  max-width: 820px;
  margin: 0 auto 64px;
  text-align: center;
}

.section-label {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-bottom: 22px;
}

.section-label span {
  width: 82px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(168, 121, 57, 0.78),
    transparent
  );
}

.section-label p {
  margin: 0;
  color: #a87939;
  font-size: 12px;
  letter-spacing: 5px;
  text-transform: uppercase;
}

.dress-head h2 {
  margin: 0;
  color: #232323;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(56px, 8vw, 106px);
  font-weight: 400;
  line-height: 0.9;
}

.subtitle {
  max-width: 560px;
  margin: 26px auto 0;
  color: #6b5435;
  font-size: 15px;
  line-height: 1.7;
}

.fashion-board {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 28px;
  align-items: stretch;
}

.main-message {
  position: relative;
  min-height: 430px;
  padding: 46px 42px;
  border-radius: 42px;
  background:
    radial-gradient(circle at top right, rgba(216, 182, 122, 0.14), transparent 36%),
    linear-gradient(180deg, rgba(37, 41, 34, 0.96), rgba(31, 33, 29, 0.96));
  color: #f4e5c7;
  border: 1px solid rgba(216, 182, 122, 0.34);
  box-shadow:
    0 38px 100px rgba(89, 64, 31, 0.24),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
  overflow: hidden;
}

.main-message::before {
  content: "";
  position: absolute;
  inset: 14px;
  border-radius: 30px;
  border: 1px solid rgba(216, 182, 122, 0.14);
  pointer-events: none;
}

.message-number {
  display: block;
  margin-bottom: 34px;
  color: rgba(216, 182, 122, 0.72);
  font-family: "Cormorant Garamond", serif;
  font-size: 72px;
  line-height: 0.8;
}

.main-message > p {
  position: relative;
  z-index: 2;
  margin: 0;
  color: rgba(244, 229, 199, 0.9);
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(29px, 4vw, 44px);
  line-height: 1.22;
}

.note {
  position: relative;
  z-index: 2;
  margin-top: 42px;
  padding-top: 28px;
  border-top: 1px solid rgba(216, 182, 122, 0.24);
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.note i {
  color: #d8b67a;
  font-style: normal;
  font-size: 24px;
  animation: starPulse 2.4s ease-in-out infinite;
}

.note span {
  color: rgba(244, 229, 199, 0.78);
  font-size: 14px;
  line-height: 1.65;
}

.style-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.style-card {
  position: relative;
  min-height: 430px;
  padding: 36px 30px;
  border-radius: 42px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(255, 250, 240, 0.88), rgba(255, 250, 240, 0.46));
  border: 1px solid rgba(168, 121, 57, 0.24);
  box-shadow:
    0 34px 90px rgba(89, 64, 31, 0.16),
    inset 0 1px 0 rgba(255, 255, 255, 0.76);
}

.style-card::before {
  content: "";
  position: absolute;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  right: -110px;
  top: -110px;
  border: 1px solid rgba(168, 121, 57, 0.18);
}

.style-card::after {
  content: "";
  position: absolute;
  inset: 14px;
  border-radius: 30px;
  border: 1px solid rgba(168, 121, 57, 0.12);
  pointer-events: none;
}

.style-icon {
  position: absolute;
  left: 30px;
  top: 30px;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff8ed;
  background: linear-gradient(135deg, #d8b67a, #a87939);
  box-shadow: 0 16px 42px rgba(89, 64, 31, 0.2);
}

.style-icon i {
  font-size: 25px;
}

.style-card > span {
  color: rgba(168, 121, 57, 0.32);
  font-family: "Cormorant Garamond", serif;
  font-size: 86px;
  line-height: 0.8;
}

.style-card h3 {
  margin: 22px 0 16px;
  color: #232323;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(34px, 5vw, 52px);
  font-weight: 400;
  line-height: 0.96;
}

.style-card p {
  margin: 0;
  color: #5f4d34;
  font-size: 14px;
  line-height: 1.65;
}

.fabric-palette {
  margin-top: 28px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px;
}

.fabric {
  position: relative;
  height: 132px;
  padding: 10px;
  border-radius: 30px;
  background:
    linear-gradient(180deg, rgba(255, 250, 240, 0.78), rgba(255, 250, 240, 0.38));
  border: 1px solid rgba(168, 121, 57, 0.2);
  box-shadow:
    0 24px 60px rgba(89, 64, 31, 0.14),
    inset 0 1px 0 rgba(255, 255, 255, 0.72);
  overflow: hidden;
}

.fabric-color {
  width: 100%;
  height: 78px;
  border-radius: 22px;
  background: var(--color);
  border: 3px solid rgba(255, 250, 240, 0.72);
  box-shadow:
    inset 0 0 0 1px rgba(0, 0, 0, 0.08),
    0 12px 28px rgba(89, 64, 31, 0.12);
}

.fabric span {
  display: block;
  margin-top: 12px;
  color: #5f4d34;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
}

:deep([data-aos]) {
  transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
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
    opacity: 0.75;
  }

  50% {
    transform: scale(1.16) rotate(12deg);
    opacity: 1;
  }
}

@media (max-width: 900px) {
  .dress-code {
    padding: 86px 16px 96px;
  }

  .fashion-board {
    grid-template-columns: 1fr;
  }

  .main-message {
    min-height: auto;
    text-align: center;
  }

  .note {
    max-width: 560px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
  }

  .style-cards {
    grid-template-columns: 1fr 1fr;
  }

  .style-card {
    min-height: 360px;
  }
}

@media (max-width: 560px) {
  .dress-code {
    padding: 72px 12px 84px;
  }

  .dress-code::before {
    inset: 10px;
  }

  .bg-word {
    font-size: 72px;
    letter-spacing: 5px;
  }

  .dress-head {
    margin-bottom: 42px;
  }

  .section-label {
    gap: 12px;
    margin-bottom: 18px;
  }

  .section-label span {
    width: 54px;
  }

  .section-label p {
    font-size: 11px;
    letter-spacing: 4px;
  }

  .dress-head h2 {
    font-size: 46px;
  }

  .subtitle {
    font-size: 14px;
  }

  .main-message {
    padding: 34px 22px;
    border-radius: 30px;
  }

  .main-message::before {
    inset: 9px;
    border-radius: 23px;
  }

  .message-number {
    font-size: 56px;
  }

  .main-message > p {
    font-size: 27px;
  }

  .style-cards {
    grid-template-columns: 1fr;
  }

  .style-card {
    min-height: 300px;
    padding: 32px 24px;
    border-radius: 30px;
  }

  .style-card::after {
    inset: 9px;
    border-radius: 23px;
  }

  .style-card h3 {
    font-size: 38px;
  }

  .fabric-palette {
    grid-template-columns: repeat(5, 1fr);
    gap: 8px;
  }

  .fabric {
    height: 92px;
    padding: 6px;
    border-radius: 18px;
  }

  .fabric-color {
    height: 58px;
    border-radius: 13px;
    border-width: 2px;
  }

  .fabric span {
    display: none;
  }
}
</style>