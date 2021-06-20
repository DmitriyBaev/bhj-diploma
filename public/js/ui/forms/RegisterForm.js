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
  onSubmit(data) {
    User.register(data, (err, responce) => {
      if (responce.success === true) {
        data = {};
        App.setState('user-logged');
        App.getModal('register').close()
        // const activeModal = document.querySelector('.modal__open');
        // activeModal.close()
      }
    })
  }
}