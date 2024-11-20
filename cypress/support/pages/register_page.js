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
export default {

    saveRegister() {
        cy.get(elements.buttons.register)
                .click()
    },

    fillEmail(email) {
        cy.get(elements.fields.email)
            .type(email)
    },

    fillName(name){
        cy.get(elements.fields.name)
            .type(name)
    },

    fillPassword(password) {
        cy.get(elements.fields.password)
            .should('be.visible')
            .type(password)
    },

    checkMessage(message) {
        cy.get(elements.messages.error)
            .should('have.text', message)
    },

    checkRegisterSucess(name) {
        cy.get(elements.messages.successTitle)
                .should('have.text', 'Cadastro realizado!')

            cy.get(elements.messages.successSubtitle, {timeout: 3000})
                .should('have.text', `Bem-vindo ${name}`)
    }
}