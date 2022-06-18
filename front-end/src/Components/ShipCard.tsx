import React from "react";
import { Button, Card, Col, Typography } from "antd";
import RenderItem from "./RenderItem";

function ShipCard(props: any) {
    const { ship, saveData, showSave, removeData, index } = props;
    return (
        <Col span={8} lg={5} md={8} sm={8} xs={24} style={{ margin: '10px' }}>
            <Card style={{ minHeight: "300px" }} className="peopleCard flex" title={ship?.name || ''} bordered={false}>
                <Typography.Text className="d-flex">Model: {ship?.model}</Typography.Text>
                <Typography.Text className="d-flex">Manufacturer: {ship?.manufacturer}</Typography.Text>
                <Typography.Text className="d-flex">Length: {ship?.length}</Typography.Text>
                <Typography.Text className="d-flex">Max Speed: {ship?.max_atmosphering_speed}</Typography.Text>
                <Typography.Text className="d-flex">Capacity: {ship?.cargo_capacity}</Typography.Text>
                <Typography.Text className="d-flex">Crew: {ship?.crew}</Typography.Text>
                <Typography.Text className="d-flex">Passengers: {ship?.passengers}</Typography.Text>
                <Typography.Text className="d-flex">Starship Class: {ship?.starship_class}</Typography.Text>
                <RenderItem condition={showSave}>
                    <Button onClick={() => saveData({ ...ship, type: 'ship' })}>Save</Button>
                </RenderItem>
                <RenderItem condition={!showSave}>
                    <Button onClick={() => removeData(index)}>Remove</Button>
                </RenderItem>
            </Card>
        </Col>
    )
}
export default ShipCard