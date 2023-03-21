import { React, useRef, useState } from 'react'
import { Button, Card, Form, Container, Alert } from 'react-bootstrap'
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

export default function SignUp() {

    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    const [message , setMessage] = useState("")

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setMessage("")
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("We sent an email with a reset link")
        } catch (error) {
            setError('Failed to Reset Password')
        }
        setLoading(false);
    }

    return (
        <Container className='d-flex  align-items-center justify-content-center' style={{ minHeight: "100vh" }}>
            <div className="w-100" style={{ maxWidth: '400px' }}>
                <Card>
                    <Card.Body>

                        <h2 className='text-center mb-4'>Password Reset</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        {message && <Alert variant="success">{message}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type='email' ref={emailRef} required />
                            </Form.Group>

                            <Button disabled={loading} className='w-100 mt-4' type='submit'>Reset</Button>
                        </Form>
                        <div className="w-100 text-center mt-2">
                            <Link to={"/log-in"}>Log In</Link>
                        </div>
                    </Card.Body>
                </Card>
                <div className="w-100 text-center mt-3">
                    ¿Need an account?<Link to={'/log-in'}>Sign Up</Link>
                </div>

            </div>
        </Container>
    )
}
