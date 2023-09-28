import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Asumiendo que estás utilizando React Router para obtener el parámetro 'id'
import { PokemonContext } from "../context/PokemonContext";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";

export const PokemonPage = () => {
  const { getPokemonById } = useContext(PokemonContext);
  const [pokemon, setPokemon] = useState({});
  const [expanded, setExpanded] = useState(false);

  const { id } = useParams();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const fetchPokemon = async (id) => {
    const data = await getPokemonById(id);
    setPokemon(data);
  };

  useEffect(() => {
    fetchPokemon(id);
  }, []);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
        //first letter to uppercase

          title={ pokemon.name  || "Loading..."}
          subheader={`Pokémon ${pokemon.order}`}
        />
        <CardMedia
          component="img"
          height="194"
          // Usar la imagen del Pokémon si está disponible en los datos
          image={pokemon.sprites?.other?.dream_world?.front_default}
          alt={pokemon.name}
          style={{ objectFit: "fill", width: 240, height: 200 }}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {`Base Experience: ${pokemon.base_experience}` || "Loading..."}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {/* Puedes agregar botones de acciones aquí si lo deseas */}
          <IconButton
            aria-label="Expandir"
            onClick={handleExpandClick}
            aria-expanded={expanded}
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {/* Aquí puedes mostrar más información sobre el Pokémon */}
            <Typography paragraph>
              Altura: {pokemon.height || "Loading..."}
            </Typography>
            <Typography paragraph>
              Peso: {pokemon.weight || "Loading..."}
            </Typography>
            <Typography paragraph>
              Habilidades:{" "}
              {pokemon.abilities
                ?.map((ability) => ability.ability.name)
                .join(", ") || "Loading..."}
            </Typography>

            {/* Agregar más información aquí según tus necesidades */}
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};
