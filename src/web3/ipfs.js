const ipfsClient = require('ipfs-http-client');


// connect to ipfs daemon API server
// (the default in Node.js)

async function startIpfs() {
  let ipfs;
  if (window.ipfs && window.ipfs.enable) {
    console.log('Found window.ipfs');
    ipfs = await window.ipfs.enable({ commands: ['id'] });
  } else {
    try {
      console.time('IPFS Started');
      ipfs = await ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
      console.timeEnd('IPFS Started');
    } catch (error) {
      console.error('IPFS init error:', error);
      ipfs = null;
    }
  }
  return ipfs;
}

const ipfs = startIpfs();
export default ipfs;
