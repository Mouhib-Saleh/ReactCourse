import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/Nav";
function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect
        (() => {
            const fetchData = async () => {
                try {
                    const response = await axios
                        .get("https://jsonplaceholder.typicode.com/posts");
                    console.log(response.data);
                    setData(response.data);
                    setLoading(false);
                }
                catch {
                    setError("Une erreur s'est produite");
                    setLoading(false);
                }
            };
            fetchData();
        }, []);
    if (loading) return <p>Chargement en cours...</p>;
    if (error) return <p>Erreur : {error}</p>;
    return (
        <div>
            <Navbar />
            <h1>Home</h1>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}

            </ul>
        </div>
    );
};
export default Home;
