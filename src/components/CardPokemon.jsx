import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export const CardPokemon = ({ pokemon }) => {
  return (
    <Card sx={{ maxWidth: 245 }}>
      <CardMedia
        sx={{ height: 140 }}
        component="img"
        image={pokemon.sprites.other.dream_world.front_default}
        style={{ objectFit: "fill", width: 240, height: 200 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pokemon.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/pokemon/${pokemon.id}`}>
          <Button size="small">Ver detalle</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
