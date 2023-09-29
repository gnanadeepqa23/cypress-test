describe('Forms Page', () => {
    it('Forms page is displayed', () => {
      cy.visit('https://demoqa.com/')
      cy.get('#app > div > div > div.home-body > div > div:nth-child(3) > div > div.avatar.mx-auto.white > svg').click();
      cy.url().should('include', 'https://demoqa.com/forms'); 
      cy.get('#app > div > div > div.pattern-backgound.playgound-header > div')
      .should('exist') 
      .should('contain', 'Alerts, Frame & Windows'); 
    });
  
    it('Validate the alert popup', () => {
        cy.get('#item-1').click();
        cy.window().then((win) => {
            cy.stub(win, 'alert').as('alertStub');
          });
          cy.get('#alertButton').click();
          cy.get('@alertStub').should('be.calledOnce');
          cy.on('window:alert', (str) => {
            expect(str).to.equal('You clicked a button');
          });
      });


  it('Validate the alert popup which open after 5 sces', () => {
        cy.get('#item-1').click();
        cy.window().then((win) => {
            cy.stub(win, 'alert').as('alertStub');
          });
          cy.get('#timerAlertButton').click();
          cy.wait(5000);
          cy.get('@alertStub').should('be.calledOnce');
          cy.on('window:alert', (str) => {
            expect(str).to.equal('This alert appeared after 5 seconds');
          });
      });

      
  
  });