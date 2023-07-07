//data 06/07/2023 as 19:09


describe('login ',()=>{
 
    it ('Cadastro email com sucesso',()=>{
cy.visit('/')
    .get('#top_header')
    cy.wait(5000)
cy.get('.form-control')
.type('brunoHolanda@teste.com')
cy.wait(5000)

cy.get('.clear .theme-btn-one.btn_md') //procura por clase
    .click()
    cy.wait(5000)

    cy.get('#swal2-title') //procura por id
      .should('be.visible')// ver se o mackup esta visivel
      .should('have.text','Success')
      cy.wait(5000)
      cy.get('#swal2-html-container') //procura por id

      .should('be.visible')// ver se o mackup esta visivel
      .should('have.text','Thank you for your Subscribtion')
      cy.wait(5000)


      
 })
 
 ///////////////////////////////////////////////////////////////////////
 it ('Cadastro email com sucesso apertando enter',()=>{
    cy.visit('/')
        .get('#top_header')
        cy.wait(5000)
    cy.get('.form-control')
    .type('brunoHolanda@teste.com{enter}')
    
    cy.wait(5000)
    cy.get('.clear .theme-btn-one.btn_md') //procura por clase
        
    cy.wait(5000)
    
        cy.get('#swal2-title') //procura por id
          .should('be.visible')// ver se o mackup esta visivel
          .should('have.text','Success')
          cy.wait(5000)
          cy.get('#swal2-html-container') //procura por id
          .should('be.visible')// ver se o mackup esta visivel
          
          .should('have.text','Thank you for your Subscribtion')
          cy.wait(5000)
    
    
          
     })
     ////////////////////////////////////////////////////////////////
     it ('Verificar fechamento',()=>{
        cy.visit('/')
            .get('#top_header')
            cy.wait(5000)
        cy.get('.form-control')
        .type('brunoHolanda@teste.com')
        
        cy.wait(5000)
        cy.get('.clear .theme-btn-one.btn_md') //procura por clase
            .click()
        
            cy.wait(5000)
        cy.get('.swal2-actions>.swal2-confirm') //procura por clase pai
        .click()
           cy.wait(5000)

            cy.get('#swal2-title')
            .should('not.exist')
              
         })
 


})