import { useState, useEffect } from 'react';
import abi from '../../artifacts/contracts/chai.sol/chai.json'
import { ethers } from 'ethers'
import './App.css'
import Memos from './components/Memos';
import Buy from './components/Buy';
import chai from './assets/chai.png'

import config from 'dotenv'
config();
const CONTRACT_ADDR = process.env.CONTRACT_ADDR;
// require("dotenv").config();

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  });
  const [account, setAccount] = useState('Not Connected');
  useEffect(() => {
    const template = async () => {
      const contractAddress = CONTRACT_ADDR;
      const contractABI = abi.abi;
      try {
        // Metamask part
        const { ethereum } = window;
        const account = await ethereum.request({
          method: "eth_requestAccounts"
        });
        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        })
        setAccount(account);
        const provider = new ethers.providers.Web3Provider(ethereum); // Read the blockchain
        // const provider = new ethers.BrowserProvider(window.ethereum); // Changed in later version of ethers
        const signer = provider.getSigner(); // change the state of the blockchain
        const contract = new ethers.Contract(
          contractAddress, contractABI, signer
        )
        setState({ provider, signer, contract });
      } catch (error) {
        console.log(error);
      }

    }
    template();
  }, [])
  return (
    <>
      <img src={chai} className="img-fluid" alt=".." width="100%" />
      <p className="Account">
        Connected Account - {account}
      </p>
      <Buy state={state} />
      <Memos state={state} />
    </>
  )
}
export default App;
