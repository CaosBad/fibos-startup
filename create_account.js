// 私钥：5JYXp9cSWQizUXLw5K2sGGD8Mr6pHAjpcRk7xrHkY5zaPwXRppP
// 公钥：FO7sGkRxL2AFnqBdUHXKC2LziYeRTzsxYF7FjzFNGe14hV8U5Pi2
// Fibos密钥对生成工具地址：https://fibos.xyz/

var FIBOS = require("fibos.js");

var key = {
    "public-key": "FO7sGkRxL2AFnqBdUHXKC2LziYeRTzsxYF7FjzFNGe14hV8U5Pi2",
    "private-key": "5JYXp9cSWQizUXLw5K2sGGD8Mr6pHAjpcRk7xrHkY5zaPwXRppP"
}

var rpc = ["http://se-rpc.fibos.io:8870",
            "http://sl-rpc.fibos.io:8870",
            "http://to-rpc.fibos.io:8870",
            "http://ca-rpc.fibos.io:8870",
            "http://ln-rpc.fibos.io:8870",
            "http://va-rpc.fibos.io:8870",
]

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var config = {
    chainId:"6aa7bd33b6b45192465afa3553dedb531acaaff8928cf64b70bd4c5e49b7ec6a",
    keyProvider:key["private-key"],
    httpEndpoint:rpc[getRandomInt(0, 5)],
    expireInSeconds: 60,
	broadcast: true,
	verbose: false,
	sign: true
}

var client = FIBOS(config);

client.transaction(tr => {
    tr.newaccount({
        creator: 'orangeisfeng',
        name: 'fibosamerica',
        owner: "FO6jr4vHBXzZmDuPLEFrNHdS8ZiqgNeABQ76vkBZvEnVUHPuyrYt",
        active: "FO6jr4vHBXzZmDuPLEFrNHdS8ZiqgNeABQ76vkBZvEnVUHPuyrYt"
      })

    tr.buyrambytes({
      payer: 'orangeisfeng',
      receiver: 'fibosamerica',
      bytes: 4096
    })
    
    tr.delegatebw({
      from: 'fibosamerica',
      receiver: 'fibosamerica',
      stake_net_quantity: '1.0000 FO@eosio',
      stake_cpu_quantity: '10.0000 FO@eosio',
      transfer: 0
    })
  }).then((result) => {
      console.log(result);
  }).catch((err) => {
    console.log(err);
  });

