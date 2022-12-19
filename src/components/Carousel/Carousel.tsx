import React from 'react'
import "./carousel.css"
interface CarouselProps {

}

export const Carousel: React.FC<CarouselProps> = ({}) => {
    
    let slidePosition = 0;
    const slides = document.getElementsByClassName('carousel__item');
    const totalSlides = slides.length;
    //@ts-ignore
    const nextBtn = document?.getElementById('carousel__button--next');
    if(nextBtn != null) nextBtn.addEventListener("click", () => {moveToNextSlide();});
    //@ts-ignore
    const prevBtn = document?.getElementById('carousel__button--prev');
    if(prevBtn != null) prevBtn.addEventListener("click", () => {moveToPrevSlide();});

    function updateSlidePosition() {
    //@ts-ignore
    for (let slide of slides) {
        slide.classList.remove('carousel__item--visible');
        slide.classList.add('carousel__item--hidden');
    }

    slides[slidePosition].classList.add('carousel__item--visible');
    }

    function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    updateSlidePosition();
    }

    function moveToPrevSlide() {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }

    updateSlidePosition();
    }

    return (
    <>
    <div className="carousel">
      <div className="carousel__item carousel__item--visible">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx18_Ns5JkA4LN4pDZ8mppYoIAPKDAl8rhpxQYlDtp&s" />
      </div>
      <div className="carousel__item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx18_Ns5JkA4LN4pDZ8mppYoIAPKDAl8rhpxQYlDtp&s" />
      </div>
      <div className="carousel__item">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png" />
      </div>

      <div className="carousel__actions">
        <button id="carousel__button--prev" aria-label="Previous slide">previous</button>
        <button id="carousel__button--next" aria-label="Next slide">next</button>
      </div>
    </div>
    </>
    )
}