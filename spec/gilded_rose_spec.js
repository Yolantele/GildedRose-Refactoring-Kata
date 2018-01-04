describe("Gilded Rose", function() {

  var item;
  var shop;

  describe('Item', function(){

    beforeEach(function(){
      item = new Item('name', 0, 0);
    });

    describe('#constructor', function(){
      it('should set the parameters name, sellIn and quality upon initalization', function() {
        expect(item.name).toEqual('name');
        expect(item.sellIn).toEqual(0);
        expect(item.quality).toEqual(0);
      });
    });

  });
});
