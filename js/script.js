//ficheiro de script

// Função para validar o formulário
      (() => {
        'use strict'
        
        const form = document.getElementById('myForm')
        
        form.addEventListener('submit', event => {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          
          form.classList.add('was-validated')
        })

        // Validação específica do email
        const emailInput = document.getElementById('inputEmail')
        emailInput.addEventListener('input', () => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!emailRegex.test(emailInput.value)) {
            emailInput.setCustomValidity('Email inválido')
          } else {
            emailInput.setCustomValidity('')
          }
        })

        // Validação do assunto
        const assuntoInput = document.getElementById('inputAssunto')
        assuntoInput.addEventListener('input', () => {
          if (assuntoInput.value.length < 3) {
            assuntoInput.setCustomValidity('O assunto deve ter pelo menos 3 caracteres')
          } else {
            assuntoInput.setCustomValidity('')
          }
        })

        // Validação da mensagem
        const mensagemInput = document.getElementById('mensagem')
        mensagemInput.addEventListener('input', () => {
          if (mensagemInput.value.length < 10) {
            mensagemInput.setCustomValidity('A mensagem deve ter pelo menos 10 caracteres')
          } else {
            mensagemInput.setCustomValidity('')
          }
        })
      })()