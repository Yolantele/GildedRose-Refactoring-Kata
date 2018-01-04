describe("Gilded Rose", function() {

  var item;
  var shop;

  describe('Item', function(){

    beforeEach(function(){
      item = new Item('name', 10, 50);
    });

    describe('#constructor', function(){
      it('sets the parameters name, sellIn and quality upon initalization', function() {
        expect(item.name).toEqual('name');
        expect(item.sellIn).toEqual(10);
        expect(item.quality).toEqual(50);
      });
    });
  });

  describe('Shop', function(){

    beforeEach(function(){
      shop = new Shop([]);
    });

    describe('#constructor', function(){
      it('sets the empty items array uppon initialization', function() {
        expect(shop.items).toEqual([]);
      });
    });

    describe('#updateQuantity', function(){
      it('', function() {
        expect().toEqual();
      });
    });
  });


});

//_____ templates _____


// describe('', function(){
//   it('', function() {
//     expect().toEqual();
//   });
// });
