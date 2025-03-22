import { faker } from '@faker-js/faker';

class overviewPage {

    inventoryProduct = "//div[@class='inventory_item_name ']"
    detailProductName = '[data-test="inventory-item-name"]'
    itemPrice = '[data-test="inventory-item-price"]'
    finishbtn = '[data-test="finish"]'


    verifyOverviewProduct_backpack () {
        cy.get(this.detailProductName).should('have.text', 'Sauce Labs Backpack');
    }

    verifyOverviewProduct_backpackPrice () {
        cy.get(this.itemPrice).should('have.text', '$29.99');
    }

    clickFinishButton () {
        cy.get(this.finishbtn).click();
    }

}

export default new overviewPage();