import LoginPage from '../pages/loginpage';
import aboutPage from '../pages/aboutpage';
import productPages from '../pages/productpages';
import allVariables from '../fixtures/allvariables.json';
import 'cypress-xpath';

describe('Navigate to About Page', () => {

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('/').then(() => {
            cy.window().then((win) => {
              win.stop(); // Stops the page from loading further
            });
          });
        cy.origin('https://saucelabs.com', () => {
            cy.on('uncaught:exception', (err) => {
              // Suppress expected cross-origin errors
              return false; 
            });
          });
        LoginPage.inputUsername(allVariables.valid_username);
        LoginPage.inputPassword(allVariables.valid_password);
        LoginPage.clickLoginButton();
    })

    it('Verify Success Login with Valid Credentials', () => {
        productPages.verifyBurgerMenuIsDisplayed();
    });

    it('Verify About page', () => {
        productPages.clickBurgerMenu();
        aboutPage.verifyAboutSidebarbtn();
        aboutPage.clickAboutSidebarbtn();
        aboutPage.forceVerifyAboutPageDesc();
        aboutPage.verifyTheDescription();

    });    

});