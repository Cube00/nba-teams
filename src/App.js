import {useState, useEffect} from 'react';
import axios from 'axios';
import List from './components/list';
import PlayerList from './components/playerList';

function App() {
  const [roster,setRoster] = useState();
  const [name, setName] = useState('');

  const handleName = (e) => {
    setName(e.target.textContent)
  }

  useEffect(()=>{
    const options = {
      method: 'GET',
      url: 'https://free-nba.p.rapidapi.com/players',
      params: {page: '1', per_page: '3000'},
      headers: {
        'x-rapidapi-key': '0a86052304msh589c04b0ba83872p11d86fjsnb7879687220f',
        'x-rapidapi-host': 'free-nba.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      setRoster(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  },[]);

  if(name !== ''){
    var filterData = roster.data.filter((e)=> e.team.full_name === name);
  }

  return <>
  <div className="content">
    <div className="list-teams">
      <List handleName={handleName} />
    </div>
    <div className="selected-teams">
      {name === '' ? 'Select team' : <PlayerList filterData={filterData} /> }
    </div>
  </div>
  </>
}

export default App;
