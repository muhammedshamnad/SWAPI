import React from "react";
import { Button, Card, Col, Layout, Row, Typography } from "antd";
import PeopleCard from "./PeopleCard";

function ShowPeople(props: any) {
    const { people, saveData } = props;
   
    return (
        <Layout.Content>
            <div className="site-card-wrapper">
                <Row gutter={16}>
                    {people?.map((person: any, index: number) => (
                  <PeopleCard showSave={true} person={person} saveData={saveData} index={index}/>
                ))}
                </Row>
            </div>
        </Layout.Content>
    )
}

export default ShowPeople