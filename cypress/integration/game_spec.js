describe('Tic tak toe game', () => {

    beforeEach(() => {
        cy.visit('https://rolan-tic-tac-toe.herokuapp.com')
    });

    it('should have winner', () => {
        cy.get('button[index="4"]').click();
        cy.get('button[index="1"]').click();
        cy.get('button[index="6"]').click();
        cy.get('button[index="2"]').click();
        cy.get('button[index="0"]').click();
        cy.get('button[index="8"]').click();
        cy.get('button[index="3"]').click();

        cy.get('h6').should('have.text', 'Winner: X');
    })
});