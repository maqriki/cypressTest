class RakaminVixPage {
    openRakaminPage = async () => {
        cy.visit('https://web-staging.rakamin.com/');
        cy.wait(500);
        cy.viewport(window.screen.width, window.screen.height);
        cy.wait(1000);
    };

    doLogin = async (loginButton = 'baseLoginButton') => {
        if (loginButton == 'baseLoginButton') {
            cy.xpath(
                '//div[@class="sc-bCUJIE kQnlRf"]//button[@data-cy="login-page-button"]'
            ).click();
            cy.wait(1000);
        }

        if (loginButton == 'popUpLoginButton') {
            cy.xpath('//button[@data-cy="login-first-button"]').click();
            cy.wait(1000);
        }

        cy.xpath('//input[@data-cy="login-email-text-field"]').type(
            'merpatikamartujuh@gmail.com'
        );
        cy.xpath('//input[@data-cy="login-password-text-field"]').type(
            'supersekali123'
        );
        cy.xpath('//button[@data-cy="login-submit-button"]').click();
    };

    actionToVixProgramDetail = async (authenticated = true) => {
        cy.xpath(
            '//div[@class="sc-lbKGRG bnIWOz"]//div[@data-cy="explore-vix-navigation"]'
        ).click({ force: true });
        if (authenticated) {
            cy.xpath(
                '//button[@data-cy="confirmation-resume-filling-button"]'
            ).click();
        }
        cy.xpath('//div[@id="list-vix-vacancy"]//a[@class="vacancy-card-link"]')
            .first()
            .click({ force: true });
    };

    actionRegisterUserUnauthenticated = async () => {
        cy.xpath('//button[@data-cy="register-vix-button"]').click();
        this.doLogin('popUpLoginButton');
    };

    actionRegisterProgramUserAuthenticated = async () => {
        cy.xpath('//button[@data-cy="register-vix-button"]').click();
        cy.xpath('//input[@data-cy="full-name-text-field"]').clear();
        cy.xpath('//input[@data-cy="full-name-text-field"]').type(
            'Maq Riki Sandi'
        );
        cy.xpath('//input[@data-cy="phone-number-text-field"]').clear();
        cy.xpath('//input[@data-cy="phone-number-text-field"]').type(
            '62777788888'
        );
        cy.scrollTo('bottom');
        cy.xpath('//img[@data-cy="vix-info-source-option-6"]').click();
        cy.xpath('//img[@data-cy="agreement-checkbox"]').click();
        cy.xpath('//button[@data-cy="vix-form-submit-button"]').click();
        cy.xpath('//button[@data-cy="button-confirm"]').click();
        cy.wait(1000);
    };

    actionVipAccess = () => {
        cy.xpath('//img[@data-cy="basic-access-checkbox"]').click();
        cy.xpath('//img[@data-cy="vip-access-checkbox"]').click();

        // Di comment karena akan membatasi program User saat klik continue
        // cy.xpath('//button[@data-cy="continue-to-payment-button"]').click();
        // cy.url().should('include', '/windows/new');
    };
}

export default new RakaminVixPage();
