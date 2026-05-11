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
              ></textarea>
            </div>

            <button type="submit" class="submit-btn">
              {{ t.submit }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  computed,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref
} from 'vue'

import rsvpText from '@/data/rsvp.json'

const props = defineProps({
  lang: {
    type: String,
    default: 'ru'
  }
})

const activeDropdown = ref(null)

const form = reactive({
  name: '',
  status: '',
  guests: '1',
  comment: ''
})

const t = computed(() => {
  return rsvpText[props.lang] || rsvpText.ru
})

const statusOptions = computed(() => [
  {
    value: 'yes',
    label: t.value.statusYes
  },
  {
    value: 'no',
    label: t.value.statusNo
  }
])

const guestOptions = computed(() => [
  {
    value: '1',
    label: t.value.guests['1']
  },
  {
    value: '2',
    label: t.value.guests['2']
  },
  {
    value: '3',
    label: t.value.guests['3']
  },
  {
    value: '4',
    label: t.value.guests['4']
  }
])

const selectedStatusLabel = computed(() => {
  return statusOptions.value.find(item => item.value === form.status)?.label || ''
})

const selectedGuestsLabel = computed(() => {
  return guestOptions.value.find(item => item.value === form.guests)?.label || t.value.guests['1']
})

const toggleDropdown = name => {
  activeDropdown.value = activeDropdown.value === name ? null : name
}

const selectStatus = item => {
  form.status = item.value
  activeDropdown.value = null
}

const selectGuests = item => {
  form.guests = item.value
  activeDropdown.value = null
}

const closeDropdown = event => {
  if (!event.target.closest('.custom-dropdown')) {
    activeDropdown.value = null
  }
}

const submitForm = () => {
  if (!form.name || !form.status) return

  console.log('RSVP:', {
    name: form.name,
    status: form.status,
    guests: form.guests,
    comment: form.comment,
    lang: props.lang
  })

  form.name = ''
  form.status = ''
  form.guests = '1'
  form.comment = ''
  activeDropdown.value = null

  const modalEl = document.getElementById('rsvpModal')

  if (modalEl && window.bootstrap) {
    const modal = window.bootstrap.Modal.getInstance(modalEl)
    modal?.hide()
  }
}

onMounted(() => {
  document.addEventListener('click', closeDropdown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', closeDropdown)
})
</script>

<style scoped>
.rsvp-modal {
  --bs-modal-bg: transparent;
}

.modal-dialog {
  max-width: 480px;
  padding: 16px;
}

.modal-content {
  position: relative;
  border: 1px solid rgba(216, 182, 122, 0.35);
  border-radius: 28px;
  overflow: visible;
  background:
    linear-gradient(
      180deg,
      rgba(62, 66, 59, 0.98),
      rgba(42, 45, 41, 0.98)
    );
  color: #f0e3cf;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
}

.modal-content::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 28px;
  background:
    radial-gradient(
      circle at top,
      rgba(216, 182, 122, 0.16),
      transparent 46%
    );
  pointer-events: none;
}

.modal-close {
  position: absolute;
  top: 18px;
  right: 18px;
  z-index: 5;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: rgba(240, 227, 207, 0.9);
  opacity: 1;
  box-shadow: none;
}

.modal-body {
  position: relative;
  z-index: 2;
  padding: 46px 34px 36px;
  text-align: center;
}

.modal-label {
  margin: 0 0 10px;
  color: #d8b67a;
  font-size: 11px;
  letter-spacing: 4px;
}

h3 {
  margin: 0 0 16px;
  font-family: "Cormorant Garamond", serif;
  font-size: 34px;
  font-weight: 400;
  line-height: 1.1;
  color: #eee2c8;
}

.modal-desc {
  max-width: 360px;
  margin: 0 auto 28px;
  color: rgba(240, 227, 207, 0.84);
  font-size: 14px;
  line-height: 1.65;
}

.rsvp-form {
  text-align: left;
}

