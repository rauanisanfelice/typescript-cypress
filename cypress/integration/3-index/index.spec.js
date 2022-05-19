/// <reference types="cypress" />

describe('example validation form', () => {

    const newName = 'Rick Sanchez';
    beforeEach(() => {
        cy.visit('/');
    })

    it('form submit ok', () => {
        cy.get('input[name="name"]').type(newName);
        cy.get('button[name="btn-submit"]').click();

        cy.on('window:alert',(t)=>{
            expect(t).to.contains('Ok!');
        });
        cy.screenshot();
    });

    it('clean form', () => {
        cy.get('input[name="name"]').type(newName);
        cy.get('button[name="btn-clean"]').click();
        cy.get('input[name="name"]').should('have.text', '');
        cy.screenshot();
    });

    it('form submit error', () => {
        cy.get('button[name="btn-submit"]').click();
        cy.get('#error-name').should('contain','Campo obrigatório');
        cy.screenshot();
    });

})
