
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
    for (var i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      if (item.quality < 50 && item.quality > 0) {
        if (item.name !== brie && item.name !== backPass) {
            if (item.name !== sulfuras) {
              item.quality -= 1;
            }
        } else {
          item.quality += 1;
          if (item.name === backPass) {
            if (item.sellIn < 11) {
              if (item.quality < 50 && item.quality > 0) {
                item.quality += 1;
              }
            }
            if (item.sellIn < 6 && item.quality < 50) {
                item.quality += 1;
            }
          }
        }
        if (item.name !== sulfuras) {
          item.sellIn -= 1;
        }
        if (item.sellIn < 0) {
          // if(this.isRegular(item.name) ){
          if (item.name !== brie ) {
            if (item.name !== backPass) {
                if (item.name !== sulfuras) {
                  item.quality -= 1;
                }
            } else {
              item.quality = 0;
            }
          } else {
            item.quality += 1;
          }
        }
      }
      return this.items;
    }

  }
}
