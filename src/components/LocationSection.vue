<template>
  <section id="location" class="location-section">
    <div class="map-bg">
      <iframe
        v-if="t.map.iframeUrl"
        :src="t.map.iframeUrl"
        loading="lazy"
        allowfullscreen
      ></iframe>

      <div v-else class="map-placeholder">
        <i class="bi bi-map"></i>
        <p>2GIS MAP</p>
      </div>
    </div>

    <div class="map-overlay"></div>
    <div class="gold-vignette"></div>

    <div class="location-content">
      <div
        class="top-content"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div class="section-label">
          <span></span>
          <p>{{ t.map.label }}</p>
          <span></span>
        </div>

        <h2>{{ t.map.title }}</h2>
      </div>

      <div
        class="bottom-panel"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="180"
      >
        <div class="address-main">
          <div class="pin">
            <i class="bi bi-geo-alt"></i>
          </div>

          <div>
            <span>{{ t.map.text }}</span>
            <h3>{{ t.map.address }}</h3>
          </div>
        </div>

        <a
          v-if="t.map.iframeUrl"
          class="map-btn"
          :href="t.map.gisUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ mapButtonText }}
          <i class="bi bi-arrow-up-right"></i>
        </a>
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

const mapButtonText = computed(() => {
  return props.lang === 'kk' ? 'Картаны ашу' : 'Открыть карту'
})
</script>

<style scoped>
.location-section {
  position: relative;
  width: 100vw;
  height: 100vh;
  min-height: 720px;
  overflow: hidden;
  isolation: isolate;
  background: #ead8ba;
}

.map-bg {
  position: absolute;
  inset: 0;
  z-index: -5;
  width: 100vw;
  height: 100vh;
  min-height: 720px;
}

.map-bg iframe {
  width: 100vw;
  height: 100vh;
  min-height: 720px;
  border: 0;
  display: block;
  filter:
    saturate(0.86)
    contrast(0.96)
    brightness(0.88);
}

