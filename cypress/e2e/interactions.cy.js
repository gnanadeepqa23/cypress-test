describe('Forms Page', () => {
    it('Forms page is displayed', () => {
      cy.visit('https://demoqa.com/')
      cy.get('#app > div > div > div.home-body > div > div:nth-child(5) > div > div.avatar.mx-auto.white > svg').click();
      cy.url().should('include', 'https://demoqa.com/interaction'); 
      cy.get('#app > div > div > div.pattern-backgound.playgound-header > div')
      .should('exist') 
      .should('contain', 'Interactions'); 
    });

    it('Perform drag operation', () => {
        cy.get('#item-4').click();
        cy.get('#dragBox').trigger('mousedown', { which: 1 });

        const dropX = 600;
        const dropY = 300;

        cy.get('body').trigger('mousemove', { clientX: dropX, clientY: dropY }).trigger('mouseup', { force: true });

      });
  
    
      it('Perform drag and drop operation', () => {
        cy.get('#item-3').click();
        cy.get('#draggable').trigger('mousedown', { which: 1 });

        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true });
        cy.get('#droppable')
        .should('exist') 
        .should('contain', 'Dropped!'); 

      });
  
  });