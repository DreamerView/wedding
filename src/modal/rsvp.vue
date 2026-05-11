<template>
  <div
    class="modal fade rsvp-modal"
    id="rsvpModal"
    tabindex="-1"
    aria-labelledby="rsvpModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <button
          type="button"
          class="btn-close modal-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>

        <div class="modal-body">
          <div v-if="isSending" class="rsvp-loading-overlay">
            <div class="rsvp-page-spinner"></div>
          </div>

          <div v-if="isSuccess" class="success-screen">
            <div class="success-icon">
              <i class="bi bi-check-lg"></i>
            </div>

            <p class="modal-label">RSVP</p>

            <h3>Спасибо, что отправили!</h3>

            <p class="modal-desc">
              Ваш ответ успешно сохранён.
            </p>
          </div>

          <template v-else>
            <p class="modal-label">{{ t.label }}</p>

            <h3 id="rsvpModalLabel">{{ t.title }}</h3>

            <p class="modal-desc">
              {{ t.description }}
            </p>

            <form class="rsvp-form" @submit.prevent="submitForm">
              <div class="form-group">
                <label>{{ t.nameLabel }}</label>

                <input
                  v-model="form.name"
                  type="text"
                  class="form-control"
                  :placeholder="t.namePlaceholder"
                  :disabled="isSending"
                  required
                />
              </div>

              <div class="form-group">
                <label>{{ t.statusLabel }}</label>

                <div
                  class="custom-dropdown"
                  :class="{ open: activeDropdown === 'status' }"
                >
                  <button
                    type="button"
                    class="dropdown-toggle-btn"
                    :disabled="isSending"
                    @click.stop="toggleDropdown('status')"
                  >
                    <span :class="{ muted: !selectedStatusLabel }">
                      {{ selectedStatusLabel || t.statusPlaceholder }}
                    </span>

                    <i class="bi bi-chevron-down"></i>
                  </button>

                  <div class="dropdown-menu-custom">
                    <button
                      v-for="item in statusOptions"
                      :key="item.value"
                      type="button"
                      class="dropdown-item-custom"
                      :class="{ active: form.status === item.value }"
                      @click="selectStatus(item)"
                    >
                      <span>{{ item.label }}</span>

                      <i
                        v-if="form.status === item.value"
                        class="bi bi-check-lg"
                      ></i>
                    </button>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label>{{ t.guestsLabel }}</label>

                <div
                  class="custom-dropdown"
                  :class="{ open: activeDropdown === 'guests' }"
                >
                  <button
                    type="button"
                    class="dropdown-toggle-btn"
                    :disabled="isSending"
                    @click.stop="toggleDropdown('guests')"
                  >
                    <span>{{ selectedGuestsLabel }}</span>

                    <i class="bi bi-chevron-down"></i>
                  </button>

                  <div class="dropdown-menu-custom">
                    <button
                      v-for="item in guestOptions"
                      :key="item.value"
                      type="button"
                      class="dropdown-item-custom"
                      :class="{ active: form.guests === item.value }"
                      @click="selectGuests(item)"
                    >
                      <span>{{ item.label }}</span>

                      <i
                        v-if="form.guests === item.value"
                        class="bi bi-check-lg"
                      ></i>
                    </button>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label>{{ t.commentLabel }}</label>

                <textarea
                  v-model="form.comment"
                  class="form-control"
                  rows="3"
                  :placeholder="t.commentPlaceholder"
                  :disabled="isSending"
                ></textarea>
              </div>

              <button type="submit" class="submit-btn" :disabled="isSending">
                {{ t.submit }}
              </button>

              <p v-if="submitMessage" class="submit-message">
                {{ submitMessage }}
              </p>
            </form>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

import rsvpText from '@/data/rsvp.json'
import { useRsvpForm } from '@/composables/useRsvpForm'
import '@/assets/rsvp-modal.css'

const props = defineProps({
  lang: {
    type: String,
    default: 'ru'
  }
})

const t = computed(() => {
  return rsvpText[props.lang] || rsvpText.ru
})

const {
  form,
  activeDropdown,
  isSending,
  isSuccess,
  submitMessage,

  statusOptions,
  guestOptions,
  selectedStatusLabel,
  selectedGuestsLabel,

  toggleDropdown,
  selectStatus,
  selectGuests,
  submitForm
} = useRsvpForm(t)
</script>