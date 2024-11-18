import { Link } from "react-router-dom";


// Première lettre d'un composant ou d'une page en majuscule
export default function Home() {
   return (
      <>
         <h1 className="maClasse">Page Accueil</h1>
        <Link to="/about">About</Link>
      </>
      
   )
}