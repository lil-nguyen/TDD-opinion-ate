describe('Listing restaurants', () => {
  it('shows restaurants from the server', () => {
    const sushiPlace = 'Sushi Place';
    const pizzaPlace = 'Pizza Place';

    // TODO: these are stub calls. Need to look into how stubbing a backend request works
    cy.server({force404: true});

    // TODO: how can I mirror this in react native ecosystem?
    cy.route({
      method: 'GET',
      url: 'https://outside-in-dev-api.herokuapp.com/V0uYwtIrBoALzWw2sThniEUD2f0NagpT/restaurants',
      response: [
        {id: 1, name: sushiPlace},
        {id: 2, name: pizzaPlace},
      ],
    });

    cy.visit('/');
    cy.contains(sushiPlace);
    cy.contains(pizzaPlace);
  });
});