.form-group {
  position: relative;
  margin-bottom: 16px;
}

label {
  display: block;
  margin-bottom: 7px;
  color: #d8b67a;
  font-size: 12px;
  letter-spacing: 1px;
}

.form-control {
  min-height: 48px;
  border: 1px solid rgba(216, 182, 122, 0.25);
  border-radius: 14px;
  background-color: rgba(255, 248, 237, 0.08);
  color: #fff8ed;
  font-size: 14px;
  box-shadow: none;
}

.form-control::placeholder {
  color: rgba(255, 248, 237, 0.45);
}

.form-control:focus {
  border-color: rgba(216, 182, 122, 0.65);
  background-color: rgba(255, 248, 237, 0.12);
  color: #fff8ed;
  box-shadow: 0 0 0 0.2rem rgba(216, 182, 122, 0.12);
}

textarea.form-control {
  resize: none;
  padding-top: 12px;
}

.custom-dropdown {
  position: relative;
  z-index: 10;
}

.custom-dropdown.open {
  z-index: 50;
}

.dropdown-toggle-btn {
  width: 100%;
  min-height: 48px;
  padding: 0 15px;
  border: 1px solid rgba(216, 182, 122, 0.25);
  border-radius: 14px;
  background-color: rgba(255, 248, 237, 0.08);
  color: #fff8ed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  transition: 0.22s ease;
}

.dropdown-toggle-btn:hover,
.custom-dropdown.open .dropdown-toggle-btn {
  border-color: rgba(216, 182, 122, 0.65);
  background-color: rgba(255, 248, 237, 0.12);
  box-shadow: 0 0 0 0.2rem rgba(216, 182, 122, 0.1);
}

.dropdown-toggle-btn span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dropdown-toggle-btn .muted {
  color: rgba(255, 248, 237, 0.45);
}

.dropdown-toggle-btn i {
  color: #d8b67a;
  font-size: 13px;
  transition: 0.22s ease;
}

.custom-dropdown.open .dropdown-toggle-btn i {
  transform: rotate(180deg);
}

.dropdown-menu-custom {
  position: absolute;
  left: 0;
  right: 0;
  top: calc(100% + 8px);
  padding: 8px;
  border: 1px solid rgba(216, 182, 122, 0.28);
  border-radius: 16px;
  background:
    linear-gradient(
      180deg,
      rgba(56, 59, 53, 0.98),
      rgba(37, 40, 36, 0.98)
    );
  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.42);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-6px);
  transition: 0.2s ease;
  overflow: hidden;
}

.custom-dropdown.open .dropdown-menu-custom {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item-custom {
  width: 100%;
  min-height: 42px;
  padding: 0 12px;
  border: 0;
  border-radius: 12px;
  background: transparent;
  color: rgba(255, 248, 237, 0.82);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  transition: 0.2s ease;
}

.dropdown-item-custom:hover {
  background: rgba(216, 182, 122, 0.1);
  color: #fff8ed;
}

.dropdown-item-custom.active {
  background: rgba(216, 182, 122, 0.16);
  color: #d8b67a;
}

.dropdown-item-custom i {
  font-size: 14px;
  color: #d8b67a;
}

.submit-btn {
  width: 100%;
  height: 52px;
  margin-top: 8px;
  border: 1px solid rgba(255, 232, 190, 0.45);
  border-radius: 999px;
  background: linear-gradient(135deg, #e0bf7b 0%, #b78947 48%, #8d642f 100%);
  color: #fff8ed;
  font-size: 12px;
  letter-spacing: 2.4px;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.25s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
  filter: brightness(1.05);
}

@media (max-width: 480px) {
  .modal-dialog {
    padding: 12px;
  }

  .modal-body {
    padding: 42px 22px 30px;
  }

  h3 {
    font-size: 30px;
  }

  .modal-desc {
    font-size: 13px;
  }

  .form-control,
  .dropdown-toggle-btn,
  .dropdown-item-custom {
    font-size: 16px;
  }
}
</style>