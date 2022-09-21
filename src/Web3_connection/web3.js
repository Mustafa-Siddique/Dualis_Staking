import Web3 from "web3";
import {envprod} from "./Envrionments"
import WalletConnectProvider from '@walletconnect/web3-provider'
let httpProvider = undefined
var provider = new WalletConnectProvider({
  rpc: {
    56: 'https://bsc-dataseed1.ninicoin.io',
    // ...
  },
  bridge: 'https://bridge.walletconnect.org',
})

export const SelectWallet = async () => {
  let data = undefined
    try{
      if (window.WC) {
        data = await provider.enable();
        httpProvider = provider
        if(data){
          window.provide = true
          console.log(httpProvider,data,window.provide)
        }
        return data[0];
      }
      if(window.MM){
        httpProvider = window.ethereum
        if(httpProvider){
          window.provide = true
        }
      }
    }
    catch(e){
      //
    }

}

const getWeb3 = () => {
  try {
    return new Web3(httpProvider)
  } catch (e) {
    console.log(e)
  }
}
export const DisconnectWallet =async()=>{
  if (window.WC) {
    await provider.disconnect();
  }
}
export { getWeb3 };