import { getGreeting } from '../support/app.po';

describe('web', () => {
  beforeEach(() => cy.visit('/articles/lorem-ipsum'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('What is lorem ipsum?');

    cy.get('iframe').should('be.visible');
  });
});
