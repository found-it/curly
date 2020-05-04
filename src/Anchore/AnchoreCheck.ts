import axios, {
    AxiosRequestConfig,
    AxiosResponse,
    AxiosError,
    AxiosInstance,
    AxiosAdapter,
    Cancel,
    CancelToken,
    CancelTokenSource,
    Canceler
} from 'axios';

import * as fs from 'fs';

// This class accesses the Anchore Engine
export class AnchoreCheck {
    private instance: AxiosInstance;

    constructor (url: string, user: string, pass: string) {
        this.instance = axios.create({
            baseURL: url,
            auth: {
                username: user,
                password: pass
            }
        });
    }

    getImage(image: string): any {
        this.instance.get('/images', { params: { fulltag: image, history: false } })
            .then(this.handleResponse)
            .catch(this.handleError)
    }

    get(path: string) {
        this.instance.get(path)
            .then(this.handleResponse)
            .catch(this.handleError)
    }

    private handleResponse = (response: AxiosResponse) => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
    }

    private handleError = (error: AxiosError) => {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else {
            console.log(error.message);
        }
    };
}

