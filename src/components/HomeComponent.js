import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function RenderCard({ item }) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    )
}

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem active>Home</BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </div>
                <h2>Home</h2>
                <hr />
           <div className="row">
               <div className="col-md m-1"><RenderCard item={props.campsites} /></div>
               <div className="col-md m-1"><RenderCard item={props.promotions} /></div>
               <div className="col-md m-1"><RenderCard item={props.partners} /></div>
           </div>
        </div>
    )
}

export default Home;