import { supabase } from './lib/supabase.js'
import './style.css'

const form = document.querySelector('#login-form')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const submitButton = document.querySelector('#submit-button')
const message = document.querySelector('#form-message')
const togglePassword = document.querySelector('#toggle-password')

document.querySelector('#year').textContent = new Date().getFullYear()

togglePassword.addEventListener('click', () => {
  const isVisible = passwordInput.type === 'text'
  passwordInput.type = isVisible ? 'password' : 'text'
  togglePassword.setAttribute('aria-label', isVisible ? 'Mostrar senha' : 'Ocultar senha')
})

form.addEventListener('submit', async (event) => {
  event.preventDefault()
  message.textContent = ''
  message.className = 'form-message'
  submitButton.disabled = true
  submitButton.querySelector('span').textContent = 'Aguarde…'

  const { error } = await supabase.auth.signInWithPassword({
    email: emailInput.value.trim(),
    password: passwordInput.value,
  })

  submitButton.disabled = false
  submitButton.querySelector('span').textContent = 'Entrar'

  if (error) {
    message.textContent = 'Não foi possível entrar. Confira seu e-mail e sua senha.'
    message.classList.add('is-error')
    return
  }

  message.textContent = 'Login realizado com sucesso.'
  message.classList.add('is-success')
})
