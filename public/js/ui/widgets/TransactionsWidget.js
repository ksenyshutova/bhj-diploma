/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor(element) {
    this.element = element;
    this.registerEvents();

    if (this.element === undefined) {
      alert('Пожалуйста, повторите попытку');
    }
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    const income = document.querySelector('.create-income-button');
    const expense = document.querySelector('.create-expense-button');

    income.addEventListener('click', event => {
      event.preventDefault();
      App.getModal('newIncome').open();
    });

    expense.addEventListener('click', event => {
      event.preventDefault();
      App.getModal('newExpense').open();
    });
  }
}
