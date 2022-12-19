import React,{useState} from 'react'
import "./carousel3.css"
import {  ArrowBackIosRounded, ArrowForward, ArrowRight } from '@mui/icons-material'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

interface Carousel3Props {
    items:number;
}   

export const Carousel3: React.FC<Carousel3Props> = (props) => {
    const {items} = props;
    const num = 5;
    
    const [state,setState] = useState<{page:number}>({
        page:1,
    })

    const arr = [1,2,3,4,5,6,7,8,9,10]
    const allItem:HTMLCollectionOf<Element> = document.getElementsByClassName("product-card");
   
    /* 
        0 1 2 3 4
        5 6 7 8 9 
   
        10 - 5 - i
        */  
   
    //page * num +i
    let counter = 0;
    for (let i = 0; i < allItem.length; i++) {
        if(counter === 5) {
            counter = 0;
            //console.log(((state.page-1)*num)+i)
            allItem[((state.page-1)*num)+i]?.classList.add("hidden");
        }
        else {
            allItem[((state.page-1)*num)+i]?.classList.remove("hidden");
        }
        // console.log("THIS IS COUNTER =>",counter)
        counter++;
    }

    return (
    <div className="product">
         <button className="pre-btn"><ArrowForward/></button>
        <button className="nxt-btn"><ArrowRight/></button> 
        <div className="product-container" id="container">
        {arr.map((_,i) => (
        <div className='product-card hidden' key={i}>
        <div className="product-image">
            <span className="discount-tag">{i} off</span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx18_Ns5JkA4LN4pDZ8mppYoIAPKDAl8rhpxQYlDtp&s" className="product-thumb" alt=""/>
        </div>
        </div>
        ))}
        </div>
    </div>
    )
}