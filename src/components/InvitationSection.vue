<template>
  <section
    id="invitation"
    class="invitation"
    data-aos="fade-up"
    data-aos-duration="900"
    data-aos-delay="100"
  >
    <div class="bg-names">
      <span>{{ t.bgNames.groom }}</span>
      <span>{{ t.bgNames.bride }}</span>
    </div>

    <div class="gold-orb orb-one"></div>
    <div class="gold-orb orb-two"></div>

    <div class="invitation-wrap">
      <div
        class="visual-side"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="250"
      >
        <div class="date-card">
          <div class="date-weekday">
            {{ t.date.week }}
          </div>

          <div class="date-number">
            {{ t.date.day }}
          </div>

          <div class="date-month">
             {{ t.date.month }} 2026
          </div>

          <div class="date-line"></div>

          <div class="date-caption">
            {{ t.verticalText }}
          </div>
        </div>
      </div>

      <div
        class="text-panel"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="350"
      >
        <div class="panel-top">
          <span></span>
          <p>{{ t.label }}</p>
        </div>

        <h2>{{ t.title }}</h2>

        <p class="invite-text">
          {{ t.text }}
        </p>

        <div class="signature">
          <div>
            <small>{{ t.hostsLabel }}</small>
            <p>{{ t.hosts }}</p>
          </div>

          <i>✦</i>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import invitationText from '@/data/invitation.json'

const props = defineProps({
  lang: {
    type: String,
    default: 'kk'
  }
})

const t = computed(() => {
  return invitationText[props.lang] || invitationText.kk
})
</script>

