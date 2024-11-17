/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

const user_data = require('../fixtures/data_valid.json')

describe('Cadastro de usuário', () => {
    beforeEach(() => {
        cy.accessRegisterPage()
      });
      
      it('Validar campo nome vazio', () => {
        cy.saveRegister()
        cy.checkMessage('O campo nome deve ser prenchido')
      })

      it('Validar campo email vazio', () => {
        cy.fillName(user_data.name)
        cy.saveRegister()
        cy.checkMessage('O campo e-mail deve ser prenchido corretamente')
      })

      it('Validar campo email inválido', () => {
        cy.fillName(user_data.name)
        cy.fillEmail('emailinvalido')
        cy.saveRegister()
        cy.checkMessage('O campo e-mail deve ser prenchido corretamente')
      })

      it('Campo Senha invalido ', () => {
        cy.fillName(user_data.name)
        cy.fillEmail(user_data.email)
        cy.fillPassword('A123@')
        cy.saveRegister()
        cy.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
      })

      it('Login com sucesso', () => {
        const name = faker.person.fullName()
        const email = faker.internet.email()

        cy.fillName(name)
        cy.fillEmail(email)
        cy.fillPassword(user_data.password)
        cy.saveRegister()

        cy.get('#swal2-title')
            .should('have.text', 'Cadastro realizado!')

        cy.get('#swal2-html-container')
            .should('have.text', `Bem-vindo ${name}`)

      })


})