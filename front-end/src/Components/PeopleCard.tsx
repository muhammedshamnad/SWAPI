import React from "react";
import { Button, Card, Col, Typography } from "antd";
import RenderItem from "./RenderItem";

function ShipCard(props: any) {
    const { person, saveData, removeData, showSave, index } = props;
    return (
      
            <Col span={8} lg={5} md={8} sm={8} xs={24} style={{ margin: '10px' }}>
                <Card  className="peopleCard flex" title={person?.name || ''} bordered={false}>
                    <Typography.Text className="d-flex">Height: {person?.height}</Typography.Text>
                    <Typography.Text className="d-flex">Gender: {person?.gender}</Typography.Text>
                    <Typography.Text className="d-flex">Mass: {person?.mass}</Typography.Text>
                    <Typography.Text className="d-flex">Eye-Color: {person?.eye_color}</Typography.Text>
                    <Typography.Text className="d-flex">Hair-Color: {person?.hair_color}</Typography.Text>
                    <RenderItem condition={showSave}>
                        <Button onClick={() => saveData({ ...person, type: 'person' })}>Save</Button>
                    </RenderItem>
                    <RenderItem condition={!showSave}>
                        <Button onClick={() => removeData(index)}>Remove</Button>
                    </RenderItem>
                </Card>
            </Col>
    )
}
export default ShipCard