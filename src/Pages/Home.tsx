import React, { ChangeEvent, useEffect, useState } from "react";
import { Avatar } from "../components/Avatar";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { DropDown } from "../components/DropDown";
import { Paper } from "../components/Paper";
import { Backdrop } from "../components/backdrop/Backdrop";
import { Accordion } from "../components/accordion/Accordion";
import { Dialog } from "../components/dialog/Dialog";
import { DialogHeader } from "../components/dialog/DialogHeader";
import { Typography } from "../components/Typography/Typography";
import { DialogContent } from "../components/dialog/DialogContent";
import { Divider } from "../components/Divider/Divider";
import { LinearProgress } from "../components/LinearProgress/LinearProgress";
import Pagination from "../components/Pagination/Pagination"
import CheckBox from "../components/CheckBox/CheckBox";
import Drawer from "../components/Drawer/Drawer";
import { Select } from "../components/Select/Select";
import { SelectOption } from "../components/Select/SelectOption";
import { Navbar } from "../components/Navbar/Navbar";
import { PencilStroke } from "../components/Loader/PencilStroke";
import { Carousel } from "../components/Carousel/Carousel";
import { Carousel2 } from "../components/Carousel/Carousel2";
import { Carousel3 } from "../components/Carousel/Carousel3";
import Toast from "../components/Toast/Toast";
import { SearchBox } from "../components/SearchBox/SearchBox";
import AnimateTabJS  from "../components/AnimateTabBar/AnimateTab.jsx";
import TextField from "../components/TextField/TextField";
import { TextFieldGoogle } from "../components/TextFieldGoogle/TextFieldGoogle";
import { SelectTextField } from "../components/SelectTextFIeld/SelectTextField";

interface State {
  loading : boolean;
  open    : boolean;
  currentPage : number;
  checked : boolean;
  drawerOpen  : boolean;
  select    : number;
  search : string;
}

function Home() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Hello");
  };

  const send = () => {
    console.log("HI");
  };

  const [state,setState] = useState<State>({
    loading:true,
    open:false,
    currentPage:1,
    checked:true,
    drawerOpen:false,
    select:0,
    search:""
  })


  const handleInput = (e:React.ChangeEvent<HTMLInputElement>):void => {
    setState(prev=>({...prev, search:e.target.value}));

  }

  const [currentPage,setCurrentPage] = useState(0)
  useEffect(() => {
  
    setState(prev=>({...prev,loading:true}))

    setTimeout(() => {
      setState(prev=>({...prev,loading:false}))
    }, 5000);

  }, [])
  
  const handleChangePage = (currentPage:number):void => {
    setState(prev=>({...prev,currentPage:currentPage}));
  }

  const handleChangeSelect = (e:React.ChangeEvent<HTMLInputElement>) => {
      setState(prev=>({...prev,select:Number(e.target.value)}))
  }
  //console.log(state.select)

  const click = () => {
    new Toast({
      text: "Hello",
      position: "right",
    })     
  }
  


  return (
    <>
    <Navbar className="bg-red-500">ghello</Navbar>
    <Container maxWidth={50}>
      <DropDown id="drop2">
        
      </DropDown>
      <Button type="click" onClick={() => click()}>
        click
      </Button>
      {/* <Backdrop loading={state.loading}/> */}
      
     {/*  <Accordion>

</Accordion> */}
    
          <Button type="click" onClick={() => setState(prev=>({...prev,open:true}))}>
            <Typography variant="body1">Open</Typography>
          </Button>

      <Dialog open={state.open} setState={setState} >
        <DialogHeader className="justify-between">
          <Typography variant="h6">hello</Typography>
          <Typography variant="h2"></Typography>
        </DialogHeader>
        <DialogContent>
          <Typography> hello</Typography>
        </DialogContent>
        <DialogContent>

          <Button variant="contained" type="click" onClick={() => setState(prev=>({...prev,open:false}))}>
            <Typography >Close</Typography>
          </Button>
        </DialogContent>
      </Dialog>

      <Button type="click" variant="contained" onClick={() => setState(prev=>({...prev,drawerOpen:true}))}>
        Open Dialog
      </Button>

     <Drawer anchor="left" open={state.drawerOpen}>
      <div className="flex flex-col">
      Hello
      <p onClick={() => setState(prev=>({...prev,drawerOpen:false}))}>hi</p>
      </div>
     </Drawer>
      
      {/* <Typography>hello</Typography>
      <Select label="Choose Your Choice" onChange={handleChangeSelect}>
      <SelectOption value={1}>hello</SelectOption>
      <SelectOption value={2}>hello</SelectOption>
      <SelectOption value={3}>hello</SelectOption>
      <SelectOption value={4}>hello</SelectOption>
    </Select> */}

      <br />
      <br />
      <Accordion>

      </Accordion>
      {/* <Pagination 
      setState={setState}
      pagesCount={20}
      currentPage={state.currentPage}
      ></Pagination>
      
    <CheckBox  checked={state.checked} onChange={() => setState(prev => ({...prev,checked:!prev.checked}))} /> */}

    {/* <TextField value={2} type="filled" onChange={() => {}} /> */}

    {/* <Carousel/> */}
    <TextFieldGoogle/>
    {/* <Carousel2/> */}
    {/* <Carousel3 items={5}/> */}
    
    <SearchBox value={state.search} onChange={handleInput} />
    </Container>
    <AnimateTabJS/>
    
    {/* <SelectTextField options={options} /> */}
    </>
  );
}

export default Home;

const options = [
  {label: "First", value: 1},
  {label: "Second", value: 2},
  {label: "Third", value: 3},
  {label: "Forth", value: 4},
  {label: "Fifth", value: 5},
]