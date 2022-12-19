import { ArrowBackOutlined, ArrowForward } from '@mui/icons-material'
import React from 'react'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import "./carousel2.css"
import Carousel from "react-multi-carousel";
interface Carousel2Props {

}
/*    <button className="pre-btn"><ArrowForward/></button>
        <button className="nxt-btn"><ArrowBackIosOutlinedIcon/></button> */
export const Carousel2: React.FC<Carousel2Props> = ({}) => {

    const arr = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,1,2,3,4,5,6,7]
    //@ts-ignore
    const productContainers = [...document.querySelectorAll<HTMLInputElement>('.product-container')!];
    //@ts-ignore
    const nxtBtn = [...document.querySelectorAll<HTMLInputElement>('.nxt-btn')!];
    //@ts-ignore
    const preBtn = [...document.querySelectorAll<HTMLInputElement>('.pre-btn')!];
    
    
    const test = async() => {
        
        Promise.all(productContainers.map((item,i) => {
            let containerDimensions = item.getBoundingClientRect();
            let containerWidth = containerDimensions.width;

            console.log(containerWidth)
            nxtBtn[i].addEventListener('click', () => {
                item.scrollLeft += containerWidth/(5-3.5);
            })
        
            preBtn[i].addEventListener('click', () => {
                item.scrollLeft -= containerWidth/(5-3.5);
            })
        }))

    }

    test();

    return (
        <section className="product" draggable={true}> 
        <button className="pre-btn"><ArrowForward/></button>
        <button className="nxt-btn"><ArrowBackIosOutlinedIcon/></button> 
        <div className="product-container">
        {arr.map((_,i) => (
        <div className="product-card" key={i}>
              <div className="product-image">
                  <span className="discount-tag">50% off</span>
                  <img draggable={true} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx18_Ns5JkA4LN4pDZ8mppYoIAPKDAl8rhpxQYlDtp&s" className="product-thumb" alt=""/>
                  <button className="card-btn">add to wishlist</button>
              </div>
              <div className="product-info">
                  <h2 className="product-brand">brand {i}</h2>
                  <p className="product-short-description">a short line about the cloth..</p>
                  <span className="price">$20</span><span className="actual-price">$40</span>
              </div>
      </div>
        ))}
        </div>
    </section>
    )
}