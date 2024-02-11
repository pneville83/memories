import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core"; 
import Posts from "./Components/Posts/Posts";
import Form from "./Components/Form/Form";
import  useStyles from "./styles.js";

import memories from './images/memories.png';


const App  = () => {
  const classes = useStyles();
  return (

    <Container maxWidth="lg">
      <AppBar className={classes.appbar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img src={memories} alt="memories" className={classes.image} height={50} />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="strech" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
};

export default App;