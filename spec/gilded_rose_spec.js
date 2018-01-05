describe('Gilded Rose', () => {
  describe('Item', () => {
    describe('#constructor', () => {
      const item = new Item ('name', 10, 50);
      it('sets the parameters name, sellIn and quality upon initalization', () => {
        expect(item.name).toEqual('name');
        expect(item.sellIn).toEqual(10);
        expect(item.quality).toEqual(50);
      });
    });
  });

  describe('Shop', () => {
    describe('#constructor', () => {
      it('sets the empty items array uppon initialization', () => {
        const shop = new Shop([]);
        expect(shop.items).toEqual([]);
      });
    });

    describe('#updateQuality for ', () => {
      describe('Q decreasing: ', () => {
        it('regular list item', () => {
          const gildedRose = new Shop([new Item('foo', 10, 5)]);
          const items = gildedRose.updateQuality();
          expect(items[0].quality).toEqual(4);
        });
      });

      describe('Q increasing under conditions: ', () => {
        it('brie quality increase to the maximum', () => {
          const gildedRose = new Shop([new Item('brie', 10, 5), new Item('brie', 10, 0)]);
          const items = gildedRose.updateQuality();
          expect(items[0].quality).toEqual(4);
          expect(items[1].quality).toEqual(0);
        });

        it('backstage 10 days left quality increase x2 ', () => {
          const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 5)]);
          const items = gildedRose.updateQuality();
          expect(items[0].quality).toEqual(7);
        });
        it('backstage 5 days left quality increase x3', () => {
          const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 5)]);
          const items = gildedRose.updateQuality();
          expect(items[0].quality).toEqual(8);
        });
        it('backstage after sell in quality drops to 0 ', () => {
          const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 5)]);
          const items = gildedRose.updateQuality();
          expect(items[0].quality).toEqual(0);
        });
      });

      describe('Q stays the same', () => {
        it('Sulfuras keeps the quality regardless of sell in date', () => {
          const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', -5, 5)]);
          const items = gildedRose.updateQuality();
          expect(items[0].quality).toEqual(5);
        });
      });
      describe('is regular returns correct boolean', () => {
        it('returns true for normal items, and false for special condition items', () => {
          const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', -5, 5), new Item('Backstage passes to a TAFKAL80ETC concert', 0, 5), new Item('foo', 10, 5) ] );
          expect(gildedRose.isRegular('Sulfuras, Hand of Ragnaros')).toEqual(false)
        });
      });
    });
  });
});
