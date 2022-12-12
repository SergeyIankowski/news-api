import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'b650b2ff555544e7bf1e8751acf7d01c', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
