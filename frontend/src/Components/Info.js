import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//icons
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";

const Info = () => {
  const [superheroe, setSuperheroe] = useState([]);
  const [habilidades, setHabilidades] = useState([]);
  const [misionMR, setMisionMR] = useState([]);

  const { id } = useParams("");

  const obtenerSuperheroeId = async () => {
    const respuesta = await axios.get(`/superheroes/getUser/${id}`);
    const superheroe = await respuesta.data;
    setSuperheroe(superheroe);
    setHabilidades(superheroe.habilidades);
    setMisionMR(superheroe.misionesMR);
  };

  useEffect(() => {
    obtenerSuperheroeId();
  }, []);

  return (
    <div className="container mt-3">
      <h1 style={{ fontWeight: 400 }} className="text-uppercase mb-5">
        Welcome {superheroe.name}
      </h1>
      <Card sx={{ maxWidth: 600 }} variant="outlined">
        <CardContent>
          <div className="add_btn">
            <button className="btn btn-primary mx-2">
              <CreateIcon />
            </button>
            <button className="btn btn-danger">
              <DeleteOutlineIcon />
            </button>
          </div>
          <div className="row text-capitalize">
            <div className="left_view col-lg-6 col-md-6 col-12">
              <img src="/profile.png" style={{ width: 50 }} alt="profile" />
              <h3 className="mt-3 ">
                Nombre: <span>{superheroe.name}</span>
              </h3>
              <h3 className="mt-3">
                Origen: <span>{superheroe.planetaOrigen}</span>
              </h3>
              <p className="mt-3">
                <FavoriteIcon />
                Salud: <span>{superheroe.salud}</span>
              </p>
            </div>
            <div className="right_view mt-5 col-lg-6 col-md-6 col-12">
              <p className=" mt-3">
                <SportsMartialArtsIcon />
                Habilidades:
                {habilidades.map((item, i) => (
                  <span key={i}>{`${item.name}, `}</span>
                ))}
              </p>
              <p className=" mt-3">
                Misiones Rutinarias:
                {misionMR.map((item, i) => (
                  <span key={i}>
                    {
                      //probar con mas misiones
                      item.name.lenght === 0 ? `${item.name}, ` : `${item.name}`
                    }
                  </span>
                ))}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Info;
