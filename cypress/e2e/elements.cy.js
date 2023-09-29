describe('Forms Page', () => {
    it('Forms page is displayed', () => {
      cy.visit('https://demoqa.com/');
      cy.get('#app > div > div > div.home-body > div > div:nth-child(1) > div > div.avatar.mx-auto.white > svg').click();
      cy.url().should('include', 'https://demoqa.com/elements'); 
      cy.get('#app > div > div > div.pattern-backgound.playgound-header > div')
      .should('exist')
      .should('contain', 'Elements'); 
    });
  
    it('Validate text elements', () => {
        cy.get('#item-0').click();
        cy.get('#userName').type('John Doe');
        cy.get('#userEmail').type('john.doe@gmail.com');
        cy.get('#currentAddress').type('208, ABC Villa, XYZ Road, NY 12334');
        cy.get('#permanentAddress').type('208, ABC Villa, XYZ Road, NY 12334');
        cy.get('#submit').click();
        cy.get('#output > div')
            .should('exist')
            .should('contain', 'John Doe'); 
      });
    
    
  
  });