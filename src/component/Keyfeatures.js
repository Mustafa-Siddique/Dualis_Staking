import React from 'react'
import {FaLock, FaGlobeAsia, FaStarOfLife, FaHandHoldingWater} from 'react-icons/fa'

export default function Keyfeatures() {
    return (
        <div id='keyfeatures-cont' className='py-5 position-relative'>
            <div className="row">
                <div className="col-md-3">
                    <FaLock id='featureIco'/>&nbsp;
                    <p>Locked Liquidity <br className='keyBreak' />for 1 Year</p>
                </div>
                <div className="col-md-3">
                    <FaHandHoldingWater id='featureIco'/>&nbsp;
                    <p>Insurance in <br className='keyBreak' />DeFi</p>
                </div>
                <div className="col-md-3">
                    <FaGlobeAsia id='featureIco'/>&nbsp;
                    <p>Community <br className='keyBreak' />Driven</p>
                </div>
                <div className="col-md-3">
                    <FaStarOfLife id='featureIco'/>&nbsp;
                    <p>Aggressive <br className='keyBreak' />Marketing</p>
                </div>
            </div>
        </div>
    )
}