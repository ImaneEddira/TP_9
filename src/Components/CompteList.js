import React, { useEffect, useState } from "react";
import axios from "axios";
import API_BASE_URL from "../config";

function CompteList({ refreshTrigger }) {
    const [comptes, setComptes] = useState([]);

    //  Récupérer la liste des comptes à chaque refreshTrigger
    useEffect(() => {
        axios
            .get(`${API_BASE_URL}/comptes`)
            .then((response) => setComptes(response.data))
            .catch((error) => console.error("Erreur lors du chargement des comptes :", error));
    }, [refreshTrigger]); // dépendance ajoutée ici 👈

    return (
        <div className="container mt-4">
            <h2>Liste des Comptes</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Solde</th>
                    <th>Date de Création</th>
                    <th>Type</th>
                </tr>
                </thead>
                <tbody>
                {comptes.length > 0 ? (
                    comptes.map((compte) => (
                        <tr key={compte.id}>
                            <td>{compte.id}</td>
                            <td>{compte.solde}</td>
                            <td>{compte.dateCreation}</td>
                            <td>{compte.type}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4" className="text-center">
                            Aucun compte trouvé
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}

export default CompteList;
