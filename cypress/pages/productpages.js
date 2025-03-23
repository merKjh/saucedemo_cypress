import { faker } from '@faker-js/faker';

class productPages {
    burgerMenu = 'button[id=react-burger-menu-btn]';
    inventoryProduct = "//div[@class='inventory_item_name ']"
    detailProductName = '[data-test="inventory-item-name"]'
    addtoCartbtn = '[data-test="add-to-cart"]';
    cartbtn = '[data-test="shopping-cart-link"]'
    itemPrice = '[data-test="inventory-item-price"]'
    checkOutbtn = '[data-test="checkout"]'
    firstNameBuyer = '[data-test="firstName"]'
    lastNameBuyer = '[data-test="lastName"]'

    verifyBurgerMenuIsDisplayed () {
        cy.get(this.burgerMenu).should('be.visible');
    }

    clickBurgerMenu () {
        cy.get(this.burgerMenu).click();
    }

    verifytitleInventory () {
        cy.xpath(this.inventoryProduct).should('be.visible');
    }

    verifyTotalProduct () {
        cy.xpath(this.inventoryProduct).its('length').then((count) => {
            cy.log(`Total produk di halaman: ${count}`);
        });
    }

    clickOrderSpesificProduct () {
        cy.xpath(this.inventoryProduct).its('length').then((count) => {
            cy.log(`Total produk di halaman: ${count}`);

            for (let i = 0; i < count; i++) {
                cy.xpath(this.inventoryProduct).click();
            }
        });              
    }

    clickSpesificProduct_backpack () {
        const targetProduct = "Sauce Labs Backpack";
        cy.xpath(this.inventoryProduct).each(($el) => {
            cy.wrap($el).invoke('text').then((text) => {
                if (text.trim() === targetProduct) {
                    cy.log(`Found product: ${text}`);
                    cy.wrap($el).click();
                }
            });
        });
    }

    clickSpesificProduct_fleeceJacket () {
        const targetProduct = "Sauce Labs Fleece Jacket";
        cy.xpath(this.inventoryProduct).each(($el) => {
            cy.wrap($el).invoke('text').then((text) => {
                if (text.trim() === targetProduct) {
                    cy.log(`Found product: ${text}`);
                    cy.wrap($el).click();
                }
            });
        });
    }

}

export default new productPages();