describe('My First Test', () => {
    it('Visits the Shopee Page', () => {
        cy.visit('https://cms.demo.katalon.com/');
        cy.get("a[href='https://cms.demo.katalon.com/my-account/']").click();
        cy.get('#username').type('customer');
        cy.get('#password').type('crz7mrb.KNG3yxv1fbn');
        cy.get("button[value='Log in']").click();
    });

});
