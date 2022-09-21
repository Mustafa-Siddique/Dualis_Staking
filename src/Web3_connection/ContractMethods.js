import { getAccount, getContract, initInstance } from './web3_methods'
import { ABI } from './../ABI/Rating'
import { TokenABI } from '../ABI/TokenABI'
import { BBT } from '../ABI/BBTToken'
import { envprod } from './Envrionments'
import { getWeb3 } from './web3'

export const getRATEContract = async () => {
  try {
    const betContract = getContract(ABI, envprod.React_App_MAINNET)
    return betContract
  } catch (e) {
    //
  }
}

export const getTotoalProfile = async () => {
  try {
    const contract = await getRATEContract()
    const TotalProfile = await contract.methods.profileCount().call()
    return TotalProfile
  } catch (e) {
    //
  }
}

export const addReview = async (id, rating) => {
  try {
    console.log('Rating got', id, rating)
    const contract = await getRATEContract()
    const data = await contract.methods.addReview(id, rating).send({
      from: await getAccount(),
      value: envprod.React_App_Rating_Fee,
    })
    return data
  } catch (e) {
    //
  }
}

export const getProfile = async (id) => {
  try {
    const contract = await getRATEContract()
    const data = await contract.methods.getProfile(id).call()
    return data
  } catch (e) {
    //
  }
}

export const TokenContract = async () => {
  try {
    await initInstance()
    const contract = getContract(TokenABI, envprod.React_App_Token)
    return contract
  } catch (e) {
    //
  }
}

export const getTokenBalance = async () => {
  try {
    const contract = getContract(TokenABI, envprod.React_App_Token)
    const balance = await contract.methods.balanceOf(await getAccount()).call()
    return Number(balance)
  } catch (e) {
    //
  }
}

export const BNBBalance = async () => {
  // const web3 = getWeb3();
  // const bal = await web3.eth.getBalance(await getAccount());
  const convertBal = 0 / 10 ** 18
  if (convertBal > 0.005) {
    return false
  } else {
    return true
  }
}

export const symbol = async () => {
  try {
    const contract = getContract(TokenABI, envprod.React_App_Token)
    const sym = await contract.methods.symbol().call()
    return sym
  } catch (e) {
    //
  }
}

export const getBBTBalance = async () => {
  try {
    await initInstance()
    const account = await getAccount()
    const contract = getContract(BBT, envprod.React_App_BBT)
    const balance = await contract.methods.balanceOf(account).call()
    return Number(balance) / 10 ** 18
  } catch (e) {
  //
  }
}
