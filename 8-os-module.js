const os = require('os');

const user = os.userInfo();

console.log(`The uptime ${os.uptime() / 3600} : ${os.uptime() % 3600 / 60} : ${os.uptime % 60}`);

console.log(user);