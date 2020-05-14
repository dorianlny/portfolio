import React from 'react'
import { getCurrentYear } from '../../utils/functions'
import { Wrapper, Item } from './style'

const Footer = () =>
  <Wrapper>
    <Item position='left'>
      Made (with love) in {getCurrentYear()}
    </Item>
    <Item position='right'>
      <span>Need my CV?&nbsp;-&nbsp;</span>
      
      <a target="_blank" rel="noopener noreferrer" href='/images/works/CV_Dorian_Lannay.pdf'>Click here</a>
    </Item>
  </Wrapper>

export default Footer
