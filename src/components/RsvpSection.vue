<template>
  <section id="rsvp" class="rsvp">
    <div class="rsvp-bg"></div>
    <div class="rsvp-overlay"></div>

    <div class="rsvp-content" data-aos="fade-up">
      <p class="section-label">RSVP</p>

      <h2>ПОДТВЕРДИТЬ УЧАСТИЕ</h2>

      <p class="description">
        Пожалуйста, подтвердите своё участие<br />
        до 1 июля 2026 года
      </p>

      <button type="button" class="rsvp-btn">
        ПОДТВЕРДИТЬ
      </button>

      <div class="arrow">⌄</div>

      <p class="final-text">
        МЫ БУДЕМ РАДЫ РАЗДЕЛИТЬ<br />
        ЭТОТ ДЕНЬ С ВАМИ!
      </p>
    </div>
  </section>
</template>

<style scoped>
.rsvp {
  position: relative;
  min-height: 520px;
  padding: 96px 24px 86px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  isolation: isolate;
  background: #2f332f;
  color: #d8b67a;
}

.rsvp-bg {
  position: absolute;
  inset: 0;
  background-image: url('/placeholder.png');
  background-size: cover;
  background-position: center bottom;
  opacity: 0.34;
  transform: scale(1.04);
  z-index: -3;
}

.rsvp-overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at center, rgba(216, 182, 122, 0.1), transparent 42%),
    linear-gradient(
      180deg,
      rgba(47, 51, 47, 0.86) 0%,
      rgba(47, 51, 47, 0.94) 50%,
      rgba(47, 51, 47, 0.98) 100%
    );
  z-index: -2;
}

.rsvp-content {
  width: 100%;
  max-width: 560px;
  margin: 0 auto;
  position: relative;
}

.rsvp-content::before {
  content: "";
  display: block;
  width: 86px;
  height: 1px;
  margin: 0 auto 24px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(216, 182, 122, 0.8),
    transparent
  );
}

.section-label {
  margin: 0 0 12px;
  font-size: 11px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: rgba(216, 182, 122, 0.8);
}

h2 {
  margin: 0 0 26px;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(30px, 5vw, 44px);
  font-weight: 400;
  line-height: 1.08;
  letter-spacing: 2.6px;
  color: #eee2c8;
}

.description {
  margin: 0;
  color: #f0e3cf;
  font-size: 14px;
  line-height: 1.8;
  letter-spacing: 0.8px;
}

.rsvp-btn {
  margin-top: 34px;
  width: 236px;
  height: 52px;
  border: 1px solid rgba(255, 232, 190, 0.45);
  border-radius: 999px;
  background: linear-gradient(135deg, #e0bf7b 0%, #b78947 48%, #8d642f 100%);
  color: #fff8ed;
  font-family: inherit;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 2.4px;
  cursor: pointer;
  box-shadow:
    0 14px 34px rgba(0, 0, 0, 0.32),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    filter 0.25s ease;
}

.rsvp-btn:hover {
  transform: translateY(-3px);
  filter: brightness(1.05);
  box-shadow:
    0 18px 42px rgba(0, 0, 0, 0.42),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.rsvp-btn:active {
  transform: translateY(-1px);
}

.arrow {
  margin-top: 22px;
  font-size: 26px;
  color: #c9a568;
  opacity: 0.7;
  animation: arrowMove 1.8s ease-in-out infinite;
}

.final-text {
  margin-top: 26px;
  color: #d8b67a;
  font-size: clamp(20px, 4vw, 28px);
  line-height: 1.35;
  letter-spacing: 1.3px;
  font-family: "Cormorant Garamond", serif;
}

@keyframes arrowMove {
  0%,
  100% {
    transform: translateY(0);
    opacity: 0.55;
  }

  50% {
    transform: translateY(6px);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .rsvp {
    min-height: 500px;
    padding: 82px 20px 76px;
  }

  .rsvp-bg {
    background-position: center bottom;
    opacity: 0.28;
  }

  h2 {
    letter-spacing: 2px;
  }

  .description {
    font-size: 13px;
  }

  .rsvp-btn {
    width: 220px;
    height: 50px;
    font-size: 11px;
  }
}

@media (max-width: 480px) {
  .rsvp {
    min-height: 470px;
    padding: 74px 18px 68px;
  }

  .rsvp-content::before {
    margin-bottom: 20px;
  }

  .section-label {
    font-size: 10px;
    letter-spacing: 3px;
  }

  h2 {
    margin-bottom: 22px;
    font-size: 30px;
  }

  .description {
    font-size: 13px;
    line-height: 1.7;
  }

  .final-text {
    margin-top: 24px;
    font-size: 21px;
  }
}
</style>