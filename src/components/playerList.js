import EachPlayer from './eachPlayer';

const PlayerList = ({filterData}) =>{
  return <>
    {filterData.map((eachPlayer)=>{
      return <EachPlayer eachPlayer={eachPlayer} key={eachPlayer.id}/>
    })}
  </>
}

export default PlayerList;
