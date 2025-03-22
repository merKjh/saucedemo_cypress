import LoginPage from '../pages/loginpage';
import productPages from '../pages/productpages';
import detailProductPages from '../pages/detailproductpage';
import yourCartPage from '../pages/yourcartpage';
import informationPage from '../pages/informationPage';
import overviewPage from '../pages/overviewpage';
import completeOrderPage from '../pages/completeorderpage';
import allVariables from '../fixtures/allvariables.json';
import 'cypress-xpath';
import completeorderpage from '../pages/completeorderpage';

describe('Buy 1st Product - Backpack', () => {

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('/');
        cy.url().should('include', 'saucedemo');
        LoginPage.inputUsername(allVariables.valid_username);
        LoginPage.inputPassword(allVariables.valid_password);
        LoginPage.clickLoginButton();
    })

    // it('Verify Success Login with Valid Credentials', () => {
    //     productPages.verifyBurgerMenuIsDisplayed();
    // });

    // it('Buy the Sauce Lab Backpack ', () => {
    //     productPages.clickSpesificProduct_backpack();
    //     detailProductPages.verifyTheDetailPage_backpack();
    //     detailProductPages.clickOrderinDetailPage();
    // });

    // it('Verify the product in Your Cart Page ', () => {
    //     productPages.clickSpesificProduct_backpack();
    //     detailProductPages.verifyTheDetailPage_backpack();
    //     detailProductPages.clickOrderinDetailPage();
    //     detailProductPages.clickCartButton();
    //     yourCartPage.verifyCartPage_backpack();
    //     yourCartPage.verifyCartPage_backpackPrice();    
    // });

    // it('Fill out the Information Page ', () => {
    //     productPages.clickSpesificProduct_backpack();
    //     detailProductPages.verifyTheDetailPage_backpack();
    //     detailProductPages.clickOrderinDetailPage();
    //     detailProductPages.clickCartButton();
    //     yourCartPage.verifyCartPage_backpack();
    //     yourCartPage.verifyCartPage_backpackPrice();   
    //     yourCartPage.clickCheckOutButton();
    //     informationPage.fillOutTheFirstNameBuyer();   
    //     informationPage.fillOutTheLastNameBuyer();
    //     informationPage.fillOutPostalCodeBuyer();
    //     informationPage.clickContinuetbtn();
    // });

    it('Verify the Product in the Overview Page ', () => {
        productPages.clickSpesificProduct_backpack();
        detailProductPages.verifyTheDetailPage_backpack();
        detailProductPages.clickOrderinDetailPage();
        detailProductPages.clickCartButton();
        yourCartPage.verifyCartPage_backpack();
        yourCartPage.verifyCartPage_backpackPrice();   
        yourCartPage.clickCheckOutButton();
        informationPage.fillOutTheFirstNameBuyer();   
        informationPage.fillOutTheLastNameBuyer();
        informationPage.fillOutPostalCodeBuyer();
        informationPage.clickContinuetbtn();
        overviewPage.verifyOverviewProduct_backpack();
        overviewPage.verifyOverviewProduct_backpackPrice();
        overviewPage.clickFinishButton();

    });

    it('Verify Buyer Complete the Order - Backpack ', () => {
        productPages.clickSpesificProduct_backpack();
        detailProductPages.verifyTheDetailPage_backpack();
        detailProductPages.clickOrderinDetailPage();
        detailProductPages.clickCartButton();
        yourCartPage.verifyCartPage_backpack();
        yourCartPage.verifyCartPage_backpackPrice();   
        yourCartPage.clickCheckOutButton();
        informationPage.fillOutTheFirstNameBuyer();   
        informationPage.fillOutTheLastNameBuyer();
        informationPage.fillOutPostalCodeBuyer();
        informationPage.clickContinuetbtn();
        overviewPage.verifyOverviewProduct_backpack();
        overviewPage.verifyOverviewProduct_backpackPrice();
        overviewPage.clickFinishButton();
        completeOrderPage.verifyCompleteOrder();
        completeOrderPage.verifyBacktoHomebtn();

    });

});