describe('Compra', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        
          
        cy.url().should("include", "/inventory.html")
        cy.get('.title').should("have.text", "products")
        
    })
    
     it('compra de um produto com sucesso', () => {

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

   
    cy.get('.shopping_cart_badge').should('contain', '1')

   
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.contains('Sauce Labs Backpack').should('be.visible')

   
    cy.get('[data-test="checkout"]').click()

    
    cy.get('[data-test="firstName"]').type('Teste')
    cy.get('[data-test="lastName"]').type('Teste')
    cy.get('[data-test="postalCode"]').type('00000')

    cy.get('[data-test="continue"]').click()

    
    cy.get('[data-test="finish"]').click()

   
    cy.contains('Thank you for your order!').should('be.visible')
  })
 
        
    })

