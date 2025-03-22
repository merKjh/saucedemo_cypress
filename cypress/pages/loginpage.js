class LoginPage {
    username = 'input[id=user-name]';
    password = 'input[id=password]';
    btnLogin = 'input[id=login-button]';
    msgError = 'h3[data-test=error]';
    loginPageUrl = 'https://www.saucedemo.com/'

    inputUsername (username) {
        cy.get(this.username).type(username);
    }

    inputPassword (password) {
        cy.get(this.password).type(password);
    }

    clickLoginButton () {
        cy.get(this.btnLogin).click();
    }
}

export default new LoginPage();