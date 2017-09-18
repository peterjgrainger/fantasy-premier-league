import {get} from 'request-promise';
import {Constants} from '../constants'

export default class UrlCall{
    private url:string;

    constructor() {
        this.url = Constants.BASE_URL;
    }

    sendMessage():Promise<any>{
        return get(this.url);
    }
}