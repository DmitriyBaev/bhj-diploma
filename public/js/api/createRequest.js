/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = options.responseType;
    xhr.withCredentials = true;

    if (options.method === 'GET') {
        options.url += '?';
        for (let prop in options.data) {
            options.url += `${prop}=${options.data[prop]}&`
        }
        try {
            xhr.open(options.method, 'http://localhost:8000' + options.url);
            xhr.send()
        }
        catch (err) {
            options.callback(err)
        }

    } else {
        let formData = new FormData();

        for (let prop in options.data) {
            formData.append(prop, options.data[prop]);
        }
        try {
            xhr.open(options.method, 'http://localhost:8000' + options.url);
            xhr.send(formData);
        }
        catch (err) {
            options.callback(err)
        }
    }
    xhr.onload = () => {
        options.callback(null, xhr.response)
    }
};
