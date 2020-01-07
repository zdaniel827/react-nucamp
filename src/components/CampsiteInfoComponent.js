import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class CampsiteInfo extends Component{
    
    renderSelectedCampsite(campsite) {
        if (campsite) {
            return (
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody> 
                </Card>
            )
        }
        return <div />;
    }

    renderComments(comments) {
        if (comments) {
            return (
                <div>
                    <h4>Comments</h4>
                    {this.props.selectedCampsite.comments.map(comment => {
                        return (
                            <div key={comment.id}>
                                <div>{comment.text}</div>
                                <div className="pb-3">
                                    {`--${comment.author}, ${new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}`}
                                </div>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedCampsite(this.props.selectedCampsite)}
                    </div>
                    <div className="col-md-5 m-1">{this.renderComments(this.props.selectedCampsite)}</div>
                </div>
            </div>
        )
    }
}

export default CampsiteInfo;