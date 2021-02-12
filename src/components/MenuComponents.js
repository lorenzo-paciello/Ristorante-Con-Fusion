import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import { Link } from 'react-router-dom';

function RenderMenuItem({ dishes }) {
    return (
        <Card>
            <Link to={`/menu/${dishes.id}`}>
                <CardImg width="100%" src={dishes.image} alt={dishes.name} />
                <CardImgOverlay>
                    <CardTitle>{dishes.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Menu = (props) => {

    const menu = props.dishes.map((dishes) => {
        return (
            <div key={dishes.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dishes={dishes} />
            </div>
        )
    });

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

export default Menu;