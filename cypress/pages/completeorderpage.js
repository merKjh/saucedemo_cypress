class completeOrderPage {

    compeleteOrderTitle = '[data-test="complete-header"]'
    completeOrderDesc = '[data-test="complete-text"]'
    backToHomebtn = '[data-test="back-to-products"]'

    verifyCompleteOrder () {
        cy.get(this.compeleteOrderTitle).should('have.text', 'Thank you for your order!');
        cy.get(this.completeOrderDesc).should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    }

    verifyBacktoHomebtn () {
        cy.get(this.backToHomebtn).should('be.visible');
    }
    
}

export default new completeOrderPage();