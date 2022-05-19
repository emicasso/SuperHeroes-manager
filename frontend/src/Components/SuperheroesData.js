import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import CreateIcon from "@mui/icons-material/Create";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const SuperheroesData = () => {
  const [superheroes, setSuperheroes] = useState([]);

  const obtenerSuperheroes = async () => {
    const respuesta = await axios.get("/superheroes");
    const superheroes = await respuesta.data;
    setSuperheroes(superheroes);
  };

  useEffect(() => {
    obtenerSuperheroes();
  }, []);

  return (
    <div className="mt-5">
      <div className="container overflow-auto">
        <div className="add_btn mt-2 mb-2 text-end">
          <NavLink to="/register" className="btn btn-primary">
            Agregar Nuevo SuperHeroe
          </NavLink>
        </div>
        <table className="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">Nombre</th>
              <th scope="col">Lugar de Origen</th>
              <th scope="col">Salud</th>
              <th scope="col">nivel</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {superheroes.map((element, i) => {
              return (
                <tr key={i}>
                  <th scope="row" className="text-uppercase">
                    {element.name}
                  </th>
                  <td>{element.planetaOrigen}</td>
                  <td>{element.salud}</td>
                  <td>{element.nivel}</td>
                  <td className="d-flex justify-content-between">
                    <NavLink to={`view/${element._id}`}>
                      <button className="btn btn-success">
                        <RemoveRedEyeIcon />
                      </button>
                    </NavLink>
                    <NavLink to={`edit/${element._id}`}>
                      <button className="btn btn-primary">
                        <CreateIcon />
                      </button>
                    </NavLink>
                    <button className="btn btn-danger">
                      <DeleteOutlineIcon />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SuperheroesData;
