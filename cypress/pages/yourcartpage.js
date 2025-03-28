class yourCartPage {

    inventoryProduct = "//div[@class='inventory_item_name ']"
    detailProductName = '[data-test="inventory-item-name"]'
    itemPrice = '[data-test="inventory-item-price"]'
    checkOutbtn = '[data-test="checkout"]'


    verifyCartPage_backpack () {
        cy.get(this.detailProductName).should('have.text', 'Sauce Labs Backpack');
    }

    verifyCartPage_fleeceJacket () {
        cy.get(this.detailProductName).should('have.text', 'Sauce Labs Fleece Jacket');
    }

    verifyCartPage_backpackPrice () {
        cy.get(this.itemPrice).should('have.text', '$29.99');
    }

    verifyCartPage_fleeceJacketPrice () {
        cy.get(this.itemPrice).should('have.text', '$49.99');
    }

    clickCheckOutButton () {
        cy.get(this.checkOutbtn).click();
    }

}

export default new yourCartPage();