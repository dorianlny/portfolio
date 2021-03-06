import React from 'react'
import Intro from '../Intro'
import { Wrapper, InfoWrapper, Content, StyledImage } from './style'
import { Loader } from '../../style/shared'

const ProfileIntroSection = ({ content }) => 
  <Wrapper>
    <InfoWrapper>
      <Intro fixed={false} />
      <Content>{content()}</Content>
    </InfoWrapper>
    <StyledImage 
      src="/images/profile/dorian-lannay-portrait.jpg"
      alt="Dorian Lannay - Interdisciplinary UX Designer"
      loader={({ isLoaded }) => <Loader isLoaded={isLoaded} />}
      sources={[{
        media: 'max-width: 40rem',
        srcset: [
          '/images/profile/dorian-lannay-portrait-square.jpg 1x',
          '/images/profile/dorian-lannay-portrait-square-2x.jpg 2x',
          '/images/profile/dorian-lannay-portrait-square-3x.jpg 3x'
        ]
      },{
        srcset: [
          '/images/profile/dorian-lannay-portrait.jpg 1x',
          '/images/profile/dorian-lannay-portrait-2x.jpg 2x',
          '/images/profile/dorian-lannay-portrait-3x.jpg 3x'
        ]       
      }]}
    />
  </Wrapper>

export default ProfileIntroSection
