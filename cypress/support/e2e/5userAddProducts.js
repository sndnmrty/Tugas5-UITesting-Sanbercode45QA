describe('User menambahkan produk baru', () => {
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
    it('User menambahkan data produk baru dengan mengisikan kolom nama,'+
    '   deskripsi, harga beli, harga jual, stok dengan data yang benar dan memilih kategori', function(){
        cy.get('[href="/products"] > .css-ewi1jp').click()
        cy.url().should('include','/products')
        cy.get('.css-1piskbq').click()        
        cy.url().should('include','/create')
        cy.get('#nama')
            .type('Handphone Nokia C101')
            .should('have.value','Handphone Nokia C101')
        cy.get('#deskripsi')
            .type('Handphone dengan tipe tombol 3x4, warna hitam dan merah')
            .should('have.value','Handphone dengan tipe tombol 3x4, warna hitam dan merah')
        cy.get('.css-1t33j5j > :nth-child(4)')
            .type('800000')
        cy.get('.css-1t33j5j > :nth-child(5)')
            .type('850000')
        cy.get('#stok')
            .type(4)
        cy.get('#kategori').click()
        cy.get('#chakra-modal--header-25')
            .should('have.text','kategori')
        cy.get('.css-u3dlpe').contains('barang elektronik')
            .click()
        cy.get('.chakra-button').click()
        cy.get('.css-njbp03 > #toast-1-title').should('have.text','success')
        cy.url().should('include','/products')
        cy.get('.css-1t33j5j')
            .should('contain','Handphone Nokia C101')
    })
    it('User menambahkan data produk baru dengan mengisikan kolom nama,'+
    '   deskripsi, harga beli, harga jual, stok dengan data yang benar dan tidak memilih kategori', function(){
        cy.get('[href="/products"] > .css-ewi1jp').click()
        cy.url().should('include','/products')
        cy.get('.css-1piskbq').click()        
        cy.url().should('include','/create')
        cy.get('#nama')
            .type('Android Asus Zenfone Max M2')
            .should('have.value','Android Asus Zenfone Max M2')
        cy.get('#deskripsi')
            .type('Handphone android keluaran ASUS, warna hitam/biru')
            .should('have.value','Handphone android keluaran ASUS, warna hitam/biru')
        cy.get('.css-1t33j5j > :nth-child(4)')
            .type('2800000')
        cy.get('.css-1t33j5j > :nth-child(5)')
            .type('3200000')
        cy.get('#stok')
            .type(10)
        cy.get('.chakra-button').click()
        cy.get('.chakra-alert').should('have.text','"category_id" is required')
        cy.url().should('include','/create')
    })
})