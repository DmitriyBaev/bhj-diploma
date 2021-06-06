/**
 * Класс AsyncForm управляет всеми формами
 * приложения, которые не должны быть отправлены с
 * перезагрузкой страницы. Вместо этого данные
 * с таких форм собираются и передаются в метод onSubmit
 * для последующей обработки
 * */
class AsyncForm {
  /**
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * Сохраняет переданный элемент и регистрирует события
   * через registerEvents()
   * */
  constructor(element) {
    if (element) {
      this.element = element;
      this.registerEvents()
    } else {
      throw new Error('Ошибка, форма не существует')
    }
  }

  /**
   * Необходимо запретить отправку формы и в момент отправки
   * вызывает метод submit()
   * */
  registerEvents() {
    const submits = document.querySelectorAll('.btn-primary');
    const arraySubmits = Array.from(submits);
    arraySubmits.forEach(element => {
      element.onclick = (e) => {
        this.submit();
        e.preventDefault()
      }
    });
  }

  /**
   * Преобразует данные формы в объект вида
   * {
   *  'название поля формы 1': 'значение поля формы 1',
   *  'название поля формы 2': 'значение поля формы 2'
   * }
   * */
  getData() {
    const formData = new FormData(this.element);
    const inputs = document.querySelectorAll('.form-control');
    const arrayInputs = Array.from(inputs);
    arrayInputs.forEach(element => {
       formData.append(element.getAttribute('name'), element.value)
    });
   
    this.data = {};
    // for (let item in formData) {       так не сработало
    //   this.data[`${item}`] = formData.item
    // }
    const entries = formData.entries();
    for (let item of entries) {
      const key = item[ 0 ], value = item[ 1 ];
      this.data[key] = value
    }
    return this.data
  }

  onSubmit(options) {

  }

  /**
   * Вызывает метод onSubmit и передаёт туда
   * данные, полученные из метода getData()
   * */
  submit() {
    this.getData();
    this.onSubmit(this.data)
  }
}