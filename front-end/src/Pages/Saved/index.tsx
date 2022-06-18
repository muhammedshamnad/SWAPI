import React from "react";
import { Card, Col, Layout, Row, Typography } from "antd";
import { inject, observer } from "mobx-react";

import FilmCard from "../../Components/FilmCard";
import PeopleCard from "../../Components/PeopleCard";
import ShipCard from "../../Components/ShipCard";

function Saved(props: any) {
    const {savedStore} = props;
    const removeData = (index: number) => {
        savedStore.removeData(index);
    }
    console.log('here', savedStore?.data);
    return  <Layout.Content>
    <div className="site-card-wrapper">
        <Row gutter={16}>
            {savedStore?.data?.map((item: any, index: number) => {
                switch(item?.type) {
                    case 'film':  return <FilmCard film={item} showSave={false} removeData={removeData} index={index}/>
                    case 'person': return <PeopleCard person={item} showSave={false} removeData={removeData} index={index} />
                    case 'ship': return <ShipCard ship={item} showSave={false} removeData={removeData} index={index} />
                }
            })} 
        </Row>
    </div>
</Layout.Content>
        
}

export default inject('savedStore')(observer(Saved)) 