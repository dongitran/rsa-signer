# rsa-signer 🔐

A lightweight utility for generating RSA signatures for API requests. Simple, fast, and easy to use! ⚡️

## 📦 Installation

```bash
npm install rsa-signer
```

## ⭐️ Features

- 🛡️ RSA signature generation with SHA256
- 🔄 Automatic query parameter sorting
- 🎯 Simple, intuitive API
- 🚀 Easy integration with API clients

## 🔨 Usage

### Basic Example
```javascript
const { sign } = require('rsa-signer');

// Your request body
const body = {
  amount: 100000,
  orderId: "ORDER123"
};

const privateKey = "YOUR_PRIVATE_KEY";

// Generate signature
const { signature, qstring } = sign(body, privateKey);
```

### 🔌 Using with Bruno
```javascript
const { sign } = require('rsa-signer');

const privateKey = bru.getEnvVar('PRIVATE_KEY');

const { signature } = sign(req.body, privateKey);
req.body.signature = signature;
```

## 🛠️ API

### sign(body, privateKey)
- Main function for generating signatures
- Returns: `{ signature, qstring }`

### Other Utilities
```javascript
const { 
  createSignature,    // Create signature from string
  generateSortedData, // Generate sorted query string
  formatPrivateKey    // Format private key
} = require('rsa-signer');
```

## 📮 Support

Issues and PRs welcome! Visit our [GitHub repo](https://github.com/dongitran/rsa-signer)

## 📝 License

MIT © [thiendong.iuh@gmail.com](mailto:thiendong.iuh@gmail.com)