import React, { useEffect, useState } from 'react'
import "./pagination.css"
interface PaginationProps {
    currentPage : number;
    pagesCount:number
    setState : React.Dispatch<React.SetStateAction<any>>
}

interface CurrentPage {
    currentPage?:number
}

const Pagination: React.FC<PaginationProps> = (props) => {
    const {currentPage,setState,pagesCount} = props
    const numberOfPages:(number|string)[] = [];
    
    for (let i = 1; i <= pagesCount; i++) {
        numberOfPages.push(i);
    }
    
    const [arrOfCurrButtons, setArrOfCurrButtons] = useState<any[]>([])
    
    useEffect(() => {
        let tempNumberOfPages = [...arrOfCurrButtons]

        let dotsInitial = '...'
        let dotsLeft = '... '
        let dotsRight = ' ...'
        if (numberOfPages.length < 6) {
          tempNumberOfPages = numberOfPages
        }
    
        else if (currentPage >= 1 && currentPage <= 3) {
          tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length]
          
        }
    
        else if (currentPage === 4) {
          const sliced = numberOfPages.slice(0, 5)
          tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length]
        }
    
        else if (currentPage > 4 && currentPage < numberOfPages.length - 2) {               // from 5 to 8 -> (10 - 2)
          const sliced1 = numberOfPages.slice(currentPage - 2, currentPage)                 // sliced1 (5-2, 5) -> [4,5] 
          const sliced2 = numberOfPages.slice(currentPage, currentPage + 1)                 // sliced1 (5, 5+1) -> [6]
          tempNumberOfPages = ([1, dotsLeft, ...sliced1, ...sliced2, dotsRight, numberOfPages.length]) // [1, '...', 4, 5, 6, '...', 10]
        }
        
        else if (currentPage > numberOfPages.length - 3) {                 // > 7
          const sliced = numberOfPages.slice(numberOfPages.length - 4)       // slice(10-4) 
          tempNumberOfPages = ([1, dotsLeft, ...sliced])                        
        }
        
        else if (String(currentPage) === dotsInitial) {
          setState((prev:CurrentPage)=>({...prev,currentPage:arrOfCurrButtons[arrOfCurrButtons.length-3] + 1}))
        }
        else if (String(currentPage) === dotsRight) {
          setState((prev:CurrentPage)=>({...prev,currentPage:arrOfCurrButtons[3] + 2}))
        }
          
        else if (String(currentPage) === dotsLeft) {
          setState((prev:CurrentPage)=>({...prev,currentPage:arrOfCurrButtons[3] - 2}))
        }
        else {
          setState((prev:CurrentPage)=>({...prev,currentPage:currentPage}))
        }
        
        setArrOfCurrButtons(tempNumberOfPages)
    }, [currentPage])
    

    
    return (
    <>
    <div className="pagination-container">
    <a
      href="#"
      className={`${currentPage === 1 ? 'disabled' : ''}`}
      onClick={() => setState((prev:CurrentPage) => ({...prev,currentPage:(prev.currentPage! <= 1 ? prev.currentPage : prev.currentPage! - 1)}))}
      /* onClick={() => onChange(prev => prev <= 1 ? prev : prev - 1)} */
    >
      Prev
    </a>

    {arrOfCurrButtons.map(((item, index) => {
      return <a
        href="#"
        key={index}
        className={`${currentPage === item ? 'active' : ''}`}
        onClick={() => setState((prev:CurrentPage)=>({...prev,currentPage:item}))}
      >
        {item}
      </a>
    }))}

    <a
      href="#"
      className={`${currentPage === numberOfPages.length ? 'disabled' : ''}`}
      /* onClick={() => setCurrentButton(prev => prev >= numberOfPages.length ? prev : prev + 1)} */
      onClick={() => setState((prev:CurrentPage) => ({...prev,currentPage:(prev.currentPage! >= numberOfPages.length ? prev.currentPage : prev.currentPage! + 1)}))}
    >
      Next
    </a>
  </div>
    </>
    )
}

export default Pagination