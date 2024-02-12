import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Data from "./Data";
import "./Cards.css";
import { useState } from "react";

export default function Cards() {
  const initialFruits = Data(); // Get initial fruits data from Data component
  const [fruits, setFruits] = useState(initialFruits);
  const [originalFruits, setOriginalFruits] = useState(initialFruits);
  const [input, setInput] = useState(0);
  const [showDetails, setShowDetails] = useState({});

  const handleInput = (id, event) => {
    setInput(event.target.value);
  };

  const handleCard = (id) => {
    const updatedFruits = originalFruits.map((fruit) => {
      if (fruit.id === id) {
        return {
          ...fruit,
          benefits: {
            calories: fruit.benefits.calories * parseFloat(input),
            carbs: fruit.benefits.carbs * parseFloat(input),
            fibre: fruit.benefits.fibre * parseFloat(input),
            fat: fruit.benefits.fat * parseFloat(input),
            protein: fruit.benefits.protein * parseFloat(input),
          },
        };
      }
      return fruit;
    });
    setFruits(updatedFruits);
  };

  const toggleDetails = (id) => {
    setShowDetails((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <div className="cards">
      {fruits.map((fruit) => (
        <Card key={fruit.id} sx={{ maxWidth: 345 }} className="fruit">
          <CardMedia
            sx={{ height: 140 }}
            image={fruit.image}
            title={fruit.name}
            onClick={() => toggleDetails(fruit.id)}
          />
          {/* <i class="fa-brands fa-nutritionix nutrient-icon"></i> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {fruit.name}
            </Typography>
            {showDetails[fruit.id] && (
              <Typography variant="body2" color="text.secondary">
                <div>Calories: {fruit.benefits.calories.toFixed(1)}</div>
                <div>Carbs: {fruit.benefits.carbs.toFixed(1)}</div>
                <div>Fibre: {fruit.benefits.fibre.toFixed(1)}</div>
                <div>Fat: {fruit.benefits.fat.toFixed(1)}</div>
                <div>Protein: {fruit.benefits.protein.toFixed(1)}</div>
              </Typography>
            )}
          </CardContent>
          <CardActions>
            <input
            min={1}
              type="number"
              placeholder="Quantity"
              onChange={(event) => handleInput(fruit.id, event)}
            />
            <Button size="small" onClick={() => handleCard(fruit.id)}>
              Submit
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
