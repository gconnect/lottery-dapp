# Lottery Dapp
This is lottery application built with Reach. Deployed on Algorand and Etherum.

# Run Frontend Code
- To test the code
- Fork the repository
- Do `npm install` this will install all required dependencies. (If you encounter any issue after doing this you can delete the node module folder and do npm install again)
- run `npm start` to start the local server at localhost:3000

# Test Smart Contract Code
- Install [make](https://en.wikipedia.org/wiki/Make_(software)), [Docker](https://www.docker.com/get-started/) and [Docker Compose](https://docs.docker.com/compose/install/)
- [Vs Code](https://code.visualstudio.com/) or any IDE of your choice
- [Node Package Manager](https://nodejs.org/download/)
- [Create React App](https://github.com/facebook/create-react-app) . This creates a react boilerplate app.
- [Aphrodite](https://github.com/Khan/aphrodite) for css styling
- Install Reach and Reach Standard Library
- More detailed Reach specific setup instruction can be found [here](https://docs.reach.sh/tut/rps/#tut-1)

# Login with Unstoppable
Integration with login with unstoppable can be found here `src/unstoppable/unstoppable_auth.js`. To get your clientID follow this [guide](https://docs.unstoppabledomains.com/login-with-unstoppable/login-integration-guides/login-client-configuration/#rules-for-redirect-uris). Submission detail [here](https://github.com/gconnect/lottery-dapp/blob/master/login_with_unstoppable.md)

# Domain Resolution and Crypto Payment with Unstoppable
Integration with domain resolution and crypto payment with unstoppable can be found here. `src/unstoppable/domain_resolution.js` and `src/unstoppable/crypto_payment.js` . Submission detail [here](https://github.com/gconnect/lottery-dapp/blob/master/unstoppable_domain_resolution.md)

# Unstoppable Domain Resources to Integrate Login and Domain Resoultion
 ## Crypto resolution
- https://docs.unstoppabledomains.com/developer-toolkit/resolution-integration-methods/resolution-libraries/libraries-overview/

- https://github.com/unstoppabledomains/resolution

- https://unstoppabledomains.github.io/resolution/v8.1.0/classes/resolution.html

## Integrate crypto payment
- https://docs.unstoppabledomains.com/crypto-payments/library-integration/

- [Setting up Alchemy to get API key to query unstoppable resolution API](https://www.loom.com/share/7cd5398275e74d8ba024323985cd90c7?t=169)

- https://docs.unstoppabledomains.com/developer-toolkit/resolution-integration-methods/resolution-service/overview/

## login with Unstoppable
- Login with unstoppablehttps://docs.unstoppabledomains.com/login-with-unstoppable/

## Biconomy Hyphen Widget For Cross-chain Transfer
- Integration with Biconomy Hyphen Widget For Cross-chain Transfer can be found here `src/Biconomy/HyphenWidget.js/` Submission detail [here](https://github.com/gconnect/lottery-dapp/blob/master/Biconomy_HyphenWidget.md)

## Biconomy Gasless Transaction
- Integration with Biconomy Gasless Transaction can be found here `src/Biconomy/GaslessTransaction.js/` Submission detail [here](https://github.com/gconnect/lottery-dapp/blob/master/Biconomy_Gasless_Transaction.md)

## Biconomy Resources to Integrate HypenWidget For Cross-chain Transfer
- https://docs.biconomy.io/products/hyphen-instant-cross-chain-transfers
-  https://github.com/bcnmy/hyphen-widget

## Biconomy Resources to Integrate Gasless Transaction
- https://docs.biconomy.io/products/enable-gasless-transactions

# LICENSE
Distributed under the MIT License. See for more information [LICENSE](https://github.com/gconnect/lottery-dapp/blob/master/LICENSE)

# Disclaimer
This project is not audited and should not be used in a production environment.
