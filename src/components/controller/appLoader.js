import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'e69b108341124e0d82a528405c2e27aa',
        });
    }
}

export default AppLoader;
