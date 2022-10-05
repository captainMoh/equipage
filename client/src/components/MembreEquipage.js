import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const MembreEquipage = ({ nom, id }) => {

    const deleteMembre = () => {
        axios.delete(`membresEquipage/${id}`)
          .then(docs => console.log(docs))
          .then(() => window.location.reload())
          .catch(error => console.log(error))
      }
    return (
        <div className='membreEquipage'>
            <p>{nom}</p>
            <button onClick={deleteMembre}><FontAwesomeIcon icon={faTrash} /> Supprimer</button>
        </div>
    );
};

export default MembreEquipage;