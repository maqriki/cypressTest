import rakaminVixPage from '../page/rakamin.vix.page';

describe('Authentication user checkout', async () => {
    before(() => {
        rakaminVixPage.openRakaminPage();
        cy.wait(1000);
        rakaminVixPage.doLogin('baseLoginButton');
        rakaminVixPage.actionToVixProgramDetail();
    });

    it('should register vix program', () => {
        rakaminVixPage.actionRegisterProgramUserAuthenticated();
        rakaminVixPage.actionVipAccess();
    });
});
