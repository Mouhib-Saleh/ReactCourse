import React, { useState, useRef } from "react";
const About = () => {
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [erreur, setErreur] = useState("");
    /*  const nomRef = useRef();
     const emailRef = useRef(); */
    const handleSubmit = (e) => {
        if (!email.includes("@")) {
            setErreur("Veuillez entrer une adresse email valide.");
        } else {
            setErreur("");
            console.log("Email valide :", email);
        }

        e.preventDefault();
        console.log("nom", nom);
        console.log("email", email);
        /*  console.log("Nom :", nomRef.current.value);
         console.log("Email :", emailRef.current.value); */
    }

    return (
        <div>
            <h1>about</h1>
            <form onSubmit={handleSubmit}>
                <label>nom</label>
                <input type="text"
                    onChange={(e) => setNom(e.target.value)}
                //target = input / value= valeur de l'input
                /*  ref={nomRef} */
                />
                <br></br>
                <label>email</label>
                <input type="email"
                    onChange={(e) => setEmail(e.target.value)}
                   /*  ref={emailRef} */ />
                <button type="submit">Envoyer</button>
            </form>
            {erreur && <p style={{ color: "red" }}>{erreur}</p>}
        </div>
    );
};
export default About;
