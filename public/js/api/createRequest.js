
/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
        const xhr = new XMLHttpRequest();
        let formData;
        let mainURL = options.url;
        xhr.responseType = 'json';

        if (options.method === 'GET') {
                if (options.data) {
                        for (key in options.data) {
                                mainURL = mainURL + '?' + key + '=' + options.data[key] + '&';
                        };
                        mainURL = mainURL.slice(0, -1);
                };
        } else {
                formData = new FormData();

                for (key in options.data) {
                        formData.append(key, options.data[key]);
                };
        };

        try {
                xhr.open(options.method, String(mainURL));
                xhr.send(formData);
        }
        catch (error) {
                options.callback(error);
        };

        xhr.addEventListener('load', () => {
                // console.log(xhr.response)    
                options.callback(null, xhr.response);
        });
};