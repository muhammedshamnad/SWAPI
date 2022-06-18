import React from "react";
import { Card, Col, Empty, Layout, notification, Row, Typography } from "antd";
import { inject, observer } from "mobx-react";

import FilmCard from "../../Components/FilmCard";
import PeopleCard from "../../Components/PeopleCard";
import ShipCard from "../../Components/ShipCard";
import utility from "../../Global/utility";

function Saved(props: any) {
    const {savedStore} = props;

    

    const removeData = (index: number) => {
        savedStore.removeData(index);
        utility?.openNotificationDanger('Item removed!!!', 'Item is removed from the saved list.')
    }
    console.log('here', savedStore?.data);
    return  <Layout.Content>
    <div className="site-card-wrapper">
        {savedStore?.data?.length ?
        <Row gutter={16}>
            {savedStore?.data?.map((item: any, index: number) => {
                switch(item?.type) {
                    case 'film':  return <FilmCard film={item} showSave={false} removeData={removeData} index={index}/>
                    case 'person': return <PeopleCard person={item} showSave={false} removeData={removeData} index={index} />
                    case 'ship': return <ShipCard ship={item} showSave={false} removeData={removeData} index={index} />
                }
            })} 
        </Row> :
        <div className="d-flex align-items-center justify-content-center" style={{marginTop: '250px'}}>
        <Empty description={ <Typography.Text strong>Please save an item to list.</Typography.Text>} />
        </div>
        }

    </div>
</Layout.Content>
        
}

export default inject('savedStore')(observer(Saved)) 