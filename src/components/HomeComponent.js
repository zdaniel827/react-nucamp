import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import { Loading } from "./LoadingComponent";

function RenderCard({ item, isLoading, errMess }) {
  if (isLoading) {
    return <Loading />;
  }

  if (errMess) {
    return <h4>{errMess}</h4>;
  }

  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
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
        <div className="col-md m-1">
          <RenderCard
            item={props.campsites}
            isLoading={props.campsitesLoading}
            errMess={props.campsitesErrMess}
          />
        </div>
        <div className="col-md m-1">
          <RenderCard item={props.promotions} />
        </div>
        <div className="col-md m-1">
          <RenderCard item={props.partners} />
        </div>
      </div>
    </div>
  );
}

export default Home;
