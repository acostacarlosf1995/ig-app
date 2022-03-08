// import React, { Component } from "react";
import React from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Functional Component: en los functional components utilizamos props como el argumento de una function

function PhotoWall(props) {
    return (
        <>
            <Link className="addIcon" to="/AddPhoto" ></Link>
            <div className="photoGrid">
                {props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />)}
            </div>
        </>
    )
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default PhotoWall;

// Class Component: como se puede ver, en los class components utilizamos this. para traer las props

// class PhotoWall extends Component {
//     render() {
//         return (
//             <div className="photoGrid">
//                 {this.props.posts.map((post, index) => <Photo key={index} post={post}/>)}
//             </div>
//         )
//     }
// }