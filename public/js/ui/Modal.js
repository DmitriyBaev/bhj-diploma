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
  constructor(element) {

    if (element) {
      this.element = element;
      registerEvents()
    } else {
      throw new Error('Ошибка модального окна')
    }

  }

  /**
   * При нажатии на элемент с data-dismiss="modal"
   * должен закрыть текущее окно
   * (с помощью метода Modal.onClose)
   * */
  registerEvents() {
    const dataDismiss = element.querySelectorAll('[data-dismiss="modal"]');
    const arrDataDismiss = Array.from(dataDismiss);
    arrDataDismiss.forEach(elem => {
      elem.onclick = () => {
        onClose()
      }
    });
  }

  /**
   * Срабатывает после нажатия на элементы, закрывающие окно.
   * Закрывает текущее окно (Modal.close())
   * */
  onClose(e) {
    close();
    e.preventDefault()
  }
  /**
   * Открывает окно: устанавливает CSS-свойство display
   * со значением «block»
   * */
  open() {
    element.classList.add('modal__open')
  }
  /**
   * Закрывает окно: удаляет CSS-свойство display
   * */
  close() {
    element.classList.remove('modal__open')
  }
}