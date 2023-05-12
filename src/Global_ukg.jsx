import React, { useEffect, useState } from "react";
import axios from "axios";
import { filter, isEmpty } from "./utils/functions";
import UniversalKnowledgeGraph from "knowledge-graph-byjus/dist/components/UniversalKnowledgeGraph";
import { Descriptions } from "antd";
import Refresh from "./components/Refresh/Refresh";

export default function Global_ukg({loaderTrigger}) {
  const queryParameters = new URLSearchParams(window.location.search);

  const [apiData, setApiData] = useState(null);
  const [refreshPage,setRefreshPage]=useState(true)
  const data = [queryParameters.get("concept_id")];

  for (let i = 0; i < data.length; i++) {
    if (isEmpty(data[i])) data[i] = "";
  }

  const concept_id = filter(data[0]);

  const requestHeader = {
    level: 10,
    add_successor: true,
    add_predecessor: true,
  };

  // console.log(requestHeader);

  useEffect(() => {
    //   axios
    // .get("/db/data.json")
    // .then((res) => {
    //   console.log(res.data["concepts"])
    //   setApiData(res.data)
    // })
    // .catch((err) => console.log(err));

    axios
      .get(
        `https://ukg.prep.tllms.com/ukg/api/v1/knowledge_graph/universal/${concept_id}/`,
        { params: requestHeader }
      )
      .then((res) => {
        loaderTrigger(false)
        // console.log(res.data);
        if (isEmpty(res.data) ) {
          setRefreshPage(true)
        }
        else if(isEmpty(res.data["raw_concept"]))
        alert('API had no nodes or edges')
        else setApiData(res.data.raw_concept);
      })
      .catch((err) => console.log(err));
  }, []);

  if (data[0] === "") {
    return <div>No concept id given</div>;
  } else if(apiData===null){
    return (<></>)
  }
  else if(refreshPage)
  return <Refresh/>
  else
    return (
      <div>
        <Descriptions bordered >
          <Descriptions.Item label="Concept Name"> {apiData["concept_name"]}</Descriptions.Item>
          <Descriptions.Item label="Concept Id" style={{width:'90px'}}>{apiData["concept_id"]}</Descriptions.Item>
          <Descriptions.Item label="Description">{apiData["concept_description"]}</Descriptions.Item>
        </Descriptions>
        <UniversalKnowledgeGraph
          apiData={apiData}
          nodeName="name"
          nodeDesc="description"
          rawNodeGraph={true}
          preSelectedNodeId={apiData["raw_concept"]["concept_id"]}
        />
      </div>
    );
}
