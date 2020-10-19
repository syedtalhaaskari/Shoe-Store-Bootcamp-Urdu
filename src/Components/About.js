import React from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function About() {
    return (
        <div>
            <Container maxWidth="xl">
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
                    This is About Page
                </Typography>
            </Container>
        </div>
    )
}

export default About;