.map-placeholder {
  width: 100vw;
  height: 100vh;
  min-height: 720px;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 14px;
  color: #a87939;
  background:
    radial-gradient(circle at 20% 15%, rgba(216, 182, 122, 0.34), transparent 32%),
    radial-gradient(circle at 86% 82%, rgba(216, 182, 122, 0.22), transparent 34%),
    linear-gradient(180deg, #fffaf1 0%, #f5ead8 48%, #ead8ba 100%);
}

.map-placeholder i {
  font-size: 66px;
}

.map-placeholder p {
  margin: 0;
  font-size: 13px;
  letter-spacing: 5px;
}

.map-overlay {
  position: absolute;
  inset: 0;
  z-index: -4;
  pointer-events: none;
  background:
    linear-gradient(
      180deg,
      rgba(31, 33, 29, 0.74) 0%,
      rgba(31, 33, 29, 0.32) 38%,
      rgba(31, 33, 29, 0.26) 58%,
      rgba(31, 33, 29, 0.82) 100%
    ),
    radial-gradient(
      circle at 50% 22%,
      rgba(216, 182, 122, 0.24),
      transparent 34%
    );
}

.gold-vignette {
  position: absolute;
  inset: 0;
  z-index: -3;
  pointer-events: none;
  background:
    radial-gradient(circle at top left, rgba(216, 182, 122, 0.18), transparent 28%),
    radial-gradient(circle at bottom right, rgba(216, 182, 122, 0.18), transparent 32%);
}

.location-section::before {
  content: "";
  position: absolute;
  inset: 18px;
  z-index: 4;
  border: 1px solid rgba(216, 182, 122, 0.24);
  pointer-events: none;
}

.location-section::after {
  content: "LOCATION";
  position: absolute;
  left: 50%;
  bottom: 22px;
  z-index: 1;
  transform: translateX(-50%);
  color: rgba(255, 241, 208, 0.07);
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(76px, 15vw, 210px);
  font-weight: 500;
  line-height: 0.8;
  letter-spacing: 12px;
  pointer-events: none;
  white-space: nowrap;
}

.location-content {
  position: relative;
  z-index: 5;
  width: min(1180px, 100%);
  height: 100%;
  margin: 0 auto;
  padding: 72px 24px 58px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.top-content {
  text-align: center;
  color: #fff4db;
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
    rgba(216, 182, 122, 0.85),
    transparent
  );
}

.section-label p {
  margin: 0;
  color: #d8b67a;
  font-size: 12px;
  letter-spacing: 5px;
  text-transform: uppercase;
}

.top-content h2 {
  max-width: 820px;
  margin: 0 auto;
  color: #fff4db;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(52px, 8vw, 96px);
  font-weight: 400;
  line-height: 0.92;
  text-shadow: 0 18px 48px rgba(0, 0, 0, 0.42);
}

.bottom-panel {
  position: relative;
  width: 100%;
  padding: 24px;
  border-radius: 34px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 24px;
  align-items: center;
  background:
    linear-gradient(
      135deg,
      rgba(37, 41, 34, 0.78),
      rgba(31, 33, 29, 0.68)
    );
  border: 1px solid rgba(216, 182, 122, 0.32);
  backdrop-filter: blur(18px);
  box-shadow:
    0 34px 100px rgba(0, 0, 0, 0.36),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.bottom-panel::before {
  content: "";
  position: absolute;
  left: 28px;
  right: 28px;
  top: 12px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(216, 182, 122, 0.45),
    transparent
  );
}

.address-main {
  display: flex;
  align-items: center;
  gap: 20px;
  min-width: 0;
}

.pin {
  width: 58px;
  height: 58px;
  flex: 0 0 auto;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff8ed;
  background: linear-gradient(135deg, #e0bf7b, #a87939);
  box-shadow:
    0 18px 48px rgba(0, 0, 0, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.24);
}

.pin i {
  font-size: 26px;
}

.address-main span {
  display: block;
  margin-bottom: 7px;
  color: #d8b67a;
  font-size: 11px;
  letter-spacing: 4px;
  text-transform: uppercase;
}

.address-main h3 {
  margin: 0;
  color: #fff4db;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(30px, 4vw, 50px);
  font-weight: 400;
  line-height: 1.02;
}

.map-btn {
  height: 56px;
  padding: 0 28px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  white-space: nowrap;
  background: linear-gradient(135deg, #e0bf7b, #a87939);
  color: #fff8ed;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow:
    0 18px 52px rgba(0, 0, 0, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.22);
  transition: 0.25s ease;
}

.map-btn:hover {
  transform: translateY(-2px);
  filter: brightness(1.06);
}

:deep([data-aos]) {
  transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
}

@media (max-width: 768px) {
  .location-section {
    height: 100vh;
    min-height: 720px;
  }

  .map-bg,
  .map-bg iframe,
  .map-placeholder {
    height: 100vh;
    min-height: 720px;
  }

  .map-overlay {
    background:
      linear-gradient(
        180deg,
        rgba(31, 33, 29, 0.78) 0%,
        rgba(31, 33, 29, 0.36) 38%,
        rgba(31, 33, 29, 0.42) 58%,
        rgba(31, 33, 29, 0.88) 100%
      ),
      radial-gradient(
        circle at 50% 22%,
        rgba(216, 182, 122, 0.18),
        transparent 44%
      );
  }

  .location-section::before {
    inset: 10px;
  }

  .location-section::after {
    bottom: 14px;
    font-size: 74px;
    letter-spacing: 5px;
  }

  .location-content {
    padding: 58px 14px 38px;
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

  .top-content h2 {
    font-size: 46px;
  }

  .bottom-panel {
    padding: 22px;
    border-radius: 28px;
    grid-template-columns: 1fr;
  }

  .address-main {
    align-items: flex-start;
    gap: 15px;
  }

  .pin {
    width: 46px;
    height: 46px;
  }

  .pin i {
    font-size: 22px;
  }

  .address-main h3 {
    font-size: 30px;
  }

  .map-btn {
    width: 100%;
  }
}

@media (max-width: 420px) {
  .location-section {
    min-height: 680px;
  }

  .map-bg,
  .map-bg iframe,
  .map-placeholder {
    min-height: 680px;
  }

  .location-content {
    padding: 52px 12px 34px;
  }

  .top-content h2 {
    font-size: 40px;
  }

  .bottom-panel {
    padding: 20px;
  }

  .address-main h3 {
    font-size: 27px;
  }
}
</style>