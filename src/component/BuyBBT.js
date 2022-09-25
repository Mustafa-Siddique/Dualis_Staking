import React from 'react'

export default function BuyBBT() {
    return (
        <div id='buy-cont' className='position-relative py-5'>
            <h2>How to Buy <span style={{color:"#ffcc00"}}>$DUALIS</span>?</h2>
            <div className="row py-5">
                <div className="col-md-6">
                    <ul>
                        <li><button disabled="disabled">1</button> Download and set up <a className='styledA' href='https://metamask.io/'>MetaMask</a> or <a className='styledA' href='https://trustwallet.com/'>Trust Wallet</a> </li>
                        <li><button disabled="disabled">2</button> Purchase BNB (BEP-20) and send to your wallet address</li>
                        <li><button disabled="disabled">3</button> Revisit this section of our website, or <a className='styledA' href='https://pancakeswap.finance/swap?outputCurrency=0xb3ef4bc63a0ec7889737d9653a12c7f42edae09e' target = "_blank" rel="noreferrer">PancakeSwap</a></li>
                        <li><button disabled="disabled">4</button> Insert the amount of BNB you would like to swap for $DUALIS</li>
                        <li><button disabled="disabled">5</button> Change the slippage amount to between 1%-15%. Depending on the buy and sell pressure, higher slippage may be necessary</li>
                        <li><button disabled="disabled">6</button> Press “Swap” and confirm the transaction in your wallet</li>
                        <li><button disabled="disabled">7</button> Congratulations - Welcome to the Dualis Finance Community!</li>
                    </ul>
                    <p>If you prefer the PancakeSwap option, click “select a currency”, and enter and import the $DUALIS contract address:</p>
                    <a className='styledA' href="https://bscscan.com/address/0xb3ef4bc63a0ec7889737d9653a12c7f42edae09e#code" target = "_blank" rel="noreferrer">0xb3ef4bc63a0ec7889737d9653a12c7f42edae09e</a>
                </div>
                <div className="col-md-6">
                    <div className="swapPoo">
                            <iframe
                                src="https://poocoin.app/embed-swap?outputCurrency=0xb3ef4bc63a0ec7889737d9653a12c7f42edae09e"
                                width="420"
                                height="630"
                            ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
