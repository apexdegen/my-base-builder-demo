# Base Sepolia Deployment Guide

Current RPC: https://sepolia.base.org (chainId: 84532)

1. Add your wallet private key to .env (from .env.example)
2. Run: npx hardhat run scripts/09_deploy_to_base_sepolia.js --network baseSepolia
3. Check addresses in deploymentAddresses.json
4. View on https://sepolia.basescan.org

This proves real on-chain activity for Base Guild.
