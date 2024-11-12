import { Link } from "react-router-dom";

// Première lettre d'un composant ou d'une page en majuscule
export default function About() {
   return (
      <>
         <h1 className="maClasse">Page About</h1>
        <Link to="/">Accueil</Link>
      </>
   )
}