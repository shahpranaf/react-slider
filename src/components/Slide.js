/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

const Slide = ({ content, disable, sectionKey }) => (
  content.map((image, index) => 
    <div id={`slide${sectionKey}${index}`} key={index} className={`${disable ? 'disable' : ''}`}
      css={css`
        height: 100;
        width: 100%;
        background-image: url('${image}');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      `}
    />
  )
)

export default Slide