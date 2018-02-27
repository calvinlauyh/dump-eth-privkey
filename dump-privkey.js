const keythereum = require('keythereum');

const dumpPrivKey = (address, password, dataDir) => {
  const keyObject = keythereum.importFromFile(address, dataDir);
  const privKey = keythereum.recover(password, keyObject);
  return privKey.toString('hex');
};

console.log(dumpPrivKey(process.argv[2], process.argv[3], process.argv[4]));
