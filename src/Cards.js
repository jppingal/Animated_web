import React from "react";
import { NavLink } from "react-router-dom";


const Cards = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card" >
          <img src={props.imgsrc} className="card-img-top img-size" alt="..." />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title} </h5>
            <p className="card-text">
              Trust your experts to remove bottlenecks in your workflow,
              introduce new technology,  and consolidate app partfolios.</p>
            <NavLink to="" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}


export default Cards;