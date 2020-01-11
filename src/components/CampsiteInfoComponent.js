import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
    
function RenderSelectedCampsite({campsite}) {
    if (campsite) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardText>{campsite.description}</CardText>
                    </CardBody> 
                </Card>
            </div>
        )
    }
    return <div />;
}

function RenderComments({comments}) {
    if (comments) {
        return (
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {comments.map(comment => {
                    return (
                        <div key={comment.id}>
                            <div>{comment.text}</div>
                            <div className="pb-3">
                                --{comment.author}, {' '} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

function CampsiteInfo(props) {
    if (props.campsite) {
        return (
            <div className="container">
                <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/directory'>Directory</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </div>
                <h2>{props.campsite.name}</h2>
                <hr />
                <div className="row">
                    <RenderSelectedCampsite campsite={props.campsite} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        )
    }
    return <div />
}


export default CampsiteInfo;