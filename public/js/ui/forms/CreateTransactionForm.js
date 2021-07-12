/**
 * Класс CreateTransactionForm управляет формой
 * создания новой транзакции
 * */
class CreateTransactionForm extends AsyncForm {
  /**
   * Вызывает родительский конструктор и
   * метод renderAccountsList
   * */
  constructor(element) {
    super(element);
    this.renderAccountsList()
  }
  

  /**
   * Получает список счетов с помощью Account.list
   * Обновляет в форме всплывающего окна выпадающий список
   * */
  renderAccountsList() {
    const accountsList = this.element.getElementsByTagName('select')[0];
    accountsList.innerHTML = '';

    Account.list(User.current(), (err, responce) => {
      if (responce.success === true) {
        responce.data.forEach(element => {
          const option = `<option value="${element.id}">${element.name}</option>`;
          accountsList.insertAdjacentHTML('beforeend', option)
        });
      }
    })
  }

  /**
   * Создаёт новую транзакцию (доход или расход)
   * с помощью Transaction.create. По успешному результату
   * вызывает App.update(), сбрасывает форму и закрывает окно,
   * в котором находится форма
   * */
  onSubmit(data) {
    Transaction.create(data, (err, responce) => {
      if (responce.success === true) {

        if(data.type == 'income') {
          App.getModal('newIncome').close();
        } else {
          App.getModal('newExpense').close()};
        
        this.element.reset();
        App.update()
      } else {
        alert(responce.error)
      }
    })
  }
}