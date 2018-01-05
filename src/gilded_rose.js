
class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]) {
    this.items = items;
  }
  // find all the aged brie function

  updateQuality() {
    for (var i = 0; i < this.items.length; i++){
      const item = this.items[i];
      const backPass = 'Backstage passes to a TAFKAL80ETC concert';
      const sulfuras = 'Sulfuras, Hand of Ragnaros';

      // decrease Q when :
      if (item.name !== 'Aged Brie' && item.name !== backPass){
        if (item.quality > 0){
          if (item.name !== sulfuras ){
            item.quality -= 1;
          }
        }
      } else {
        if (item.quality < 50){
          item.quality += 1;
          if (item.name === backPass){
            if (item.sellIn < 11){
              if (item.quality < 50){
                item.quality += 1;
              }
            }
            if (item.sellIn < 6  ) {
              if (item.quality < 50){
                item.quality += 1;
              }
            }
          }
        }
      }
      // stay the same Q
      if (item.name !== sulfuras ){
        item.sellIn -= 1;
      }
      if (item.sellIn < 0){
        if (item.name !== 'Aged Brie'){
          if (item.name !== backPass){
            if (item.quality > 0){
              if (item.name !== sulfuras ){
                item.quality -= 1;
              }
            }
          } else {
            item.quality = 0;
          }
        } else {
          if (item.quality < 50){
            item.quality += 1;
          }
        }
      }
    }
    return this.items;
  }
}
