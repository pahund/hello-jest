import chain from './chain';

const func1 = jest.fn().mockReturnValue('waldo');
const func2 = jest.fn();

chain(func1, func2);

test('func2 is called with output of func1', () => expect(func2.mock.calls[0][0]).toBe('waldo'));
