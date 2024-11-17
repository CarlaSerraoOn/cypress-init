
describe('Get Elements', () =>  {
    it('Encontrar/Selecionar elementos', () => {

        // get() - Selecionar elementos

        cy.visit('/')
        cy.get('.logo').should('be.visible');


        // contains() - Para encontrar elementos por texto
        // geralmente diminuimos o escopo por get()

        cy.get('#top_header').as('cabecalho')
            .contains('Login')

        // find() - Serve para encontrar elementos
        // geralmente diminuimos o escopo por get()

        cy.get('#top_header')
            .find('.fa-user')

        // as() - alias - Serve para criar apelidos (atalhos)
        //Para grandes comandos

        cy.get('@cabecalho')
        .find('.fa-user')

    })
})