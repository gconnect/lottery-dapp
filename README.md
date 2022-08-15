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
Integration with login with unstoppable can be found here `src/unstoppable/unstoppable_auth.js`. To get your clientID follow this guide. Submission detail [here]()

# Domain Resolution and Crypto Payment with Unstoppable
Integration with domain resolution and crypto payment with unstoppable can be found here. `src/unstoppable/domain_resolution.js` and `src/unstoppable/crypto_payment.js` . Submission detail [here]()

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
- Login with unstoppable https://docs.unstoppabledomains.com/login-with-unstoppable/

# LICENSE
Distributed under the MIT License. See for more information LICENSE

# Disclaimer
This project is not audited and should not be used in a production environment.
