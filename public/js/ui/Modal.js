/**
 * Класс Modal отвечает за
 * управление всплывающими окнами.
 * В первую очередь это открытие или
 * закрытие имеющихся окон
 * */
class Modal {
  /**
   * Устанавливает текущий элемент в свойство element
   * Регистрирует обработчики событий с помощью Modal.registerEvents()
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor(element){
    this.registerEvents;
    this.onClose;
    this.open;
    this.close;

    if(element) {
      this.element = element;
      this.registerEvents()
    } else {
      throw new Error ('Ошибка модального окна')
    }
    
  }

  /**
   * При нажатии на элемент с data-dismiss="modal"
   * должен закрыть текущее окно
   * (с помощью метода Modal.onClose)
   * */
  registerEvents() {
    const dataDismiss = this.element.querySelector('[data-dismiss="modal"]');
    dataDismiss.onclick = () => {
      this.onClose()
    }
  }

  /**
   * Срабатывает после нажатия на элементы, закрывающие окно.
   * Закрывает текущее окно (Modal.close())
   * */
  onClose(e) {
    this.close();
    e.preventDefault()
  }
  /**
   * Открывает окно: устанавливает CSS-свойство display
   * со значением «block»
   * */
  open() {
    this.classList.add('modal__open')
  }
  /**
   * Закрывает окно: удаляет CSS-свойство display
   * */
  close(){
    this.classList.remove('modal__open')
  }
}