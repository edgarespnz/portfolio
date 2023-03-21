import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

function SearchBar() {
    const [item, setItem] = useState()
    const [word, setWord] = useState('')
    const [error , setError] = useState(null)
    const [show, setShow] = useState(true);

    const httpWords = async () => {
        try {
            const resp = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            if(!resp.ok){
                throw Error("Word doesn't exist");
            }
            const data = await resp.json();
            setItem(data)
        } catch (error) {
            setError(error.message)
            setItem(undefined)
        }
    }
    
    useEffect(() => {
        setShow(true)
    }, [item])


    return (
        <Container className="d-flex justify-content-center mt-5">

                <Form className="d-inline-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        value={word}
                        onChange={(evt) => (setWord(evt.target.value))}
                    />
                    <Button variant="outline-success" onClick={() => { httpWords() }}>Search</Button>
                </Form>


            {show === true ? error && <Alert variant="danger" style={{margin: "1.5rem"}}  onClose={()=>{setShow(false)}} dismissible > {error} </Alert> : <></>}

            {item !== undefined ? item.map((item2) => {
                return (
                    <Container style={{display:'flex' , alignContent: 'center', justifyContent: 'center'}}>
                        <Card key={item2.word} style={{ width: 'fit-content', margin: '1.5rem'}}>
                        <Card body>
                            {JSON.stringify(item2.meanings[0].definitions[0].definition)}
                        </Card>
                    </Card>
                    </Container>

                );
            }) :
                <></>}
        </Container>

    );
}

export default SearchBar;