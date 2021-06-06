/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit() {
    User.register(AsyncForm.data, (err, responce) => {
      if (responce.success === true) {
        AsyncForm.data = {};
        App.setState('user-logged');
        const activeModal = document.querySelector('.modal__open');
        activeModal.close()
      }
    })
  }
}