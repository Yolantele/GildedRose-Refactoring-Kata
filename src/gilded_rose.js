
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

const MAX = 50;
const MIN = 0;

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
  isWithinQualityRange(item){
    if (item.quality < MAX && item.quality > MIN) {
      return true;
    }
  }
  updateRegular(item){
    item.quality -= 1;
    item.sellIn -= 1;
  }
  updateBackPass(item) {
    item.sellIn -= 1;
    if (item.sellIn > 11) {item.quality += 1;}
    if (item.sellIn < 11 && item.sellIn >= 6 ) {item.quality += 2;}
    if (item.sellIn < 6) {item.quality += 3;}
    if (item.sellIn < 0) {item.quality = 0;}
  }
  updateBrie(item){
    item.quality += 1;
  }
  updatePostExpiry(item) {
    if (item.name !== sulfuras) {item.quality = 0;}
  }

  updateQuality() {
    var then = this;
    this.items.forEach(item => {
      if (then.isWithinQualityRange(item)) {
        if (then.isRegular(item.name)) {then.updateRegular(item);}
        if (item.name === backPass) {then.updateBackPass(item);}
        if (item.name === brie) {then.updateBrie(item);}
        if (item.sellIn < 0) {then.updatePostExpiry(item);}
      }
    })
    return this.items;
  }
}
