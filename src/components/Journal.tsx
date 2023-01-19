import React from "react";
import logo from "../assets/react.svg"

type Props = {
	title: string;
	location: string;
	googleMapsUrl: string;
	startDate: string;
	endDate: string;
	description: string;
	imageUrl: string;
};


const Journal = (props: Props) => {

   return (
      
      <div className="journal__div">
         <img src={props.imageUrl} alt="" />
         <div className="journal__content">
            <p className="journal__location">
               📌 {props.location} <a href={props.googleMapsUrl}>View on Google Maps</a>
            </p>
            <h2 className="journal__title">{props.title}</h2>
            <h4 className="journal__date">{props.startDate} to {props.endDate}</h4>
            <p className="journal__description">
            {props.description}
            </p>        
         </div>
      </div>

   )
}

export default Journal;