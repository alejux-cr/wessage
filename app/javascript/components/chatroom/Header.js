import React from 'react';
import { Typography, Container } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';



export default function Header() {
    return (
        <Container>
            <ChatIcon color="primary" />
            <Typography variant="h4" component="h5">
                Chatroom
            </Typography>
        </Container>

    )
}
