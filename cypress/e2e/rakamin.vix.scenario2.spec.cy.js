import rakaminVixPage from '../page/rakamin.vix.page';

describe('Unauthenticated user checkout program', async () => {
    before(() => {
        rakaminVixPage.openRakaminPage();
        cy.wait(1000);
        rakaminVixPage.actionToVixProgramDetail(false);
    });

    it('should register vix program', () => {
        rakaminVixPage.actionRegisterUserUnauthenticated();
        rakaminVixPage.actionRegisterProgramUserAuthenticated();
        rakaminVixPage.actionVipAccess();
    });
});
