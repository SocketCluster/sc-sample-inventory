var path = require('path');
var argv = require('minimist')(process.argv.slice(2));
var SocketCluster = require('socketcluster').SocketCluster;


var socketCluster = new SocketCluster({
    workers: Number(argv.w) || 1,
    brokers: Number(argv.b) || 1,
    port: Number(argv.p) || 8000,
    authKey: 'todo',
    appName: argv.n || null,
    workerController: path.resolve(__dirname, './worker.js'),
    brokerController: path.resolve(__dirname, './broker.js'),
    socketChannelLimit: 100,
    rebootWorkerOnCrash: argv['auto-reboot'] !== false,
    pingTimeout: 5000,
    pingInterval: 2000

    // RabbitMQ broker (https://www.npmjs.com/package/sc-rabbitmq)
    // Available options -> https://www.npmjs.com/package/amqp#connection-options-and-url
    // brokerOptions: {
    //     host: 'rabbitMq',
    //     port: 5672
    // }
});
