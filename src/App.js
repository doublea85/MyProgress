import { Routes ,Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './css/app.css';
import Home from './pages/Home';
import Menu from './components/Menu';
import Technoadd from './pages/AddTechno';
import TechnoList from './pages/TechnoList';
//import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [technos, setTechnos] = useState([]);// ici l'etat initial est un tableau vide qui contiendra un objets par techo qu'on aura créer
  /* useState => fonction qui retourne un tableau avec deux elements
    1er element => getter recuperer 
    2eme element => setter / un moyen de modifier, supprimer....
  */
//fonction qui nous permet de gerer la soumission du formilair qui se trouve dans le composant Technoadd
function handleAddTechno(techno) { // Cette fonction reçoi un objet techno
  //console.log('HandleTechno', techno);
  setTechnos([...technos, {...techno, technoid: uuidv4()}])
  // cloner d'abord l'etat initial puis l'écraser avec une nouvelle valeure
}

function handleDeleteTechno(id) {
  setTechnos(technos.filter((tech) => tech.technoid !== id));
}
  
  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/add' element={ <Technoadd handleAddTechno={handleAddTechno} />} /> {/* On va mettre à la disposition de technoadd la fonction handleAddTechno au format clé valeur*/}
        <Route path='/list' element={<TechnoList technos={technos} handleDeleteTechno={handleDeleteTechno} /> } /> {/**Passer les props de app à teholist */}
      </Routes>
    </>
  );
}

export default App;
