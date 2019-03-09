import React from "react";

//Container Component That Allows the Usage of Bootstrap Container Without Worrying About Class Names
export function Container({fluid, children}){
    return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>
}

//Allows for the use of Bootstrap row Without Having to Worry About Class Names
export function Row({fluid,children}){
    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>
}

//Col Component That Allows Sizing of Bootstrap Columns With Less Syntax
export function Col({size,children}){
    return (
        <div className={size.split(" ").map(size=>"col-"+size).join(" ")}>{children}</div>
    );
}