describe('game app', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');

    cy.findByRole('heading', { name: /roll the dice! 🎲/i });
    cy.contains(
      "Roll until all dice are the same. Click 'Start Game' button to start."
    );
    cy.findByRole('heading', { name: /number of rolls: 0/i });
    cy.findByRole('heading', { name: /time: 0 in sec/i });
    cy.findByRole('button', { name: /start game/i }).click();

    cy.findByRole('button', { name: /roll/i }).click();
  });
});
