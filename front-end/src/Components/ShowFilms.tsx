import { Card, Col, Layout, Row, Typography } from "antd";
import React from "react";
import FilmCard from "./FilmCard";

function ShowFilms(props: any) {
    const { films, saveData  } = props;
    return (
        <Layout.Content>
        <div className="site-card-wrapper">
            <Row gutter={16}>
                {films?.map((film: any, index: number) => (
                    <FilmCard showSave={true} film={film} saveData={saveData} index={index}/>
            ))}
            </Row>
        </div>
    </Layout.Content>
    )
}

export default ShowFilms