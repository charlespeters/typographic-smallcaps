const smallCaps, { replacer,  smCaps } = require('.')

let content = smallCaps('Something nice here, I need HTML & CSS')

process.stdout.write(content)