<style scoped>
.invitation {
  position: relative;
  min-height: 720px;
  padding: 96px 22px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background:
    radial-gradient(circle at 20% 20%, rgba(216, 182, 122, 0.18), transparent 28%),
    radial-gradient(circle at 88% 78%, rgba(216, 182, 122, 0.18), transparent 30%),
    linear-gradient(135deg, #272b25 0%, #3b3e36 48%, #201f1c 100%);
  isolation: isolate;
}

.bg-names {
  position: absolute;
  inset: 0;
  z-index: -3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 34px;
  opacity: 0.065;
  pointer-events: none;
}

.bg-names span {
  display: block;
  white-space: nowrap;
  color: #fff1d0;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(76px, 14vw, 190px);
  font-weight: 500;
  line-height: 0.8;
  letter-spacing: 8px;
  animation: floatText 16s ease-in-out infinite;
}

.bg-names span:nth-child(2) {
  text-align: right;
  animation-delay: -8s;
}

.gold-orb {
  position: absolute;
  border-radius: 50%;
  background: rgba(216, 182, 122, 0.18);
  filter: blur(38px);
  z-index: -2;
  animation: orbMove 8s ease-in-out infinite;
  pointer-events: none;
}

.orb-one {
  width: 260px;
  height: 260px;
  top: 70px;
  left: -80px;
}

.orb-two {
  width: 420px;
  height: 340px;
  right: -120px;
  bottom: -120px;
  animation-delay: -4s;
}

.invitation-wrap {
  width: min(1080px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 54px;
  align-items: center;
}

.visual-side {
  position: relative;
  min-height: 440px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.date-card {
  position: relative;
  width: 100%;
  max-width: 420px;
  min-height: 420px;
  padding: 42px 26px 36px;
  border-radius: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(circle at 50% 18%, rgba(216, 182, 122, 0.22), transparent 36%),
    linear-gradient(180deg, rgba(255, 250, 240, 0.13), rgba(255, 250, 240, 0.035));
  border: 1px solid rgba(216, 182, 122, 0.38);
  box-shadow:
    0 34px 90px rgba(0, 0, 0, 0.32),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  overflow: hidden;
}

.date-card::before {
  content: "";
  position: absolute;
  inset: 16px;
  border-radius: 32px;
  border: 1px solid rgba(216, 182, 122, 0.18);
  pointer-events: none;
}

.date-card::after {
  content: "T&J";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -47%);
  color: rgba(255, 241, 208, 0.045);
  font-family: "Cormorant Garamond", serif;
  font-size: 118px;
  line-height: 1;
  white-space: nowrap;
  pointer-events: none;
}

.date-weekday {
  position: relative;
  z-index: 2;
  /* margin-bottom: 22px; */
  color: #d8b67a;
  font-size: 13px;
  letter-spacing: 6px;
  text-transform: uppercase;
}

.date-number {
  position: relative;
  z-index: 2;
  color: #f4e5c7;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(132px, 15vw, 178px);
  font-weight: 400;
  line-height: 0.72;
  letter-spacing: -6px;
  text-shadow:
    0 18px 42px rgba(0, 0, 0, 0.28),
    0 0 34px rgba(216, 182, 122, 0.22);
  animation: dateGlow 3.4s ease-in-out infinite;
  margin-bottom:1.5rem;
}

.date-month {
  position: relative;
  z-index: 2;
  margin-top: 34px;
  color: #d8b67a;
  font-size: 14px;
  letter-spacing: 5px;
  text-transform: uppercase;
}

.date-line {
  position: relative;
  z-index: 2;
  width: 82px;
  height: 1px;
  margin: 28px 0 20px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(216, 182, 122, 0.85),
    transparent
  );
}

.date-caption {
  position: relative;
  z-index: 2;
  color: rgba(240, 227, 207, 0.62);
  font-size: 11px;
  letter-spacing: 4px;
  text-transform: uppercase;
  text-align: center;
}

.text-panel {
  position: relative;
  padding: 58px 58px 54px;
  border-radius: 34px;
  background:
    linear-gradient(180deg, rgba(255, 250, 240, 0.96), rgba(246, 237, 219, 0.92));
  box-shadow:
    0 36px 90px rgba(0, 0, 0, 0.34),
    inset 0 1px 0 rgba(255, 255, 255, 0.75);
  overflow: hidden;
}

.text-panel::before {
  content: "";
  position: absolute;
  width: 220px;
  height: 220px;
  right: -80px;
  top: -80px;
  border-radius: 50%;
  border: 1px solid rgba(168, 121, 57, 0.2);
}

.text-panel::after {
  content: "T&J";
  position: absolute;
  right: 28px;
  bottom: 12px;
  color: rgba(168, 121, 57, 0.08);
  font-family: "Cormorant Garamond", serif;
  font-size: 112px;
  line-height: 1;
}

.panel-top {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 22px;
}

.panel-top span {
  width: 64px;
  height: 1px;
  background: #a87939;
}

.panel-top p {
  margin: 0;
  color: #a87939;
  font-size: 12px;
  letter-spacing: 5px;
}

h2 {
  position: relative;
  z-index: 2;
  margin: 0 0 30px;
  color: #232323;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(42px, 6vw, 72px);
  font-weight: 400;
  line-height: 0.98;
  letter-spacing: -0.4px;
}

.invite-text {
  position: relative;
  z-index: 2;
  max-width: 620px;
  margin: 0;
  color: #2a2a2a;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(24px, 3.2vw, 33px);
  line-height: 1.42;
}

.signature {
  position: relative;
  z-index: 2;
  margin-top: 42px;
  padding-top: 24px;
  border-top: 1px solid rgba(168, 121, 57, 0.25);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
}

.signature small {
  display: block;
  margin-bottom: 6px;
  color: #a87939;
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
}

.signature p {
  margin: 0;
  color: #232323;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(30px, 4vw, 42px);
  line-height: 1;
}

.signature i {
  color: #b98a48;
  font-style: normal;
  font-size: 30px;
  animation: starPulse 2.4s ease-in-out infinite;
}

@keyframes floatText {
  0%,
  100% {
    transform: translateX(-2%);
  }

  50% {
    transform: translateX(2%);
  }
}

@keyframes orbMove {
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

@keyframes dateGlow {
  0%,
  100% {
    transform: scale(1);
    text-shadow:
      0 18px 42px rgba(0, 0, 0, 0.28),
      0 0 34px rgba(216, 182, 122, 0.22);
  }

  50% {
    transform: scale(1.025);
    text-shadow:
      0 22px 54px rgba(0, 0, 0, 0.34),
      0 0 48px rgba(216, 182, 122, 0.34);
  }
}

@media (max-width: 900px) {
  .invitation {
    padding: 78px 18px;
  }

  .invitation-wrap {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .visual-side {
    min-height: auto;
  }

  .date-card {
    max-width: 100%;
    min-height: 300px;
  }

  .date-number {
    font-size: 128px;
  }

  .text-panel {
    padding: 42px 26px 38px;
    border-radius: 28px;
  }
}

@media (max-width: 480px) {
  .invitation {
    padding: 64px 14px;
  }

  .bg-names span {
    font-size: 72px;
    letter-spacing: 4px;
  }

  .date-card {
    min-height: 270px;
    padding: 34px 20px 30px;
    border-radius: 32px;
  }

  .date-card::before {
    inset: 12px;
    border-radius: 24px;
  }

  .date-weekday {
    margin-bottom: 18px;
    font-size: 11px;
    letter-spacing: 5px;
  }

  .date-number {
    font-size: 112px;
    letter-spacing: -4px;
  }

  .date-month {
    margin-top: 26px;
    font-size: 12px;
    letter-spacing: 4px;
  }

  .date-line {
    margin: 22px 0 16px;
  }

  .date-caption {
    font-size: 10px;
    letter-spacing: 3px;
  }

  .text-panel {
    padding: 38px 22px 34px;
  }

  .panel-top {
    gap: 12px;
  }

  .panel-top span {
    width: 42px;
  }

  .panel-top p {
    font-size: 11px;
    letter-spacing: 4px;
  }

  h2 {
    font-size: 38px;
    margin-bottom: 24px;
  }

  .invite-text {
    font-size: 23px;
    line-height: 1.47;
  }

  .signature {
    display: block;
    margin-top: 34px;
  }

  .signature i {
    display: block;
    margin-top: 18px;
  }
}
</style>