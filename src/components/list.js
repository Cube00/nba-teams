const List = ({handleName})=>{
  return <>
    <div className="list-teams">
      <ul>
        <li onClick={(e)=> handleName(e)}>Indiana Pacers</li>
        <li onClick={(e)=> handleName(e)}>Milwaukee Bucks</li>
        <li onClick={(e)=> handleName(e)}>Toronto Raptors</li>
        <li onClick={(e)=> handleName(e)}>Boston Celtics</li>
        <li onClick={(e)=> handleName(e)}>Indiana Pacers</li>
        <li onClick={(e)=> handleName(e)}>Miami Heat</li>
        <li onClick={(e)=> handleName(e)}>Philadelphia 76ers</li>
        <li onClick={(e)=> handleName(e)}>Brooklyn Nets</li>
        <li onClick={(e)=> handleName(e)}>Orlando Magic</li>
        <li onClick={(e)=> handleName(e)}>Washington Wizards</li>
        <li onClick={(e)=> handleName(e)}>Charlotte Hornets</li>
        <li onClick={(e)=> handleName(e)}>Chicago Bulls</li>
        <li onClick={(e)=> handleName(e)}>New York Knicks</li>
        <li onClick={(e)=> handleName(e)}>Detroit Pistons</li>
        <li onClick={(e)=> handleName(e)}>Atlanta Hawks</li>
        <li onClick={(e)=> handleName(e)}>Cleveland Cavaliers</li>
      </ul>
    </div>
  </>
}

export default List;
