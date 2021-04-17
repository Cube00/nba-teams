const EachPlayer = ({eachPlayer}) =>{
  const {first_name, last_name,height_feet, height_inches, position} = eachPlayer;
  return <>
    <div className="player">
      <h2>{first_name} {last_name}</h2>
    </div>
  </>
}

export default EachPlayer;
