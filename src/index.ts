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
//
//
const pass: string = fs.readFileSync('creds', 'utf8');
//     // baseURL: 'http://mswscan-testjp.eastus.cloudapp.azure.com:8228/v1/images/sha256:af2bb77f27d64ad1fe1d5d00612df57d39905ab396fdf4ba2d04788cd384bc40?tag=0.1.0/check',
//
// const config: AxiosRequestConfig = {
//     baseURL: 'http://104.43.247.106:5000',
//     timeout: 1000,
//     // auth: {
//     //     username: 'admin',
//     //     password: pass
//     // },
//     responseType: 'json'
// }
//
//
// var curly: AxiosInstance = axios.create(config);
// // curly.defaults.auth['username'] = 'admin';
// // curly.defaults.auth['password'] = pass;
//
// const handleResponse = (response: AxiosResponse) => {
//     console.log(response.data);
//     console.log(response.status);
//     console.log(response.statusText);
// }
//
// const handleError = (error: AxiosError) => {
//     if (error.response) {
//         console.log(error.response.data);
//         console.log(error.response.status);
//         console.log(error.response.headers);
//     } else {
//         console.log(error.message);
//     }
// };
//
// curly.get('/')
//     .then(handleResponse)
//     .catch(handleError)

class AnchoreCheck {
    private instance: AxiosInstance;


    constructor (url: string, user: string, pass: string) {
        this.instance = axios.create({
            baseURL: url,
            auth: {
                username: user,
                password: pass
            }
        });
        console.log(url);
        console.log(user);
        console.log(typeof pass);
        console.log(pass);
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

var obj = new AnchoreCheck('http://104.43.247.106:5000', "", "");
obj.get('/');
var anc = new AnchoreCheck('http://mswscan-testjp.eastus.cloudapp.azure.com:8228/v1/images/sha256:af2bb77f27d64ad1fe1d5d00612df57d39905ab396fdf4ba2d04788cd384bc40?tag=0.1.0/check', "admin", fs.readFileSync('creds', 'ascii').slice(0, -1));
anc.get('/');
