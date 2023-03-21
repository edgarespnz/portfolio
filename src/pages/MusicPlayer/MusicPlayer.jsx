import React, { useState } from "react";
import { Button, Card, Alert , Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function MusicPlayer() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    async function handleLogOut() {
        setError('')
        try {
            await logout()
            navigate("/log-in")
        } catch (error) {
            setError(error.message)
        }

    }


    return (
        <Container className="d-flex align-items-center justify-content-center mt-5">
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email: {currentUser.email}</strong>
                    <Link to={'update-profile'} className="btn btn-primary w-100 mt-3">Update Profile</Link>
                </Card.Body>
                <div className="w-100 text-center mt-2">
                    <Button variant="link" onClick={handleLogOut}>Log Out</Button>
                </div>
            </Card>

        </Container>

    );
}

export default MusicPlayer;