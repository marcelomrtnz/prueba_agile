import { AppBar } from '@mui/material';
import './App.css';
import Interfaz from './app/interfaz';


function App() {


  return (
    <main>
        <AppBar position="relative" sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
            <h3>Nombre usuario</h3>
            <h2>Sales report</h2>
        </AppBar>
        <Interfaz/>
    </main>
  );
}

export default App;
