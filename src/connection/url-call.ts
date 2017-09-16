import {get} from 'request-promise';
import {Constants} from '../constants'

export default class UrlCall{
    private url:string;

    constructor(path: string) {
        this.url = Constants.BASE_URL+path;
    }

    sendMessage():Promise<any>{
        return get(this.url);
    }
}