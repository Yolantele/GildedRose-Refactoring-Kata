
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
  updateRegular(item){
    item.quality -= 1;
    item.sellIn -= 1;
  }

  updateBackPass(item) {
    item.sellIn -= 1;
    if (item.sellIn > 11) {
      item.quality += 1;
    } if (item.sellIn < 11 && item.sellIn >= 6 ) {
      item.quality += 2;
    } if (item.sellIn < 6) {
      item.quality += 3;
    } if (item.sellIn < 0) {
      item.quality = 0;
    }
  }

  updateQuality() {
    var that = this;
    this.items.forEach(item => {
      if (item.quality < 50 && item.quality > 0) {
        if (that.isRegular(item.name)) {
          that.updateRegular(item);
        }
        if (item.name === backPass) {
          that.updateBackPass(item);
        }
        if (item.sellIn < 0) {
          if (item.name === brie) {
            item.quality += 1;
          } if (item.name !== sulfuras) {
            item.quality = 0;
          }
        }
      }
    })
    return this.items;
  }
}
