describe('User login', () => {
    beforeEach(()=>{
        cy.visit("https://kasirdemo.belajarqa.com")
    });
    it('User menginputkan email dan password yang benar',function(){
        cy.get('#email')
            .type('jaya45@mail.com')
            .should('have.value','jaya45@mail.com')
        cy.get('#password')
            .type('12345')
            .should('have.value','12345')
        cy.get('.chakra-button').click()
        cy.url().should('include','/dashboard')
    });
    it('User menginputkan email dan password yang salah',function(){
        cy.get('#email')
            .type('jaya45@mail.com')
            .should('have.value','jaya45@mail.com')
        cy.get('#password')
            .type('123')
        cy.get('.chakra-button').click()
        cy.get('.chakra-alert').should('have.text','Kredensial yang Anda berikan salah')
        cy.url().should('include','/login')
    });
})