import React from 'react'
import "./TextFieldGoogle.css"
interface TextFieldGoogleProps {

}

export const TextFieldGoogle: React.FC<TextFieldGoogleProps> = ({}) => {
    return (
    <>  
    <div className="container">
  <form>
    <div className="group">      
      <input type="text" required/>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Name</label>
    </div>
      
    <div className="group">      
      <input type="text" required/>
      <span className="highlight"></span>
      {<span className="bar"></span>}
      <label>Email</label>
    </div>
  </form>
      
  
</div>
    </>
    )
}