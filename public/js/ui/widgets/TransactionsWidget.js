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
    if (element) {
      this.element = element;
      this.registerEvents();
    } else {
      throw new Error("Ошибка, форма не существует");
    }
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    const buttonIncome = document.querySelector(".create-income-button");
    buttonIncome.onclick = (e) => {
      App.getModal("newIncome").open();
      e.preventDefault();
    };

    const buttonExpense = document.querySelector(".create-expense-button");
    buttonExpense.onclick = (e) => {
      App.getModal("newExpense").open();
      e.preventDefault();
    };
  }
}
