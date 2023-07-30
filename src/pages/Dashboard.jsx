import React from "react";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Dashboard = () => {
     /*const [authenticated, setauthenticated] = useState(null);
     useEffect(() => {
       const loggedInUser = localStorage.getItem("authenticated");
       if (loggedInUser) {
         setauthenticated(loggedInUser);
       }
     }, []);
  
     if (!authenticated) {
     // Redirect
     return <Navigate replace to="/login" />;
     } else {*/
        return (
            <div className="dashboard">
                <div className="greeting">
                    <h1 style={{fontFamily : "-moz-initial" , width:"100%"}}>Hello, Mosin Inamdar</h1>
                </div>
                <div className="total notes">

                </div>
            </div>
        );
    //  }
};

export default Dashboard;