import React from "react";
import { Container, AppBar, Typography, Grow, Grid} from "@material-ui/core"

import memories from './images/memories.png'
import Posts from './components/Posts/Posts'
import From from './components/Form/Form'

export default function App() {
    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Memories</Typography>
                <img src={memories} alt="memories" height="600" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <From />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}