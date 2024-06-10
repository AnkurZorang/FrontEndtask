"use client";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Tbl from './components/table';
import FrmDialog from "./components/frm";
import Nev from "./components/navbar";
import axios from 'axios';
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const [statee, setnewStatee]= useState(false);
   const [newAPI,setnewAPI] = useState([]);
   const [temp,setTemp] = useState([]);
   
   useEffect(()=>{
      setnewStatee(false);
     const gettheAPI=async ()=>{
      const fdata = await axios.get("http://localhost:8000/data");
      const finaldata=fdata.data;
      setnewAPI(finaldata);
      setTemp(finaldata)
    }
      gettheAPI();
   },[statee])
  return (
    <div>
      <Nev data={newAPI} setTemp={setTemp}></Nev>
      <div><Tbl row={temp} />
       <FrmDialog onchangestate={setnewStatee}/>

    </div>
    </div>
  );
}
