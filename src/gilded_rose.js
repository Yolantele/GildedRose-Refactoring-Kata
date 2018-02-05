
class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const backPass = 'Backstage passes to a TAFKAL80ETC concert';
const sulfuras = 'Sulfuras, Hand of Ragnaros';
const brie = 'Aged Brie';

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  // find all the aged brie function

  isRegular(name) {
    switch (name) {
      case backPass:
      case brie:
      case sulfuras:
        return false;
        break;
      default:
        return true;
    }
  }

  updateQuality() {
    var  that = this
    for (var i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      if (item.quality < 50 && item.quality > 0) {
        // if(this.isRegular(item.name)){
        if(this.isRegular(item.name)) {
          item.quality -= 1;
          item.sellIn -= 1;
        }
        if (item.name === backPass && item.sellIn < 11) {
          item.quality += 1;
          item.sellIn -= 1;
        }
        if (item.name === backPass && item.sellIn < 6) {
          item.quality += 1;
        }
        if (item.name === sulfuras) {
          item.sellIn -= 1;
        }
        if (item.name === backPass) {
          item.quality += 1;
        }
        if (item.sellIn < 0) {
          if (item.name === brie) {
            item.quality += 1;
          }
          if (item.name !== sulfuras) {
            item.quality = 0;
          }
        }
      }
      return this.items;
    }
  }
}
