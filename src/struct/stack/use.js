import Stack from './index';

export const baseConverter = (decNumber, base) => {
    const remStack = new Stack(),
        digits = '0123456789ABCDEF';
    let rem,
        baseString = '';
    
        while(decNumber > 0) {
            rem = Math.floor(decNumber % base);
            remStack.push(rem);
            decNumber = Math.floor(decNumber / base);
        };
        
        while(!remStack.isEmpty()) {
            baseString += digits[remStack.pop()];
        }
    return baseString;
}