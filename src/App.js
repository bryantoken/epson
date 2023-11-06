import { Navbar, Container, Col, Row, Form, Button } from 'react-bootstrap';
import './style.css';
import { useState } from 'react';
function App() {
  const [showMilho, setShowMilho] = useState('');
  const [showCenoura, setShowCenoura] = useState('');
  const [showAlface, setShowAlface] = useState('');
  const [showCana, setShowCana] = useState('');
  const [showBatata, setShowBatata] = useState('');
  const handleOpcaoChange = (event, group1) => {
    const selectedValue = event.target.id;
    if (group1 && selectedOptions[group1] !== selectedValue) {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [group1]: selectedValue,
      }));
    }
  };
    const [selectedOptions, setSelectedOptions] = useState({
    group1: null
  });
  if(selectedOptions.group1 === 1) {
    setShowMilho(true);
  }
  return (
    <div className='div-principal'>

      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home" className="text-light">Epson Controle Agrícola</Navbar.Brand>
        </Container>
      </Navbar>
      <div className='h-100 p-5 wall'>
        <Container>
          <Row className='h-100 text-center bg-dark r'>
            <Col md={6} className='h-100'>
              <Container className="text-light main">
                <Row>
                  <h4>
                    Produtos vagos
                  </h4>
                </Row>
                <Row>
                  <Form>
                    {['checkbox'].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Row>
                          <Col className='d-flex justify-content-start'>

                            <Form.Check
                              inline
                              label="Milho"
                              name="group1"
                              type={type}
                              id={`inline-${type}-1`}
                              onChange={(e) => handleOpcaoChange(e, "group1")}
                            />
                          </Col>
                          <Col>
                            {showMilho ? (
                              <Form.Select aria-label="Default select example">
                                <option value="1">1 Kg</option>
                                <option value="2">2 Kg</option>
                                <option value="3">3 Kg</option>
                                <option value="4">4 Kg</option>
                                <option value="5">5 Kg</option>
                                <option value="6">6 Kg</option>
                                <option value="7">7 Kg</option>
                                <option value="8">8 Kg</option>
                                <option value="9">9 Kg</option>
                                <option value="10">10 Kg</option>
                              </Form.Select>
                            ) : (
                              <div></div>
                            )}


                          </Col>
                        </Row>
                        <Row>
                          <Col className='d-flex justify-content-start'>

                            <Form.Check
                              inline
                              label="Cenoura"
                              name="group1"
                              type={type}
                              id={`inline-${type}-2`}
                            />
                          </Col>
                          <Col>
                            <Form.Select aria-label="Default select example">
                              <option value="1">1 Kg</option>
                              <option value="2">2 Kg</option>
                              <option value="3">3 Kg</option>
                              <option value="4">4 Kg</option>
                              <option value="5">5 Kg</option>
                              <option value="6">6 Kg</option>
                              <option value="7">7 Kg</option>
                              <option value="8">8 Kg</option>
                              <option value="9">9 Kg</option>
                              <option value="10">10 Kg</option>
                            </Form.Select>
                          </Col>
                        </Row>

                        <Row>
                          <Col className='d-flex justify-content-start'>

                            <Form.Check
                              inline
                              label="Batata"
                              name="group1"
                              type={type}
                              id={`inline-${type}-2`}
                            />
                          </Col>
                          <Col>
                            <Form.Select aria-label="Default select example">
                              <option value="1">1 Kg</option>
                              <option value="2">2 Kg</option>
                              <option value="3">3 Kg</option>
                              <option value="4">4 Kg</option>
                              <option value="5">5 Kg</option>
                              <option value="6">6 Kg</option>
                              <option value="7">7 Kg</option>
                              <option value="8">8 Kg</option>
                              <option value="9">9 Kg</option>
                              <option value="10">10 Kg</option>
                            </Form.Select>
                          </Col>
                        </Row>


                        <Row>
                          <Col className='d-flex justify-content-start'>

                            <Form.Check
                              inline
                              label="Alface"
                              name="group1"
                              type={type}
                              id={`inline-${type}-2`}
                            />
                          </Col>
                          <Col>
                            <Form.Select aria-label="Default select example">
                              <option value="1">1 Kg</option>
                              <option value="2">2 Kg</option>
                              <option value="3">3 Kg</option>
                              <option value="4">4 Kg</option>
                              <option value="5">5 Kg</option>
                              <option value="6">6 Kg</option>
                              <option value="7">7 Kg</option>
                              <option value="8">8 Kg</option>
                              <option value="9">9 Kg</option>
                              <option value="10">10 Kg</option>
                            </Form.Select>
                          </Col>
                        </Row>


                        <Row>
                          <Col className='d-flex justify-content-start'>

                            <Form.Check
                              inline
                              label="Cana-de-açúcar"
                              name="group1"
                              type={type}
                              id={`inline-${type}-2`}
                            />
                          </Col>
                          <Col>
                            <Form.Select aria-label="Default select example">
                              <option value="1">1 Kg</option>
                              <option value="2">2 Kg</option>
                              <option value="3">3 Kg</option>
                              <option value="4">4 Kg</option>
                              <option value="5">5 Kg</option>
                              <option value="6">6 Kg</option>
                              <option value="7">7 Kg</option>
                              <option value="8">8 Kg</option>
                              <option value="9">9 Kg</option>
                              <option value="10">10 Kg</option>
                            </Form.Select>
                          </Col>
                        </Row>
                        {/* Cana de açucar */}
                      </div>
                    ))}
                  </Form>
                </Row>
              </Container>
            </Col>
            <Col md={6} className='h-100'>
              <Container className="text-light main">
                <Row>
                  <h4>
                    Animais disponíveis
                  </h4>
                </Row>
                <Row>
                  <Form.Select aria-label="Default select example">
                    <option value="1">Vaca</option>
                    <option value="2">Porco</option>
                    <option value="3">Galinha</option>
                    <option value="4">Ovelha</option>
                    <option value="5">Cabra</option>
                  </Form.Select>
                </Row>
              </Container>
            </Col>
            <Col className='m-5'>
              <Button variant="primary" size="md">
                Distribuir
              </Button>
            </Col>
          </Row>
        </Container>

      </div>

    </div>

  );
}

export default App;
