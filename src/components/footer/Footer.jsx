import React from 'react'
import { LayoutPage } from '../../layout/LayoutPage'
import { FooterBG } from './styled'

function Footer() {
  return (
    <LayoutPage>
      <FooterBG>
        <p>Copyright © 2023 Cybersecrecovery. All rights reserved.</p>
        <p>Privacy Policy •  Terms of Service</p>
      </FooterBG>
    </LayoutPage>
  )
}

export default Footer
