import MembreEquipage from './components/MembreEquipage';
import Header from './components/Header';
import { useEffect, useState } from "react";
import axios from 'axios';

function App() {

  const [nom, setNom] = useState('');
  const [dataEquipage, setDataEquipage] = useState([])

  const options = {
    headers: {'Content-Type': 'application/json; charset=UTF-8'}
  }

  const getMembresEquipage = () => {
    axios.get('/membresEquipage')
      .then(docs => setDataEquipage(docs.data))
  }

  const addNewMembre = e => {
    e.preventDefault();
    axios.post('/membresEquipage/newMembre', {nom}, options)
      .then(() => getMembresEquipage())
      .then(() => setNom(''))
  }

  useEffect(() => {

    getMembresEquipage()

  }, []);

  return (
    <div className="app">
      <fragment className="all">
        <Header />
        <div className="formulaire">
          <h2>Ajouter un(e) Argonautes</h2>
          <form onSubmit={addNewMembre}>
            <label htmlfor="name">Nom de l'Argonaute</label>
            <input id="name" name="name" type="text" pattern='[^<>]+' placeholder="Charalampos" value={nom} onChange={e => setNom(e.target.value)} required />
            <button type="submit">Envoyer</button>
          </form>
        </div>
        
        <fragment className="equipage">
        <h2>Membres de l'équipage</h2>
          
          <div className="listeEquipage">
            {dataEquipage.map(membre => (
              <MembreEquipage nom={membre.nom} key={membre._id} />
            ))}
          </div>
        </fragment>
      </fragment>

      <footer className='footer'>
        <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
      </footer>
    </div>
  );
}

export default App;
