import React from 'react' 
import {Carousel} from 'antd'

const MainCarousel = () => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
      };
  return (
    <>
        <div>MainCarousel</div>
        <Carousel afterChange={onChange} autoplay>
      <div>
        <h3 >1</h3>
      </div>
      <div>
        <h3 >2</h3>
      </div>
      <div>
        <h3 >3</h3>
      </div>
      <div>
        <h3 >4</h3>
      </div>
    </Carousel>
    </>

  )
}

export default MainCarousel