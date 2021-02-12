import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderDish({ dishes }) {
    if (dishes != null)
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dishes.image} alt={dishes.name} />
                    <CardBody>
                        <CardTitle>{dishes.name}</CardTitle>
                        <CardText>{dishes.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    else
        return (
            <div></div>
        )
}

function RenderComments({ dishDetail }) {
    if (dishDetail != null) {
        return (
            <div className="col-12 col-md-5 m-1">
                <h5>Comments</h5>
                <ul className="list-unstyled">
                    {dishDetail.map(dishDetail =>
                        <li>
                            <p>{dishDetail.comment}</p>
                            <p>-- {dishDetail.author}, &nbsp;
                                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(dishDetail.date)))}</p>
                            <p></p>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

const DishDetail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/menu">Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>{props.dishes.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dishes.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <RenderDish dishes={props.dishes} />
                <RenderComments dishDetail={props.dishDetail} />
            </div>
        </div>
    )

}

export default DishDetail;