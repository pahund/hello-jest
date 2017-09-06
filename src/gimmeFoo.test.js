import gimmeFoo from './gimmeFoo';
import foo from './foo';

jest.mock('./foo');

foo.mockReturnValue('FOO');

test('The mocked foo function should return FOO', () => expect(gimmeFoo()).toBe('FOO'));
