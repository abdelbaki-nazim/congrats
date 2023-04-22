import React from "react";

function Loader (){

    return(
        <div className="loader-container">
        <div className="loader">
            <div className="item1"></div>
            <div className="item2"></div>
            <div className="item3"></div>
        </div>
        <div>
            <h4>chargement...</h4>
        </div>
        </div>
    )
}

export default Loader