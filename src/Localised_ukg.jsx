import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { filter } from './functions';
import UniversalKnowledgeGraph from 'knowledge-graph-byjus/dist/components/UniversalKnowledgeGraph';

function Localised_ukg() {
  const queryParameters = new URLSearchParams(window.location.search)

  const [apiData,setApiData]=useState(null)
  const data=[queryParameters.get('chapter_id'),queryParameters.get('board'),queryParameters.get('grade'),queryParameters.get('subject')]

  for(let i=0;i<data.length;i++)
  {
    if(data[i]===null || data[i]===undefined)
    data[i]=""
  }

  const chapter_id=filter(data[0])
  
  const requestHeader={
    "board": filter(data[1]),
    "grade": filter(data[2]),
    "subject": filter(data[3]),
    "cohort": null,
    "level": 10,
    "add_successor": true,
    "add_predecessor": true
  }

  console.log(requestHeader)

  useEffect(()=>{
  //   axios
  // .get("/db/data.json")
  // .then((res) => {
  //   console.log(res.data["concepts"])
  //   setApiData(res.data)
  // })
  // .catch((err) => console.log(err));

  axios.get(`https://ukg.prep.tllms.com/ukg/api/v1/knowledge_graph/${chapter_id}/`,{params:requestHeader}).then((res)=>{
    console.log(res.data)
    if(res.data===null || res.data===undefined) {
        alert('NO DATA CAME ERROR');
    }
    else
    setApiData(res.data.concepts)
  }).catch((err) => console.log(err));
  },[])

  if(data[0]==="") {
    return <div>No concept id given</div>
  }else if(apiData===null){
    return (<></>)
  }
  else
  return (
    <UniversalKnowledgeGraph apiData={apiData}/>
  );
}

export default Localised_ukg;
