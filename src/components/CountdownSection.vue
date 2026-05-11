<template>
  <section class="countdown">
    <p
      class="small-text"
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-delay="150"
    >
      {{ t.title }}
    </p>

    <div class="countdown-grid">
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="300"
      >
        <Transition name="count-flip" mode="out-in">
          <strong :key="time.days">{{ time.days }}</strong>
        </Transition>
        <span>{{ t.days }}</span>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="450"
      >
        <Transition name="count-flip" mode="out-in">
          <strong :key="time.hours">{{ time.hours }}</strong>
        </Transition>
        <span>{{ t.hours }}</span>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="600"
      >
        <Transition name="count-flip" mode="out-in">
          <strong :key="time.minutes">{{ time.minutes }}</strong>
        </Transition>
        <span>{{ t.minutes }}</span>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="750"
      >
        <Transition name="count-flip" mode="out-in">
          <strong :key="time.seconds">{{ time.seconds }}</strong>
        </Transition>
        <span>{{ t.seconds }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import AOS from 'aos'

import countdownText from '@/data/countdown.json'

const props = defineProps({
  lang: {
    type: String,
    default: 'ru'
  }
})

const t = computed(() => {
  return countdownText[props.lang] || countdownText.ru
})

const targetDate = new Date('2026-07-31T00:00:00').getTime()

const time = ref({
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00'
})

let timer = null

const pad = (num) => String(num).padStart(2, '0')

const updateCountdown = () => {
  const now = Date.now()
  const distance = targetDate - now

  if (distance <= 0) {
    time.value = {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00'
    }

    clearInterval(timer)
    return
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((distance / (1000 * 60)) % 60)
  const seconds = Math.floor((distance / 1000) % 60)

  time.value = {
    days: String(days),
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds)
  }
}

onMounted(async () => {
  updateCountdown()
  timer = setInterval(updateCountdown, 1000)

  await nextTick()
  AOS.refresh()
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style scoped>
.countdown {
  position: relative;
  padding: 42px 24px 62px;
  text-align: center;
  background:
    radial-gradient(
      circle at center top,
      rgba(216, 182, 122, 0.08) 0%,
      rgba(56, 59, 53, 0) 42%
    ),
    #383b35;
  color: #d8b67a;
  overflow: hidden;
}

.countdown::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 220px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(216, 182, 122, 0.65),
    transparent
  );
  transform: translateX(-50%);
}

.small-text {
  margin: 0 0 30px;
  font-size: 24px;
  letter-spacing: 2px;
  color: #d5ccb6;
  font-family: "Cormorant Garamond", serif;
}

.countdown-grid {
  max-width: 620px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.countdown-grid div {
  position: relative;
  padding: 0 18px;
}

.countdown-grid div::after {
  content: "";
  position: absolute;
  top: 8px;
  right: 0;
  width: 1px;
  height: 58px;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(216, 182, 122, 0.32),
    transparent
  );
}

.countdown-grid div:last-child::after {
  display: none;
}

.countdown-grid strong {
  display: block;
  min-height: 48px;
  font-size: 48px;
  line-height: 1;
  font-weight: 400;
  letter-spacing: 2px;
  color: #d5ccb6;
  font-family: "Cormorant Garamond", serif;
  text-shadow: 0 10px 30px rgba(216, 182, 122, 0.12);
}

.countdown-grid span {
  display: block;
  margin-top: 12px;
  font-size: 11px;
  letter-spacing: 1.5px;
  color: hsl(43, 27%, 57%);
}

.count-flip-enter-active,
.count-flip-leave-active {
  transition:
    opacity 0.35s ease,
    transform 0.35s ease,
    filter 0.35s ease;
}

.count-flip-enter-from {
  opacity: 0;
  transform: translateY(10px) scale(0.96);
  filter: blur(4px);
}

.count-flip-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(1.04);
  filter: blur(4px);
}

:deep([data-aos]) {
  transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
}

@media (max-width: 768px) {
  .countdown {
    padding: 36px 16px 52px;
  }

  .small-text {
    margin-bottom: 26px;
    font-size: 22px;
  }

  .countdown-grid {
    max-width: 360px;
  }

  .countdown-grid div {
    padding: 0 10px;
  }

  .countdown-grid div::after {
    top: 4px;
    height: 44px;
  }

  .countdown-grid strong {
    min-height: 32px;
    font-size: 28px;
  }

  .countdown-grid span {
    margin-top: 10px;
    font-size: 9px;
    letter-spacing: 1.1px;
  }
}
</style>