describe('When I call “read those props” with a path', () => {
    beforeEach(() => jest.resetModules());
    describe('with a working properties reader', () => {
        let result;
        beforeEach(() => {
            jest.doMock('properties-reader', () => () => ({
                get() {
                    return 'Lecker!!1!';
                }
            }));
            const readThoseProps = require('properties-reader');
            result = readThoseProps('/some/path').get('wurst.senf');
        });
        describe('the result', () =>
            it('is the value of property wurst.senf', () => expect(result).toBe('Lecker!!1!')));
    });
    describe('with a borked properties reader', () => {
        let result;
        beforeEach(() => {
            jest.doMock('properties-reader', () => () => {
                throw new Error('WTF?!?');
            });
            const readThoseProps = require('properties-reader');
            try {
                result = readThoseProps('/some/path').get('wurst.senf');
            } catch (e) {
                result = e.message;
            }
        });
        describe('an error', () => it('is thrown', () => expect(result).toBe('WTF?!?')));
    });
});
