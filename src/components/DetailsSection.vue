<template>
  <section id="details" class="details">
    <h2
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="120"
    >
      {{ t.title }}
    </h2>

    <div class="details-grid">
      <div
        v-for="(item, index) in t.items"
        :key="item.title"
        class="detail-card"
        data-aos="fade-up"
        data-aos-duration="1000"
        :data-aos-delay="150 + index * 150"
      >
        <i :class="item.icon"></i>
        <h3>{{ item.title }}</h3>
        <p v-html="item.text"></p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import detailsText from '@/data/details.json'

const props = defineProps({
  lang: {
    type: String,
    default: 'ru'
  }
})

const t = computed(() => {
  return detailsText[props.lang] || detailsText.ru
})
</script>

<style scoped>
.details {
  position: relative;
  padding: 68px 24px 84px;
  background: #f4f0ec;
  color: #a27a45;
  text-align: center;
  overflow: hidden;
}

.details::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 240px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(162, 122, 69, 0.38),
    transparent
  );
  transform: translateX(-50%);
}

.details::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      circle at center top,
      rgba(162, 122, 69, 0.08) 0%,
      rgba(244, 240, 236, 0) 46%
    );
  pointer-events: none;
}

h2 {
  margin: 0 0 54px;
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 2px;
  color: #a27a45;
  position: relative;
  font-family: "Cormorant Garamond", serif;
  z-index: 1;
}

h2::after {
  content: "";
  width: 0;
  height: 1px;
  background: #a27a45;
  position: absolute;
  left: 50%;
  bottom: -16px;
  transform: translateX(-50%);
  animation: titleLine 1.2s ease forwards;
  animation-delay: 0.45s;
}

.details-grid {
  position: relative;
  z-index: 1;
  max-width: 820px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.detail-card {
  position: relative;
  padding: 30px 22px 28px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.34);
  border: 1px solid rgba(162, 122, 69, 0.12);
  box-shadow: 0 22px 60px rgba(162, 122, 69, 0.07);
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    background 0.35s ease;
}

.detail-card:hover {
  transform: translateY(-6px);
  background: rgba(255, 255, 255, 0.48);
  box-shadow: 0 28px 70px rgba(162, 122, 69, 0.12);
}

.detail-card i {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 62px;
  height: 62px;
  margin-bottom: 24px;
  border-radius: 50%;
  font-size: 28px;
  color: #a27a45;
  background: rgba(162, 122, 69, 0.08);
  box-shadow: inset 0 0 0 1px rgba(162, 122, 69, 0.12);
  transition:
    transform 0.35s ease,
    background 0.35s ease;
}

.detail-card:hover i {
  transform: scale(1.06);
  background: rgba(162, 122, 69, 0.12);
}

.detail-card h3 {
  margin: 0 0 18px;
  font-size: 20px;
  letter-spacing: 2px;
  color: #a27a45;
  font-family: "Cormorant Garamond", serif;
}

.detail-card p {
  margin: 0;
  font-size: 13px;
  line-height: 1.65;
  color: #4e412e;
}

:deep([data-aos]) {
  transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
}

@keyframes titleLine {
  from {
    width: 0;
    opacity: 0;
  }

  to {
    width: 42px;
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .details {
    padding: 58px 20px 72px;
  }

  h2 {
    margin-bottom: 48px;
    font-size: 28px;
  }

  .details-grid {
    max-width: 360px;
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .detail-card {
    padding: 28px 22px 30px;
    border-radius: 26px;
  }

  .detail-card i {
    width: 58px;
    height: 58px;
    margin-bottom: 22px;
    font-size: 26px;
  }
}
</style>