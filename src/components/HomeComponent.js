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
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform } from "react-animation-components";

function RenderCard({ item, isLoading, errMess }) {
  if (isLoading) {
    return <Loading />;
  }

  if (errMess) {
    return <h4>{errMess}</h4>;
  }

  return (
    <FadeTransform
      in
      transformProps={{
        exitTransform: "scale(0.5) translateY(50%)"
      }}
    >
      <Card>
        <CardImg src={baseUrl + item.image} alt={item.name} />
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    </FadeTransform>
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
          <RenderCard
            item={props.promotions}
            isLoading={props.promotionLoading}
            errMess={props.promotionErrMess}
          />
        </div>
        <div className="col-md m-1">
          <RenderCard
            item={props.partners}
            isLoading={props.promotionLoading}
            errMess={props.promotionErrMess}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
