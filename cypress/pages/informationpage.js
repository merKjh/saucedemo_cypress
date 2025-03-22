import { faker } from '@faker-js/faker';

class informationPage {

    firstNameBuyer = '[data-test="firstName"]'
    lastNameBuyer = '[data-test="lastName"]'
    postalCodeBuyer = '[data-test="postalCode"]'
    continuebtn = '[data-test="continue"]'


    fillOutTheFirstNameBuyer () {
        const randomFirstName = faker.person.firstName();
        cy.get(this.firstNameBuyer).type(randomFirstName);
    }

    fillOutTheLastNameBuyer () {
        const randomLastName = faker.person.lastName();
        cy.get(this.lastNameBuyer).type(randomLastName);
    }

    fillOutPostalCodeBuyer () {
        const randomPostalCode = faker.location.zipCode();
        cy.get(this.postalCodeBuyer).type(randomPostalCode);
    }

    clickContinuetbtn () {
        cy.get(this.continuebtn).click();
    }
}

export default new informationPage();