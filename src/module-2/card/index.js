export default class Card {
  element;

  constructor ({
    id = '',
    images = [],
    title = '',
    rating = 0,
    price = 0,
    category = '',
    brand = ''
  } = {}) {
    this.id = id;
    this.images = images;
    this.title = title;
    this.rating = rating;
    this.price = price;
    this.category = category;
    this.brand = brand;

    this.render();
  }

  getCardTemplate () {
    return `
  <div class="card">
    <div class="card__photo">
    <img class=card__image style="background-image: url(${this.images[0]});">
  </div>
  <div class="card__spacer"></div>
  <div class="card__props">
    <div class="card__rating">${this.rating}<i class="bi bi-star"></i></div>
    <div class="card__spacer"></div>
    <div class="card__price">399</div>
  </div>
  <div class="card__text">
    <span class="card__title">${this.brand}</span>
    <span class="card__subtitle">${this.title}</span>
  </div>
  <div class="card__footer">
    <button type="button" class="card__button wishlist"> <i class="bi bi-heart card__icons"></i> Wishlist</button>
    <button type="button" class="card__button cart"> <i class="bi bi-bag-plus card__icons"></i> Add to card</button>
  </div>
</div>

    `
  }

  render () {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.getCardTemplate();
    this.element = wrapper.firstElementChild;
  }

  destroy() {
    if (this.element) {
      this.element.remove();
    }
    this.element = null;
  }
}
