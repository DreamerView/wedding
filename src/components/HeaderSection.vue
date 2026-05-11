<template>
  <header
    class="site-header"
    data-aos="fade-down"
    data-aos-duration="1100"
    data-aos-delay="100"
  >
    <nav class="nav">
      <div class="nav-left d-none d-md-flex">
        <a
          href="#about"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-delay="350"
        >
          {{ t.about }}
        </a>

        <a
          href="#details"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-delay="450"
        >
          {{ t.details }}
        </a>

        <a
          href="#program"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-delay="550"
        >
          {{ t.program }}
        </a>
      </div>

      <a
        href="#"
        class="logo"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="650"
      >
        <img height="25" width="auto" loading="lazy" src="/logo.png" />
      </a>

      <div class="nav-right">
        <a
          class="rsvp-link m-0 p-0"
          href="#rsvp"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-delay="750"
        >
          {{ t.rsvp }}
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import headerText from '@/data/header.json'

const props = defineProps({
  lang: {
    type: String,
    default: 'ru'
  }
})

const t = computed(() => {
  return headerText[props.lang] || headerText.ru
})
</script>

<style scoped>
.site-header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  background: rgba(255, 255, 255, 0.42);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 0 0 1.5rem 1.5rem;
  border-bottom: 1px solid rgba(162, 122, 69, 0.12);
  box-shadow: 0 18px 50px rgba(162, 122, 69, 0.08);
}

.nav {
  width: 100%;
  max-width: 1120px;
  height: 56px;
  margin: 0 auto;
  padding: 0 38px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
}

.nav-left,
.nav-right {
  display: flex;
  align-items: center;
  gap: 64px;
}

.nav-right {
  justify-content: flex-end;
}

a {
  position: relative;
  color: hsl(0, 0%, 55%);
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 1.4px;
  transition: 0.3s ease;
  font-weight: 600;
}

.nav-left a::after,
.rsvp-link::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -7px;
  width: 0;
  height: 1px;
  background: #a27a45;
  transform: translateX(-50%);
  transition: width 0.35s ease;
}

.nav-left a:hover,
.rsvp-link:hover {
  color: #a27a45;
}

.nav-left a:hover::after,
.rsvp-link:hover::after {
  width: 100%;
}

.logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  transition: transform 0.35s ease, opacity 0.35s ease;
}

.logo:hover {
  transform: translateY(-1px) scale(1.04);
  opacity: 0.85;
}

.logo img {
  display: block;
  object-fit: contain;
}

.rsvp-link {
  color: #a27a45;
}

:deep([data-aos]) {
  transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
}

@media (max-width: 768px) {
  .site-header {
    background: rgba(255, 255, 255, 0.48);
    border-radius: 0 0 1.25rem 1.25rem;
  }

  .nav {
    height: 54px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }

  .logo img {
    height: 24px;
  }

  .nav-right {
    gap: 0;
  }

  .rsvp-link {
    font-size: 10px;
    letter-spacing: 1px;
    white-space: nowrap;
  }
}
</style>