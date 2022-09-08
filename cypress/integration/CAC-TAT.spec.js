// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="Cypress" />



describe('Hooks', () => { describe('Central de Atendimento ao Cliente TAT', function() {
    it('verifica o título da aplicação', function() {
        cy.visit('./src/index.html')
        cy.title().should('be.equals', 'Central de Atendimento ao Cliente TAT')
    })
  })
})


describe('Envio de Formulário', function() {
    it('envia um formulário', function() {
        cy.get('#firstName').should('be.visible').type('Djonatas')
        cy.get('#lastName').should('be.visible').type('Borges')
        cy.get('#email').should('be.visible').type('interdjonatas@gmail.com')
        cy.get('#open-text-area').should('be.visible').type('VERIFICANDO SE O TESTE ESTA DIGITANDO TUDO.')
        cy.get('.button').click()
        cy.get('.success').should('be.visible')
    })
  })