/// <reference types="cypress" />

//Elementos
const elements = {
    buttons: {
        register:'#btnRegister'
    },
    fields: {
        name: '#user ',
        email: '#email',
        password: '#password',
        
    },
    messages: {
        error:'#errorMessageFirstName',
        successTitle:'#swal2-title',
        successSubtitle:'#swal2-html-container'
    }

}

//Ações/métodos/funções

Cypress.Commands.add('saveRegister', () => {
    cy.get(elements.buttons.register)
            .click()
})

Cypress.Commands.add('fillEmail', (email) => {
    cy.get(elements.fields.email)
        .type(email)
})

Cypress.Commands.add('fillName', (name) => {
    cy.get(elements.fields.name)
        .type(name)
})

Cypress.Commands.add('fillPassword', (password) => {
    cy.get(elements.fields.password)
        .should('be.visible')
        .type(password)
})

Cypress.Commands.add('checkMessage', (message) => {
    cy.get(elements.messages.error)
        .should('have.text', message)
})

Cypress.Commands.add('checkRegisterSucess', (name) => {
    cy.get(elements.messages.successTitle)
            .should('have.text', 'Cadastro realizado!')

        cy.get(elements.messages.successSubtitle, {timeout: 3000})
            .should('have.text', `Bem-vindo ${name}`)
})