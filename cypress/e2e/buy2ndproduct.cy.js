import LoginPage from '../pages/loginpage';
import productPages from '../pages/productpages';
import detailProductPages from '../pages/detailproductpage';
import yourCartPage from '../pages/yourcartpage';
import informationPage from '../pages/informationPage';
import overviewPage from '../pages/overviewpage';
import completeOrderPage from '../pages/completeorderpage';
import allVariables from '../fixtures/allvariables.json';
import 'cypress-xpath';

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

    it('Verify Success Login with Valid Credentials', () => {
        productPages.verifyBurgerMenuIsDisplayed();
    });

    it('Buy the Sauce Lab Backpack ', () => {
        productPages.clickSpesificProduct_fleeceJacket();
        detailProductPages.verifyTheDetailPage_fleeceJacket();
        detailProductPages.clickOrderinDetailPage();
    });

    it('Verify the product in Your Cart Page ', () => {
        productPages.clickSpesificProduct_fleeceJacket();
        detailProductPages.verifyTheDetailPage_fleeceJacket();
        detailProductPages.clickOrderinDetailPage();
        detailProductPages.clickCartButton();
        yourCartPage.verifyCartPage_fleeceJacket();
        yourCartPage.verifyCartPage_fleeceJacketPrice();    
    });

    it('Fill out the Information Page ', () => {
        productPages.clickSpesificProduct_fleeceJacket();
        detailProductPages.verifyTheDetailPage_fleeceJacket();
        detailProductPages.clickOrderinDetailPage();
        detailProductPages.clickCartButton();
        yourCartPage.verifyCartPage_fleeceJacket();
        yourCartPage.verifyCartPage_fleeceJacketPrice();   
        yourCartPage.clickCheckOutButton();
        informationPage.fillOutTheFirstNameBuyer();   
        informationPage.fillOutTheLastNameBuyer();
        informationPage.fillOutPostalCodeBuyer();
        informationPage.clickContinuetbtn();
    });

    it('Verify the Product in the Overview Page ', () => {
        productPages.clickSpesificProduct_fleeceJacket();
        detailProductPages.verifyTheDetailPage_fleeceJacket();
        detailProductPages.clickOrderinDetailPage();
        detailProductPages.clickCartButton();
        yourCartPage.verifyCartPage_fleeceJacket();
        yourCartPage.verifyCartPage_fleeceJacketPrice();   
        yourCartPage.clickCheckOutButton();
        informationPage.fillOutTheFirstNameBuyer();   
        informationPage.fillOutTheLastNameBuyer();
        informationPage.fillOutPostalCodeBuyer();
        informationPage.clickContinuetbtn();
        overviewPage.verifyOverviewProduct_fleeceJacket();
        overviewPage.verifyOverviewProduct_fleeceJacketPrice();
        overviewPage.clickFinishButton();

    });

    it('Verify Buyer Complete the Order - Backpack ', () => {
        productPages.clickSpesificProduct_fleeceJacket();
        detailProductPages.verifyTheDetailPage_fleeceJacket();
        detailProductPages.clickOrderinDetailPage();
        detailProductPages.clickCartButton();
        yourCartPage.verifyCartPage_fleeceJacket();
        yourCartPage.verifyCartPage_fleeceJacketPrice();   
        yourCartPage.clickCheckOutButton();
        informationPage.fillOutTheFirstNameBuyer();   
        informationPage.fillOutTheLastNameBuyer();
        informationPage.fillOutPostalCodeBuyer();
        informationPage.clickContinuetbtn();
        overviewPage.verifyOverviewProduct_fleeceJacket();
        overviewPage.verifyOverviewProduct_fleeceJacketPrice();
        overviewPage.clickFinishButton();
        completeOrderPage.verifyCompleteOrder();
        completeOrderPage.verifyBacktoHomebtn();

    });

});