const rs = require("jsrsasign");
const qs = require("qs");

const formatPrivateKey = (key) => key.replace(/\\n/g, '\n');

const createSignature = (data, privateKey) => {
  const sig = new rs.KJUR.crypto.Signature({
    alg: "SHA256withRSA",
  });
  sig.init(formatPrivateKey(privateKey));
  sig.updateString(data);
  return rs.hex2b64(sig.sign());
};

const generateSortedData = (value) => 
  qs.stringify(value, {
    sort(a, b) {
      return a.localeCompare(b);
    },
    encode: true,
  });

const sign = (body, privateKey) => {
  const qstring = generateSortedData(body);
  const signature = createSignature(qstring, privateKey);
  
  return {
    signature,
    qstring
  };
};

module.exports = {
  sign,
  createSignature,
  generateSortedData,
  formatPrivateKey
};