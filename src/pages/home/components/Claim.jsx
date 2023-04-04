import React from 'react'
import { Link } from 'react-router-dom'
import { ClaimStyle } from './styled'

function Claim() {
  return (
    <ClaimStyle>
     <h2>It's time to reclaim your money and your life</h2>
     <Link to="/contact"><button>Reclaim My Stolen Crypto</button></Link>
    </ClaimStyle>
  )
}

export default Claim
