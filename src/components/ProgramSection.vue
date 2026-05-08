<template>
  <section
    id="program"
    class="program"
    data-aos="fade-up"
    data-aos-duration="1200"
    data-aos-offset="140"
  >
    <div class="program-bg"></div>
    <div class="program-overlay"></div>

    <div class="program-content">
      <h2
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        ПРОГРАММА ДНЯ
      </h2>

      <div class="timeline">
        <div
          v-for="(item, index) in program"
          :key="item.time"
          class="timeline-item"
          data-aos="fade-up"
          data-aos-duration="1000"
          :data-aos-delay="220 + index * 140"
        >
          <div class="timeline-icon">
            <i :class="item.icon"></i>
          </div>

          <div class="time">{{ item.time }}</div>
          <div class="line"></div>

          <div class="timeline-text">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const program = [
  {
    time: '15:30',
    icon: 'bi bi-people',
    title: 'СБОР ГОСТЕЙ',
    text: 'Приветственный фуршет'
  },
  {
    time: '16:00',
    icon: 'bi bi-gem',
    title: 'ЦЕРЕМОНИЯ',
    text: 'Выездная церемония'
  },
  {
    time: '16:30',
    icon: 'bi bi-camera',
    title: 'ФУРШЕТ И ФОТОСЕССИЯ',
    text: 'Поздравления и фотографии'
  },
  {
    time: '18:00',
    icon: 'bi bi-cup-straw',
    title: 'БАНКЕТ',
    text: 'Поздравления, ужин и программа'
  },
  {
    time: '22:30',
    icon: 'bi bi-music-note-beamed',
    title: 'ТОРТ И ТАНЦЫ',
    text: 'Продолжаем веселье!'
  }
]
</script>

<style scoped>
.program {
  position: relative;
  padding: 78px 24px 96px;
  overflow: hidden;
  isolation: isolate;
  background: #111;
  color: #d5ccb6;
}

.program-bg {
  position: absolute;
  inset: 0;
  background-image: url('/poster-light.png');
  background-size: cover;
  background-position: center bottom;
  filter: blur(1px);
  opacity: 0.9;
  transform: scale(1.04);
  z-index: -3;
  animation: bgReveal 2.8s ease forwards;
}

.program-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      to bottom,
      rgba(12, 12, 11, 0.82),
      rgba(12, 12, 11, 0.84),
      rgba(10, 9, 8, 0.88)
    ),
    radial-gradient(
      circle at left bottom,
      rgba(196, 147, 72, 0.28),
      transparent 30%
    ),
    radial-gradient(
      circle at right bottom,
      rgba(196, 147, 72, 0.24),
      transparent 30%
    );
  z-index: -2;
}

.program::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 260px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(216, 182, 122, 0.62),
    transparent
  );
  transform: translateX(-50%);
  z-index: -1;
}

.program-content {
  max-width: 660px;
  margin: 0 auto;
  text-align: center;
}

h2 {
  position: relative;
  margin: 0 0 56px;
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 2px;
  color: #d5ccb6;
  font-family: "Cormorant Garamond", serif;
}

h2::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -17px;
  width: 0;
  height: 1px;
  background: rgba(216, 182, 122, 0.75);
  transform: translateX(-50%);
  animation: titleLine 1.2s ease forwards;
  animation-delay: 0.45s;
}

.timeline {
  margin-top: 12px;
  display: grid;
  gap: 22px;
  text-align: left;
  align-items: center;
  justify-content: center;
}

.timeline-item {
  position: relative;
  display: grid;
  grid-template-columns: 48px 74px 26px 1fr;
  align-items: center;
  gap: 1.6rem;
  padding: 14px 18px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(216, 182, 122, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  transition:
    transform 0.35s ease,
    background 0.35s ease,
    border-color 0.35s ease;
}

.timeline-item:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.065);
  border-color: rgba(216, 182, 122, 0.22);
}

.timeline-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  color: #d5ccb6;
  font-size: 24px;
  text-align: center;
  line-height: 1;
  border-radius: 50%;
  background: rgba(216, 182, 122, 0.08);
  box-shadow:
    inset 0 0 0 1px rgba(216, 182, 122, 0.12),
    0 14px 34px rgba(216, 182, 122, 0.08);
  transition:
    transform 0.35s ease,
    background 0.35s ease;
}

.timeline-item:hover .timeline-icon {
  transform: scale(1.06);
  background: rgba(216, 182, 122, 0.13);
}

.time {
  padding-top: 3px;
  font-size: 30px;
  color: #d5ccb6;
  letter-spacing: 1px;
  line-height: 1;
  font-weight: 600;
  font-family: "Cormorant Garamond", serif;
  text-shadow: 0 10px 30px rgba(216, 182, 122, 0.12);
}

.line {
  width: 1px;
  min-height: 54px;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(216, 182, 122, 0.48),
    transparent
  );
  margin: 4px auto 0;
}

.timeline-text h3 {
  margin: 0 0 11px;
  font-size: 22px;
  letter-spacing: 1.8px;
  color: #d5ccb6;
  font-weight: 400;
  font-family: "Cormorant Garamond", serif;
}

.timeline-text p {
  margin: 0;
  color: hsl(0, 0%, 72%);
  font-size: 13px;
  line-height: 1.5;
}

:deep([data-aos]) {
  transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
}

@keyframes bgReveal {
  from {
    opacity: 0;
    transform: scale(1.08);
  }

  to {
    opacity: 0.9;
    transform: scale(1.04);
  }
}

@keyframes titleLine {
  from {
    width: 0;
    opacity: 0;
  }

  to {
    width: 46px;
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .program {
    padding: 62px 16px 76px;
  }

  .program-content {
    max-width: 420px;
  }

  h2 {
    margin-bottom: 46px;
    font-size: 28px;
  }

  .timeline {
    gap: 14px;
  }

  .timeline-item {
    grid-template-columns: 38px 48px 14px 1fr;
    gap: 10px;
    padding: 13px 12px;
    border-radius: 22px;
  }

  .timeline-icon {
    width: 38px;
    height: 38px;
    font-size: 19px;
  }

  .time {
    font-size: 16px;
    letter-spacing: 0.5px;
  }

  .line {
    min-height: 44px;
  }

  .timeline-text h3 {
    margin-bottom: 8px;
    font-size: 13px;
    letter-spacing: 1.1px;
  }

  .timeline-text p {
    font-size: 12px;
  }
}
</style>