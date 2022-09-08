// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach( function() {
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equals', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos e envia um formulário', function() {
        cy.get('#firstName').should('be.visible').type('Djonatas')
        cy.get('#lastName').should('be.visible').type('Borges')
        cy.get('#email').should('be.visible').type('interdjonatas@gmail.com')
        cy.get('#open-text-area').should('be.visible').type('VERIFICANDO SE O TESTE ESTA DIGITANDO TUDO.', {delay: 0})
        cy.get('.button').click()
        cy.get('.success').should('be.visible')
    })
})