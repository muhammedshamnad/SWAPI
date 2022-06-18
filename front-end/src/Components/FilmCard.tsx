import React from "react";
import { Button, Card, Col, Layout, Row, Typography } from "antd";
import RenderItem from "./RenderItem";

function FilmCard(props: any) {
    const { film, showSave, saveData, removeData, index  } = props;
    return (
        <Col span={8} lg={5} md={8} sm={8} xs={24} style={{ margin: '10px' }}>
            <Card style={{ minHeight: "200px" }} className="peopleCard flex" title={film?.title || ''} bordered={false}>
                <Typography.Text className="d-flex">Director: {film?.director}</Typography.Text>
                <Typography.Text className="d-flex">Producer: {film?.producer}</Typography.Text>
                <Typography.Text className="d-flex">Release Date: {film?.release_date}</Typography.Text>
                <RenderItem condition={showSave}>
                        <Button onClick={() => saveData({ ...film, type: 'film' })}>Save</Button>
                    </RenderItem>
                    <RenderItem condition={!showSave}>
                        <Button onClick={() => removeData(index)}>Remove</Button>
                    </RenderItem>
            </Card>
        </Col>
    )
}
export default FilmCard