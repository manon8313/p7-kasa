import LogementLogo from '../../LogementLogo.png';
import TagLogement from '../../TagLogement.png';
import '../../../logements.css';


export default function Logements() {

    return (
        <body className= 'Logements'>
            <article className='logement'>
                <img className='logement-logo' src={LogementLogo} alt='image'/>
                <img className='tag-logement' src={TagLogement} alt='p'/>
            </article>
            <article className='logement'>
                <img className='logement-logo' src={LogementLogo} alt='image'/>
                <img className='tag-logement' src={TagLogement} alt='p'/>
            </article>
            <article className='logement'>
                <img className='logement-logo' src={LogementLogo} alt='image'/>
                <img className='tag-logement' src={TagLogement} alt='p'/>
            </article>
            <article className='logement'>
                <img className='logement-logo' src={LogementLogo} alt='image'/>
                <img className='tag-logement' src={TagLogement} alt='p'/>
            </article>
            <article className='logement'>
                <img className='logement-logo' src={LogementLogo} alt='image'/>
                <img className='tag-logement' src={TagLogement} alt='p'/>
            </article>
            <article className='logement'>
                <img className='logement-logo' src={LogementLogo} alt='image'/>
                <img className='tag-logement' src={TagLogement} alt='p'/>
            </article>
        </body>
    )

}