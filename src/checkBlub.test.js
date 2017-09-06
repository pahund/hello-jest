import checkBlub from './checkBlub';
import config from './config';

describe('The “check blub” function,', () => {
    describe('if “blub” is configured to something other than “zombo.com”,', () => {
        let result;
        beforeEach(() => (result = checkBlub()));
        it('returns false', () => expect(result).toBe(false));
    });
    describe('if “blub” is configured to “zombo.com”', () => {
        let result;
        beforeEach(() => {
            jest.genMockFromModule('./config');
            config.blub = 'zombo.com';
            result = checkBlub();
        });
        it('returns true', () => expect(result).toBe(true));
    });
});
