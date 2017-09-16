const requestPromise = jest.genMockFromModule("request-promise");

let returnMock = jest.fn();

requestPromise.setRequestReturn = (newValue) => {
    returnMock.mockReturnValue(newValue);
};

requestPromise.getMock = () => returnMock;

requestPromise.get = () => returnMock();

module.exports = requestPromise;
