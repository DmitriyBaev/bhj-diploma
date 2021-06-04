/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();
    try {
        if (options.method === 'GET') {
        xhr.open(options.method, `${options.url}+'?'+'mail='+${options.data.mail}+'&'+'password='+${options.data.password}`);
        xhr.send()
        } else {
           const formData = new FormData();

            formData.append( 'mail', `${options.data.mail}` );
            formData.append( 'password', `${options.data.password}` );

            xhr.open( 'options.method', 'options.url' );
            xhr.send( formData );
        }

        xhr.onload = () => {
            options.callback(null, xhr.response)
        }                                                                                                                       

        // xhr.onerror = () => {
        //     console.log(error);
        // }
    } catch (err) {
        options.callback(err, xhr.response)
    }
};
