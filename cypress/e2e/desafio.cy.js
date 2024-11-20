/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import home_page from '../support/pages/home_page';
import register_page from '../support/pages/register_page';

const user_data = require('../fixtures/data_valid.json')

// const screens = ['desktop', 'iphone-x', 'iphone-8']

// screens.forEach(element => {

  describe('Cadastro de usuário', () => {

    beforeEach(() => {

      // if(element != 'desktop') {
      //   cy.viewport(element)
      // }


        home_page.accessRegisterPage()
    });
        
    it.only('Validar campo nome vazio', () => {
      register_page.saveRegister()
      register_page.checkMessage('O campo nome deve ser prenchido')
    })

    it.only('Validar campo email vazio', () => {
      register_page.fillName(user_data.name)
      register_page.saveRegister()
      register_page.checkMessage('O campo e-mail deve ser prenchido corretamente')
    })

    it.only('Validar campo email inválido', () => {
      register_page.fillName(user_data.name)
      register_page.fillEmail('emailinvalido')
      register_page.saveRegister()
      register_page.checkMessage('O campo e-mail deve ser prenchido corretamente')
    })

    it.only('Campo Senha invalido ', () => {
      register_page.fillName(user_data.name)
      register_page.fillEmail(user_data.email)
      register_page.fillPassword('A123@')
      register_page.saveRegister()
      register_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
    })

    it.only('Login com sucesso', () => {
      const name = faker.person.fullName()
      const email = faker.internet.email()

      register_page.fillName(name)
      register_page.fillEmail(email)
      register_page.fillPassword(user_data.password)
      register_page.saveRegister()
      register_page.checkRegisterSucess(name)

          

     })


  })

// });