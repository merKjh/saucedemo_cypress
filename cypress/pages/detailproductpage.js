class detailProductPages {
    inventoryProduct = "//div[@class='inventory_item_name ']"
    detailProductName = '[data-test="inventory-item-name"]'
    addtoCartbtn = '[data-test="add-to-cart"]';
    cartbtn = '[data-test="shopping-cart-link"]'
    itemPrice = '[data-test="inventory-item-price"]'


    verifyTheDetailPage_backpack () {
        cy.get(this.detailProductName).should('have.text', 'Sauce Labs Backpack');
    }

    clickOrderinDetailPage () {
        cy.get(this.addtoCartbtn).click();
    }

    clickOrderinDetailPage () {
        cy.get(this.addtoCartbtn).click();
    }

    clickCartButton () {
        cy.get(this.cartbtn).click();
    }

}

export default new detailProductPages();