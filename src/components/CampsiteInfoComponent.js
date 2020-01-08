import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
    
function RenderSelectedCampsite({campsite}) {
    if (campsite) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
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
    if (props.selectedCampsite) {
        return (
            <div className="container">
                <div className="row">
                    <RenderSelectedCampsite campsite={props.selectedCampsite} />
                    <RenderComments comments={props.selectedCampsite.comments} />
                </div>
            </div>
        )
    }
    return <div />
}


export default CampsiteInfo;