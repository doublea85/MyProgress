import { useState} from 'react';

export default function Technoadd(props) {// vient de son parent App
    //On veut modifier une techno specifique
    // tout d'abord son etat est vide, cet etat est propre à lui
    const [techno, setTechno] = useState({
        technoname: "",
        technocategory: "",
        technodescription: ""
    });

    // On récupre cette fonction depui son parent gâce aux props(pros => propriété transmise du parent à l'enfant)
    const { handleAddTechno } = props;
    

    function handleSubmit(evt) {
        evt.preventDefault();// empêcher la fenêtre de se rafraichir
        handleAddTechno(techno);
        setTechno({
            technoname: "",
            technocategory: "",
            technodescription: ""
        });
    }

    // S'il ya un cangement puis change le morceau d'etat
    function handleChange(evt) {
        const {name, value} = evt.target;// recupere le name et value de tous les input à partir d etarget
        setTechno({...techno, [name]: value});
    }

    return (
        <div className="techno-add">
            <h1>Add a techno</h1>
            <div>
                <form onSubmit={(evt) => handleSubmit(evt)}>
                    <label htmlFor="technoname">Name:</label>
                    <br />
                    <input type="text" name="technoname" id="technoname" value={techno.technoname} onChange = { (evt) => handleChange(evt) } /> {/** Associer ce champ à l'etat technoname */}
                    <br />
                    <label htmlFor="technocategory">Category:</label>
                    <br />
                    <select name="technocategory" id="technocategory" value={techno.technocategory} onChange = { (evt) => handleChange(evt) }>
                        <option value="">Select a category</option>
                        <option value="Front end">Front end</option>
                        <option value="Back end">Back end</option>
                        <option value="fullstack">Fullstack</option>
                        <option value="Data">Data science</option>
                        <option value="Machine">Machine learning</option>
                        <option value="iot">Iot</option>
                        <option value="other">Other</option>
                    </select>
                    <br />
                    <label htmlFor="technodescription">Description:</label>
                    <br />
                    <textarea name="technodescription" id="technodescription" cols="30" rows="10" value={techno.technodescription} onChange={ (evt) => handleChange(evt)}></textarea>
                    <br />
                    <input type="submit" value="Add Techno"  className="btn"/>
                </form>
            </div>
        </div>
    );
}