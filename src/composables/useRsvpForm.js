import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue'

const API_URL = 'https://demo2.ltkz.kz/okki/backend/rsvp.php'

export function useRsvpForm(t) {
  const activeDropdown = ref(null)
  const isSending = ref(false)
  const isSuccess = ref(false)
  const submitMessage = ref('')
  const closeTimer = ref(null)

  const form = reactive({
    name: '',
    status: '',
    guests: '1',
    comment: ''
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
    if (isSending.value) return

    activeDropdown.value = activeDropdown.value === name ? null : name
  }

  const selectStatus = item => {
    if (isSending.value) return

    form.status = item.value
    activeDropdown.value = null
  }

  const selectGuests = item => {
    if (isSending.value) return

    form.guests = item.value
    activeDropdown.value = null
  }

  const closeDropdown = event => {
    if (!event.target.closest('.custom-dropdown')) {
      activeDropdown.value = null
    }
  }

  const clearCloseTimer = () => {
    if (closeTimer.value) {
      clearTimeout(closeTimer.value)
      closeTimer.value = null
    }
  }

  const resetForm = () => {
    form.name = ''
    form.status = ''
    form.guests = '1'
    form.comment = ''
    activeDropdown.value = null
  }

  const closeModal = () => {
    const modalEl = document.getElementById('rsvpModal')

    if (!modalEl || !window.bootstrap) return

    const modal = window.bootstrap.Modal.getOrCreateInstance(modalEl)
    modal.hide()
  }

  const resetModalState = () => {
    clearCloseTimer()

    isSending.value = false
    isSuccess.value = false
    submitMessage.value = ''
    activeDropdown.value = null
  }

  const startAutoClose = () => {
    clearCloseTimer()

    closeTimer.value = setTimeout(() => {
      closeModal()
    }, 5000)
  }

  const buildPayload = () => {
    return {
      name: form.name.trim(),
      status: form.status === 'yes' ? 1 : form.status === 'no' ? 2 : 0,
      guests: Number(form.guests),
      comment: form.comment.trim() || null
    }
  }

  const validatePayload = payload => {
    if (!payload.name) {
      return 'Введите имя'
    }

    if (!payload.status) {
      return 'Выберите статус'
    }

    if (payload.guests < 1 || payload.guests > 4) {
      return 'Некорректное количество гостей'
    }

    return ''
  }

  const submitForm = async () => {
    if (isSending.value) return

    const payload = buildPayload()
    const errorMessage = validatePayload(payload)

    if (errorMessage) {
      submitMessage.value = errorMessage
      return
    }

    isSending.value = true
    submitMessage.value = ''

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      const result = await response.json()

      if (!response.ok || result.status !== true) {
        throw new Error(result.message || 'Ошибка отправки')
      }

      resetForm()

      isSuccess.value = true
      isSending.value = false

      startAutoClose()
    } catch (error) {
      isSending.value = false
      submitMessage.value = error.message || 'Не удалось отправить RSVP'
    }
  }

  onMounted(() => {
    document.addEventListener('click', closeDropdown)

    const modalEl = document.getElementById('rsvpModal')

    if (modalEl) {
      modalEl.addEventListener('hidden.bs.modal', resetModalState)
    }
  })

  onBeforeUnmount(() => {
    document.removeEventListener('click', closeDropdown)

    const modalEl = document.getElementById('rsvpModal')

    if (modalEl) {
      modalEl.removeEventListener('hidden.bs.modal', resetModalState)
    }

    clearCloseTimer()
  })

  return {
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
  }
}