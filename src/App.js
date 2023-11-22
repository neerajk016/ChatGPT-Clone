import React from 'react'
import "./app.css"
import Qtype from "./components/Qtype"
import Solution from "./components/Solution"
import { Configuration, OpenAIApi } from "openai";
import {arrayItems} from "./aioptions";
import { useState } from 'react';
export default function App() {
  //getting api key
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_VITE_Open_AI_key,
  });

  //api
  const openai = new OpenAIApi(configuration);

  //states
  const [option,setoption]=useState({});
  const [ input,setinput]=useState("");
  const [result,setresult]=useState("");

  //functions
  const selectoption=(option)=>{
    setoption(option)
  }

  const dostuff=async()=>{


    let object = { ...option, prompt: input };
    const response = await openai.createCompletion(object);
    setresult(response.data.choices[0].text);

  }
 
  return (
    <div>
      <h1>NK gpt</h1>
      {Object.values(option).length===0 ?<Qtype arrayItems={arrayItems} selectoption={selectoption}/>:<Solution dostuff={dostuff} setinput={setinput} result={result}/>}
    </div>
  )
}
