import React, { useState } from "react";
const About = () => {
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Nom :", nom);
        console.log("Email :", email);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={nom}
                onChange={(e) => setNom(e.target.value)} />
            <label>Email :</label>
            <input type="email" value={email}
                onChange={(e) => setEmail(e.target.value)} />
            <button type="submit">Soumettre</button>
        </form>
    );
};
export default About;
