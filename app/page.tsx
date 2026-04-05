"use client";

import { AppBar, Toolbar, Typography, Button, Container, Card, CardMedia, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function LandingPage() {
  return (
    <>
      {/* Header */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Clothing LAB
          </Typography>
          <div>
            <Button color="primary">Shop</Button>
            <Button color="primary">About</Button>
            <Button color="primary">Contact</Button>
          </div>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container sx={{ textAlign: "center", py: 8 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          Minimalist Fashion, Maximum Impact
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 4 }}>
          Discover clean, modern clothing designed for everyday comfort.
        </Typography>
        <Button variant="contained" color="primary">
          Shop Now
        </Button>
      </Container>

      {/* Product Grid */}
      <Container sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {[1, 2, 3, 4].map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image="/placeholder.png" // replace with product image
                  alt="Product"
                />
                <CardContent>
                  <Typography variant="h6">Product {item}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Short description of product {item}.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
