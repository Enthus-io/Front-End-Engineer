let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.join(' '));

secretMessage.pop();

console.log(secretMessage.length);

secretMessage.push('to');
secretMessage.push('Program');

secretMessage[secretMessage.indexOf('easily')] = 'right';

secretMessage.shift();

secretMessage.unshift('Programming');

secretMessage[secretMessage.indexOf('get')] = 'know';
secretMessage[secretMessage.indexOf('right')] = 'know';
secretMessage[secretMessage.indexOf('the')] = 'know';
secretMessage[secretMessage.indexOf('first')] = 'know';
secretMessage[secretMessage.indexOf('time,')] = 'know,';

console.log(secretMessage.join(' '));
