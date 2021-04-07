/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import { css } from '@emotion/react'
import SliderContent from './SliderContent'
import Slide from './Slide'
import Arrow from './Arrow'

/**
 * @function Slider
 */
const Slider = props => {
  const getWidth = () => window.innerWidth
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45
  })

  const { translate, transition, activeIndex } = state

  const { slides } = props;

  const nextSlide = () => {
    if (activeIndex === slides.length - 1) {
      return;
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth()
    })
  }

  const prevSlide = () => {
    if (activeIndex === 0) {
      return;
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth()
    })
  }
  
  return (
    <div css={SliderCSS}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * slides.length}
      >
        {props.slides.map((slide, i) => (
          <Slide key={slide.title + i}  sectionKey={i} disable={activeIndex !== i} content={slide.images} />
        ))}
      </SliderContent>

      <Arrow direction="left" handleClick={prevSlide} disable={activeIndex === 0} />
      <Arrow direction="right" handleClick={nextSlide} disable={activeIndex === slides.length-1} />

    </div>
  )
}

const SliderCSS = css`
  position: relative;
  height: 100vh;
  width: auto;
  margin: 0 auto;
  overflow: hidden;
`
export default Slider