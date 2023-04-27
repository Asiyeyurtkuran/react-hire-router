import { useState } from "react"
import HireForm from "./components/HireForm"

import { useLocation } from "react-router";
import { useEffect } from "react";


function PersonProfile(props) {
  const [person, setPerson] = useState(null)
  console.log("this is the persons profile", props)
  
  


  const location = useLocation();
  useEffect(() => {
    if (location.state) {
      const { person } = location.state;
      console.log("locationstate", location.state);
      setPerson(location.state);
    }
  }, [location]);
  < HireForm person={person} setHiredPeople={props.setHiredPeople} />
  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} />
    </article>
  )
}

export default PersonProfile
