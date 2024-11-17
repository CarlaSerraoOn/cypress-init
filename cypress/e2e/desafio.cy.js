/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

const user_data = require('../fixtures/data_valid.json')
const user_datainv = require('../fixtures/data.invalid.json')

describe('Cadastro de usuário', () => {
    beforeEach(() => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-lock').click()

      });

      

      it('Validar campo nome vazio', () => {
        cy.get('#user')

        cy.get('#email')
            .type(user_data.email)

        cy.get('#password')
            .type(user_data.password)

        cy.get('#btnRegister')
            .click()

        cy.get('#errorMessageFirstName')
        cy.log('Campo vazio preencha-o')

      })

      it('Validar campo email vazio', () => {
        cy.get('#user')
            .type(user_data.name)
            
        cy.get('#email')

        cy.get('#password')
            .type(user_data.name)

        cy.get('#btnRegister')
            .click()
            
        cy.get('#errorMessageFirstName')
        cy.log('Campo vazio preencha-o')
      })

      it('Validar campo email inválido', () => {
        cy.get('#user')
            .type(user_data.name)

        cy.get('#email')
            .type(user_datainv.email)
            
        cy.get('#password')
            .type(user_data.password)

        cy.get('#btnRegister')
            .click()

        cy.get('#errorMessageFirstName')
        cy.log('Email invalido, preencha-o')
        
      })

      it('Campo Senha invalida', () => {
        cy.get('#user')
            .type(user_data.name)
            
        cy.get('#email')
            .type(user_data.email)
        cy.get('#password')
            .type('A123@')

        cy.get('#btnRegister')
            .click()

        cy.get('#errorMessageFirstName')
        cy.log('Campo Senha 6 caracteres no minimo.')

      })

      it.only('Login com sucesso', () => {

        const name = faker.person.fullName()
        const email = faker.internet.email()

        cy.get('#user')
            .type(name)

        cy.get('#email')
            .type(email)

        cy.get('#password')
            .type(user_data.password)

        cy.get('#btnRegister')
            .click()

        cy.get('#swal2-title')
            .should('have.text', 'Cadastro realizado!')

        cy.get('#swal2-html-container')
            .should('have.text', `Bem-vindo ${name}`)

      })


})