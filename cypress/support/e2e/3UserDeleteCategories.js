describe('User menghapus data kategori', () => {
    beforeEach(()=>{
        cy.visit("https://kasirdemo.belajarqa.com")
        cy.get('#email')
            .type('jaya45@mail.com')
            .should('have.value','jaya45@mail.com')
        cy.get('#password')
            .type('12345')
            .should('have.value','12345')
        cy.get('.chakra-button').click()
    });
    it('User menghapus data kategori yang tersimpan', function(){
        cy.get('[href="/categories"] > .css-ewi1jp').click()
        cy.url().should('include','/categories')
        cy.get('.css-xl71ch').get('button[type="button"]').eq(2).click()
        cy.contains('button','hapus').click()
        cy.contains('button','Delete').click()        
        cy.get('.css-njbp03 > #toast-1-title').should('have.text','success')
    })
})