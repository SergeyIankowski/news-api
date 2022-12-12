import LoaderOptions from '../../objects-types/controller-types/loader-options';
import { GetRespData } from '../../objects-types/controller-types/get-resp-data';
import LoaderRespCallback from '../../objects-types/controller-types/loader-res-callback';

class Loader {
    readonly baseLink: string;
    readonly options: LoaderOptions;
    constructor(baseLink: string, options: LoaderOptions = {}) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp<T>(
        { endpoint, options = {} }: GetRespData,
        callback: LoaderRespCallback<T> = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler(res: Response): Response | never {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: LoaderOptions, endpoint: string) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private load<T>(method: string, endpoint: string, callback: LoaderRespCallback<T>, options: LoaderOptions = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: T) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
