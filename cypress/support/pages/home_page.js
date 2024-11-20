/// <reference types="cypress" />

export default {
  accessRegisterPage() {
        // acesso a aplicação
        cy.visit("/")
            .get(".header-logo");

        // entrou no registro
        cy.get(".fa-lock") 
            .click();

        // verificar se a página está de cadastro
        cy.get("#user")
            .should("be.visible");
    },
};
