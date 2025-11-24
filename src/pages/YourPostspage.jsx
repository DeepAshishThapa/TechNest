import YourPosts from "@/components/YourPosts";
import React from 'react'
import { Container } from "@mui/material";

function YourPostspage() {
    return (
        <>
            <Container maxWidth="md" sx={{ mt: 2 }}>

                <YourPosts />
            </Container>
        </>



    )
}

export default YourPostspage
