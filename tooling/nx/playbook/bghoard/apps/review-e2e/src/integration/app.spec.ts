describe('review', () => {
  beforeEach(() => cy.visit('/'));

  it('should display the title', () => {
    cy.contains('Board Game Hoard: Review');
  });
});
