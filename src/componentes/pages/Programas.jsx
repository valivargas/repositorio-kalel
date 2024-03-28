import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Programas = () => {
    const [programas, setProgramas] = useState([]);
    const [error, setError] = useState(null); // Estado para almacenar el error

    useEffect(() => {
        axios.get('https://api.kalelsac.com/api/web/programas/')
            .then(res => {
                setProgramas(res.data);
                setError(null); // Si la solicitud es exitosa, establece el error en null
            })
            .catch(err => {
                // Manejar el error aquí
                console.error('Error al obtener los programas:', err);
                setError('No hay programas aún'); // Establecer el mensaje de error
            });
    }, []);

    return (
        <div>
            {error ? (
                // Mostrar el mensaje de error si hay un error
                <p>{error}</p>
            ) : (
                // Mostrar los programas si no hay errores
                <ul>
                    {programas.map(programa => (
                        <li key={programa.id}>{programa.nombre}</li>
                    ))}
                    {/* Contenido a mostrar cuando no hay programas */}
                    {programas.length === 0 && <h3>No hay programas</h3>}
                </ul>
            )}
        </div>
    );
}

export default Programas;
