import React from 'react'
import { Wrapper, Title } from './style'

const Intro = props => 
  <Wrapper {...props} >
    <Title>
      Hi, my name is Dorian Lannay,
      an <span>interdisciplinary</span> Product Owner
      based in Paris.
    </Title>
  </Wrapper>

export default Intro
