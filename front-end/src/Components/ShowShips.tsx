import { Card, Col, Layout, Row, Typography } from "antd";
import React from "react";
import ShipCard from "./ShipCard";

interface shipInterface {
    name: string
    model: string
    manufacturer: string
    length: string
    max_atmosphering_speed: string
    cargo_capacity: string
    consumables: string
    cost_in_credits: string
    crew: string
    passengers: string
    starship_class: string
}

function ShowShips(props: any) {
    const { ships, saveData  } = props;
    return (
        <Layout.Content>
            <div className="site-card-wrapper">
                <Row gutter={16}>
                    {ships?.map((ship: shipInterface, index: number) => (
                       <ShipCard showSave={true} ship={ship} saveData={saveData} index={index}/>
                    ))}
                </Row>
            </div>
        </Layout.Content>
    )
}

export default ShowShips

