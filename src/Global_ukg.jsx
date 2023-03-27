import React, { useEffect, useState } from "react";
import axios from "axios";
import { filter } from "./functions";
import UniversalKnowledgeGraph from "knowledge-graph-byjus/dist/components/UniversalKnowledgeGraph";
import { Descriptions } from "antd";

export default function Global_ukg() {
  const queryParameters = new URLSearchParams(window.location.search);

  const [apiData, setApiData] = useState(null);
  const data = [queryParameters.get("concept_id")];

  for (let i = 0; i < data.length; i++) {
    if (data[i] === null || data[i] === undefined) data[i] = "";
  }

  const concept_id = filter(data[0]);

  const requestHeader = {
    level: 10,
    add_successor: true,
    add_predecessor: true,
  };

  console.log(requestHeader);

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
        console.log(res.data);
        if (res.data === null || res.data === undefined) {
          alert("NO DATA CAME ERROR");
        } else setApiData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (data[0] === "") {
    return <div>No concept id given</div>;
  } else if(apiData===null){
    return (<></>)
  }else
    return (
      <div>
        <Descriptions bordered >
          <Descriptions.Item label="Concept Name"> {apiData["concept_name"]}</Descriptions.Item>
          <Descriptions.Item label="Concept Id" style={{width:'90px'}}>{apiData["concept_id"]}</Descriptions.Item>
          <Descriptions.Item label="Description">{apiData["concept_description"]}</Descriptions.Item>
        </Descriptions>
        <UniversalKnowledgeGraph
          apiData={apiData["raw_concept"]}
          nodeName="name"
          nodeDesc="description"
        />
      </div>
    );
}
