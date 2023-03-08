### FTMoney
FTMoney is a privacy focused non-custodial wallet that would support both personal and commercial transaction to be used in Fantom Blockchain.


## Prerequisite
```
- Node JS
- NPM
- Rust
- Tauri
- Hardhat
- Fantom testnet account with FTM from faucet

```

## Installation
Run:
```
npm i
```
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Run tauri app:
```bash
npm run tauri dev
```

## Inspiration
The issue with blockchain onboarding is that it can be a challenging and intimidating process for many people, especially those who are not familiar with the technology or are not technically savvy. The complexity of the technology itself, involves technical concepts that can be difficult to understand for those who are not familiar with them i.e. Wallet Address, Public/ Private key pair, Native Asset, etc. Lack of user-friendly interfaces and applications, with many platforms and applications having complex user interfaces that require a significant amount of technical knowledge to use, i.e. importing tokens, allowance mechanism, etc.

On top of them is the lack of educational resources and support, with many platforms and applications having insufficient documentation, tutorials, or customer support to help new users navigate the technology. Thee are trust and security concerns, as blockchain technology is based on decentralization and trustless systems that can be difficult for some users to understand and trust. There have also been incidents of hacks, scams, and fraud in the blockchain industry, which can further erode trust in the technology. We often hear the story of how users provided their private keys to random discord users and got scammed. Now, all these issues point in one direction - we NEED simplified solutions focusing on the User Onboarding Process. 

Management of Gas assets brings additional complexity as users need to hold native assets for making transactions. Noncustodial wallet generally provides greater security and require less trust over custodial solution. But one big problem in noncustodial solutions is account recovery in the event of device loss. What the wallets generally suggests for tackling these sorts of event is to save some passphrase words beforehand which is both cumbersome and if anyone gets handed to your passphrase they would have access to all your accounts.

Another issue in using a public chain like Fantom is privacy. Although the user is linked to pseudonymous addresses, all the transactions associated with the account are public. For many business use cases, a prerequisite for doing transactions is to do KYC of each party involved in doing transactions which most web3 wallet platforms do not provide out of the box. Some custodial wallet platforms would do KYC with traditional centralized systems that are prone to security vulnerability and other issues of web2-based systems.

For all these issues we feel the need for a more user-friendly, secure, private wallet for the Fantom blockchain ecosystem.

## What it does
A simplified wallet that shows users' public addresses as their own verified mobile numbers. 

- Users just need to share their mobile number & name with any dAPP or other users for receiving tokens/ making transactions 
- Our dAPP maps their mobile numbers to users’ public keys. 
- The users' mobile numbers are verified using an OTP channel and whitelisted on-chain to ensure that the mobile number belongs to the user itself.
- It also provides other dAPPs with a simple interface to retrieve user public keys from their mobile number & arbitrary string. 
- It ensures that a user's balance is always enough for making transactions - by allowing users to top-up through fiat solutions.
- It enables on-chain KYC proof generation with Zero Knowledge and verification functionality.

## How we built it
We wanted to support all kinds of devices with the same codebase, so we used the multi-platform development platform Tauri which uses the fast and secure Rust platform in the backend and JS on the front end. We used the Next framework with Typescript for the web full stack. We developed our own smart contract with solidity, along with hardhat as the dApp development tool.

## Challenges we ran into
At the design level, we ran into challenges regarding privacy-convenience tradeoff and security-convenience tradeoff when it comes to linking phone numbers and on-chain KYC. For example, directly storing a phone number on-chain would expose someone's number to everyone (which is a privacy breach) but storing it in an obscured way would create inconvenience for other people to connect to the person associated with that cell phone number. On the implementation side, a few small issues arose for the main application development because there are still some dev issues for our chosen frameworks that required some workaround. 

## Accomplishments that we're proud of
- Building a streamlined UX & Design of simplified Wallet
- Integrating OTP Services against mobile number & user onboarding
- Integrate and enabling gas assets for users on Fantom blockchain

## What's next for FTMoney
- On Q1 of 2023, we focus on privacy & security with a functional prototype.
- On Q2 of 2023, we’ll implement stealth address, Multi-Party Computation MPC & ring signature.
- On Q3 of 2023, we'll onboard KYC partners with us, and implement an advanced Zero Knowledge mechanism.
- Moving towards Q4 of 2023,  we'll need topup partners for our alpha launch and more DeFi features.
- On Q1 2024, we aim to launch our fully baked cross-platform application with MPC-based recovery mechanisms. 

