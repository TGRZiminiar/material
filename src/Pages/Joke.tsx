import React from 'react'
import "./Joke.css"
// import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';

export const Joke: React.FC = () => {






    return (
    <div>
        <div className="banner">
            <nav className="flex justify-between p-2 md:p-7 bg-indigo-400 bg-transparent">
                <div className="text-3xl md:text-5xl pl-[6rem] flex">Port<div className="text-rose-500 font-bold">Folio</div></div>
                 
                <div className="flex gap-[3rem] md:gap-[5rem] pr-[6rem] self-center">
                    <div className="text-1xl md:text-2xl hover:text-red-400 cursor-pointer self-center"> Home</div>
                    <div className="text-1xl md:text-2xl hover:text-red-400 cursor-pointer">About Us</div>
                    <div className="text-1xl md:text-2xl hover:text-red-400 cursor-pointer">Service</div>
                    <div className="text-1xl md:text-2xl hover:text-red-400 cursor-pointer">Skills</div>
                    <div className="text-1xl md:text-2xl hover:text-red-400 cursor-pointer">Contacts</div>
                </div>
            </nav>

            <div className="content">
            <h4>Hello, my name is</h4>
			<h1>Tahmid <span>Ahmed</span></h1>
			<h3>I'am a Web Developer.</h3>
			<div className="newslatter">
				<form>
					<input type="email" name="email" id="mail" placeholder="Enter Your Email"/>
					<input type="submit" name="submit" value="Lets Start"/>
				</form>
			</div>
            </div>


        </div>


    </div>
    )
}