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

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        cy.get('#firstName').should('be.visible').type('Djonatas')
        cy.get('#lastName').should('be.visible').type('Borges')
        cy.get('#email').should('be.visible').type('interdjonatas$gmail.com')
        cy.get('#open-text-area').should('be.visible').type('VERIFICANDO SE O TESTE ESTA DIGITANDO TUDO.', {delay: 0})
        cy.get('.button').click()
        cy.get('.error').should('be.visible')
    })
    it('campo telefone permanece vazio quando preenchido com valor não numérico', function() {   
        cy.get('#phone').type('asdf').should('have.value', '')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
        cy.get('#firstName').should('be.visible').type('Djonatas', {delay: 0})
        cy.get('#lastName').should('be.visible').type('Borges', {delay: 0})
        cy.get('#email').should('be.visible').type('interdjonatas$gmail.com', {delay: 0})
        cy.get('#open-text-area').should('be.visible').type('VERIFICANDO SE O TESTE ESTA DIGITANDO TUDO.', {delay: 0})
        cy.get('#phone-checkbox').check()
        cy.get('.button').click()
        cy.get('.error').should('be.visible')
    })
    it('preenche e limpa os campos nome, sobrenome, email e telefone', function(){
        cy.get('#firstName').should('be.visible').type('Djonatas', {delay: 0}).clear()
        .should('have.value', '').type('Djonatas', {delay: 0}).should('have.value', 'Djonatas')
        cy.get('#lastName').should('be.visible').type('Borges', {delay: 0})
        cy.get('#email').should('be.visible').type('interdjonatas$gmail.com', {delay: 0})
        cy.get('#open-text-area').should('be.visible').type('VERIFICANDO SE O TESTE ESTA DIGITANDO TUDO.', {delay: 0})
        cy.get('#phone-checkbox').check()
        cy.get('.button').click()
        cy.get('.error').should('be.visible')
    })
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function(){
        cy.get('.button').click()
        cy.get('.error').should('be.visible')
    })
    it('envia o formuário com sucesso usando um comando customizado', function(){
        cy.fillMandatoryFieldsAndSubmit()
    })
})