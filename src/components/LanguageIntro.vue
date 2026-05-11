<template>
  <Transition name="language-fade">
    <div v-if="visible" class="language-intro">
      <div class="language-card">
        <p class="small-text">ҚОШ КЕЛДІҢІЗ</p>

        <h2>Выберите язык</h2>

        <div class="language-actions">
          <button type="button" @click="selectLanguage('kk')">
            Қазақша
          </button>
          
          <button type="button" @click="selectLanguage('ru')">
            Русский
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguageStore } from '@/stores/languageStore'

const languageStore = useLanguageStore()

const visible = ref(true)

const selectLanguage = (lang) => {
  languageStore.setLocale(lang)

  setTimeout(() => {
    visible.value = false
  }, 250)
}
</script>

<style scoped>
.language-intro {
  position: fixed;
  inset: 0;
  z-index: 9999999;
  width: 100vw;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(circle at top, rgba(216, 182, 122, 0.22), transparent 34%),
    linear-gradient(135deg, #15120f, #070707);
}

.language-card {
  width: min(84vw, 420px);
  min-height: 260px;
  padding: 34px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.98),
    rgba(245, 235, 214, 0.98)
  );
  color: #7a5528;
  text-align: center;
  box-shadow:
    0 28px 80px rgba(0, 0, 0, 0.38),
    inset 0 0 0 1px rgba(122, 85, 40, 0.12);
  animation: cardIn 0.8s ease both;
}

.small-text {
  margin: 0 0 8px;
  font-size: 13px;
  letter-spacing: 2.4px;
  color: #9d7139;
  font-family: "Cormorant Garamond", serif;
}

.language-card h2 {
  margin: 0 0 24px;
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 1px;
  font-family: "Cormorant Garamond", serif;
}

.language-actions {
  display: flex;
  gap: 12px;
}

.language-actions button {
  border: 1px solid rgba(122, 85, 40, 0.25);
  border-radius: 999px;
  padding: 12px 26px;
  background: rgba(122, 85, 40, 0.08);
  color: #7a5528;
  font-size: 15px;
  cursor: pointer;
  transition:
    background 0.25s ease,
    transform 0.25s ease;
}

.language-actions button:hover {
  background: rgba(122, 85, 40, 0.16);
  transform: translateY(-2px);
}

.language-fade-leave-active {
  transition:
    opacity 0.6s ease,
    filter 0.6s ease;
}

.language-fade-leave-to {
  opacity: 0;
  filter: blur(8px);
}

@keyframes cardIn {
  from {
    opacity: 0;
    transform: translateY(24px) scale(0.96);
    filter: blur(8px);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

@media (max-width: 768px) {
  .language-card {
    width: min(84vw, 340px);
    min-height: 230px;
  }

  .language-card h2 {
    font-size: 26px;
  }

  .language-actions {
    width: 100%;
    flex-direction: column;
    padding: 0 22px;
  }
}
</style>