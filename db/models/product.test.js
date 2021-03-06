'use strict'

const db = require('APP/db')
const Product = require('./product')



const {expect} = require('chai')

describe('Product', function() {
  this.timeout(5000)
  before('wait for the db', () => db.didSync)

  let product;
  beforeEach(()=>
    product = Product.build(
      { title : 'A Product Title',
        description: 'This is a description',
        price: 1000,
        inventory: 5,
        categories: [ 'powerboat', 'pleasureboat']
    })
  )

  describe('two title validation: notNull, notEmpty', () => {
    it('does not create a product without a title', () => {
      product.title=null;
       return product.validate()
      .then((result) => {
        expect(result).to.be.an.instanceOf(Error);
        expect(result.message).to.contain('title cannot be null');
      })
    })

    it('does not create a product without an empty string as a title', () => {
      product.title='';
       return product.validate()
      .then((result) => {
        expect(result).to.be.an.instanceOf(Error);
        expect(result.message).to.contain('Validation error');
      })
    })

     it('does not create a product without an description', () => {
      product.description=null;
       return product.validate()
      .then((result) => {
        expect(result).to.be.an.instanceOf(Error);
        expect(result.message).to.contain('description cannot be null');
      })
    })





  })
})
