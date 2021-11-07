export default class CardsList {
  constructor ({data = [], Component = {}}) {
    this.data = data;
    this.Component = Component;

    this.render();
    this.update(this.data);

  }

  // Тімплейт
  getTemplate () {
    return `
        <div class="card">
          <div class="card__photo">
          <img class=card__image style="background-image: url(${this.images[0]});">
          </div>
          <div class="card__spacer"></div>
          <div class="card__props">
          <div class="card__rating">${this.rating}<i class="bi bi-star"></i></div>
          <div class="card__spacer"></div>
          <div class="card__price">${this.price}</div>
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
      `;
  }

  /** Дом елемент (підказка, потрібно зробити рендер всіх компонентів
   * 'in JS', та запихнути їх разом у DOM. Це краще за append на кожній
   * ітерації *\(^_^#)/*
   */
  render () {
    const cardList = document.createElement('div');
    cardList.classList.add('card-list');
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    cardElement.innerHTML = this.getTemplate();

    //TODO refactor this
    this.element = cardElement.firstElementChild;

  }

  // Видалення
  remove () {

  }

  // Видалення та очищення
  destroy () {

  }

  /** ще треба update() щоб опрокинути те, що всередині cardList
   * Component нові дані і перемалювати
   */
  update (data = []) {
    // оновили сторінку, наприклад, при наступній сторінці
  }

}
