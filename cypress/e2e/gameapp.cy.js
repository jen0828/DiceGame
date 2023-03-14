describe('game app', () => {
  it('UI tests', () => {
    cy.visit('http://localhost:3000/');

    // Confirm that the game title and instructions are displayed
    cy.findByRole('heading', { name: /roll the dice! 🎲/i });
    cy.contains(
      "Roll until all dice are the same. Click 'Start Game' button to start."
    );
    cy.get('.dice-container').children().should('have.length', 10);

    // Confirm that the initial state of the game is correct
    cy.findByRole('heading', { name: /number of rolls: 0/i });
    cy.findByRole('heading', { name: /time: 0 in sec/i });
    cy.findByRole('button', { name: /start game/i }).click();

    // Roll the dice and confirm that the number of rolls increases
    cy.findByRole('button', { name: /roll/i }).click();
    cy.findByRole('heading', { name: /number of rolls: 2/i });

    // Confirm that the color of dice face has changed when it is clicked
    cy.get('#root > main > div > div:nth-child(1)').should(
      'have.css',
      'background-color',
      'rgb(255, 255, 255)'
    );
    cy.get('#root > main > div > div:nth-child(1)').click();
    cy.get('#root > main > div > div:nth-child(1)').should(
      'have.css',
      'background-color',
      'rgb(255, 199, 125)'
    );
    cy.get('#root > main > div > div:nth-child(1)').click();
    cy.get('#root > main > div > div:nth-child(1)').should(
      'have.css',
      'background-color',
      'rgb(255, 255, 255)'
    );
  });
});
