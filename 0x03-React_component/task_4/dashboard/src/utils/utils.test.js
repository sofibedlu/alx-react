import  { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Basic tests of utils', () => {
    it('getFullYear returns the current year', () => {
        const year = new Date().getFullYear();
        expect(getFullYear()).toBe(year);
    });

    it('getFooterCopy returns the correct string when true', () => {
        expect(getFooterCopy(true)).toBe('Holberton School');
    });

    it('getFooterCopy returns the correct string when false', () => {
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });

    it('getLatestNotification returns the correct string', () => {
        expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
    });
});