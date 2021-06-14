/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();
    try {
        
        if (options.method === 'GET') {
            const url = `${options.method}, ${options.url} +'?'`;  
            for (let prop in options.data) {
                url = url + `${prop} + '=' + ${options.data[prop]} + '&'`
            }
        //xhr.open(options.method, `${options.url}+'?'+'mail='+${options.data.mail}+'&'+'password='+${options.data.password}`);
        xhr.open('http://localhost:8000' + url);
        xhr.send()
        } else {
           let formData = new FormData();
           
            for (let prop in options.data) {
                formData.append(prop, options.data[prop]);
            }
            
            xhr.open('POST', 'http://localhost:8000' + options.url);
            xhr.responseType = options.responseType;
            xhr.withCredentials = true;
            xhr.send(formData);
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
