// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
	it('visits the app root url', () => {
		cy.visit('/family-information')
		cy.contains('h2', 'Home Page')
	})
})
