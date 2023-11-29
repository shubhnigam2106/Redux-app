import React from "react";
import productList from "../../Product_List/productlist.json";
import { Grid, Card, Button } from "@mui/material";
const Home = () => {
  return (
    <>
      <Grid>
        {productList.Products.map((product) => (
          <Card sx={{minwidth:275}}>
            {product.name}

            <Button variant="contained">Contained</Button>
          </Card>
        ))}
      </Grid>
    </>
  );
};

export default Home;
