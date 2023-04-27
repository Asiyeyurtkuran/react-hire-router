import PeopleListItem from "./PeopleListItem"


function PeopleList(props) {
  const { people } = props


  return (
    <ul>
      {people !== undefined
        ? people.map((person, index) => {
          return <PeopleListItem key={index} index={index} person={person} setHiredPeople={props.setHiredPeople} />;
        })
        : ""}
    </ul>
  )
}

export default PeopleList
