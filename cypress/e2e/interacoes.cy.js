/// <reference types="cypress" />

describe('Interações', () =>  {
    it('Digitar em um campo', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.form-control')
            .type('carla.suporteam@gmail.com')
    })

    it.only('Click', () => {
        cy.visit('/')
            .get('.header-logo')

        //Click normal
        //cy.get('.fa-user')
        //    .click()

        //Click normal
        //cy.get('.fa-user')
        //    .dblclick()

        //Click botão direito
        //cy.get('.fa-user')
        //    .rightclick()

        //Click por coordenadas
        //cy.get('.fa-user')
        //    .click(100, 100, {force: true})

        //Simular aperto de enter
        cy.get('.form-control')
            .type('carla.suporteam@gmail.com{enter}')

    })

    it('Select', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.footer_one_widget')
            .contains('Checkout View Two')
            .click()

        cy.get('#country')
            .select('Colombia')
    })

    it('CheckBox e radio button', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.footer_one_widget').should('be.visible')
            .contains('Checkout View One')
            .click()

        cy.get('#materialUnchecked').should('be.visible')
            .check()
            .uncheck()

        cy.get('#css')
            .check()
            
    })






            
})