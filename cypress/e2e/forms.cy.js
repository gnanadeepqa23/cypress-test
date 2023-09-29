describe('Forms Page', () => {
  it('Forms page is displayed', () => {
    cy.visit('https://demoqa.com/')
    cy.get('#app > div > div > div.home-body > div > div:nth-child(2) > div > div.avatar.mx-auto.white > svg').click();
    cy.url().should('include', 'https://demoqa.com/forms'); 
    cy.get('#app > div > div > div.pattern-backgound.playgound-header > div')
    .should('exist') 
    .should('contain', 'Forms'); 
  });

  it('Validate form elements', () => {
    cy.get('#item-0 > span').click();
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#userEmail').type('john.doe@gmail.com');
    cy.get('#userNumber').type('1234567890');
    cy.get('#subjectsContainer > div').type('English');
    cy.get('#currentAddress').type('208, ABC Villa, XYZ Road, NY 12334');
    cy.get('#hobbiesWrapper > div.col-md-9.col-sm-12 > div:nth-child(1) > label').click();
    cy.get('#genterWrapper > div.col-md-9.col-sm-12 > div:nth-child(1) > label').click();
    cy.get('#state > div').select('NCR');
    cy.get('#city > div > div.css-1hwfws3 > div.css-1wa3eu0-placeholder').select('Gurgaon');
    cy.get('#submit').click();
    cy.get('#closeLargeModal').should('exist');
    cy.get('#closeLargeModal').click();
  });


});