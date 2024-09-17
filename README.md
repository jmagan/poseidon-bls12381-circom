# 🧮 Poseidon BLS12-381 Circom Circuit

This repository contains an implementation of the Poseidon hash function, based on the [Poseidon paper](https://eprint.iacr.org/2019/458.pdf). The circuit is optimized for use with the BLS12-381 elliptic curve, and the constants are generated using the [official Poseidon implementation](https://extgit.iaik.tugraz.at/krypto/hadeshash), ensuring a security level of 128 bits.

## 📋 TO-DO

The paper provides an appendix with a more efficient implementation. This current version is an initial iteration, and incorporating the optimized approach from the appendix could further reduce the number of constraints.

## ✏️ Use

You can add the circuit to your project using the npm package manager:

```bash
$ npm install poseidon-bls12381-circom
```

Alternatively, you can manually copy the files from the `circuits` folder into your project. Once the files are in place, you can include them in your Circom circuit as follows:

```
include "./node_modules/poseidon-bls12381-circom/circuits/poseidon255.circom";
```

To instantiate the main template with a specific arity, use this example:

```
pragma circom 2.0.0;

include "./node_modules/poseidon-bls12381-circom/circuits/poseidon255.circom";

component main = Poseidon255(2);
```

### TypeScript Implementation

You can also use the TypeScript version of [Poseidon for BLS12-381](https://github.com/jmagan/poseidon-bls12381) if needed.
