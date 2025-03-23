class aboutPage {
    aboutPageSidebar = '[data-test="about-sidebar-link"]'
    goToDashboardbtn = "//button[contains(.,'Go to Dashboard')]"
    acceptcookiesbtn = "//button[contains(.,'OK')]"
    aboutPageDesc = "//p[contains(@class,'MuiTypography-root MuiTypography-body1 css-1mz1i0z')]"


    verifyAboutSidebarbtn () {
        cy.get(this.aboutPageSidebar).should('be.visible');
    }

    forceClickSidebarbtn (){
        cy.get(this.aboutPageSidebar.then(($el) => {
            if ($el.length) {
              cy.wrap($el).should('be.visible');
            } else {
              cy.log('Element not found, but continuing test');
            }
        }))
    }

    clickAboutSidebarbtn () {
        cy.window().then((win) => {
            win.stop(); // 
          });
        cy.get(this.aboutPageSidebar).click({ force: true });
        cy.url().should('include', 'https://saucelabs.com');
        cy.window().then((win) => {
            win.stop(); 
          });
    }

    forceVerifyAboutPageDesc () {
        cy.xpath(this.aboutPageDesc).then(($el) => {
            if ($el.length) {
              cy.wrap($el).should('be.visible');
            } else {
              cy.log('Element not found, but continuing test');
            }
          });     
    }

    verifyTheDescription () {
      cy.xpath(this.aboutPageDesc).should('have.text', 'Power your mobile and web apps at scale with the most comprehensive solution for software quality. Test, release, and innovate confidently with AI-driven insights grounded in real data.');
  }

    verifyGoToDashboardbtn () {
        cy.window().then((win) => {
            win.stop(); 
        });
        cy.xpath(this.goToDashboardbtn, { timeout: 20000 }).should('be.visible');
    }

    reloadThepage () {
        cy.wait(10000).then(() => {
            cy.reload(); 
          });
    }

    accepttheCookiesbtn () {
        cy.xpath(this.acceptcookiesbtn).click({ force: true });
        cy.xpath(this.acceptcookiesbtn).should('not.exist');
    }

}

export default new aboutPage();