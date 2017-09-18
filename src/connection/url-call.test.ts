import UrlCall from './url-call';
jest.mock('request-promise');
import * as requestPromise from 'request-promise';


test('send message returns some data', () => {
    expect.assertions(1);
    requestPromise.get.mockImplementation(()=> Promise.resolve('w00t'));
    const urlCall = new UrlCall();
    urlCall.sendMessage()
           .then(result => expect(result).toBe('w00t'));
})

test('fail sending message', () => {
    const error = new Error('some error');
    requestPromise.get.mockImplementation(()=> Promise.reject(error));
    expect.assertions(1);
    const urlCall = new UrlCall();
    urlCall.sendMessage()
           .catch(error => {
            expect(error).toBe(error);       
           })

})
