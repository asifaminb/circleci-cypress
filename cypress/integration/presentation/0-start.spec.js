describe('Visual regression tests', () => {
  it('Should match previous screenshot "about Page"', () => {
    cy.visit('/transport/registration/register/vehicle/_nocache');
    cy.matchImageSnapshot();
  });
});

