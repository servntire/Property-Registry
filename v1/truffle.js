module.exports = {
  rpc: {
    host: 'localhost',
    port: '8545'
 },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "localhost", // Connect to geth on the specified
      port: 7545,
      from: "0xa81CD17123d99694E29D4b09edCC36561a61d1ab", // default address to use for any transaction Truffle makes during migrations
      network_id: 4,
      gas: 4612388 // Gas limit used for deploys
    },
 ropsten:  {
     network_id: 3,
     host: "localhost",
     port:  8545,
     gas:   4612388
  }
},
};
