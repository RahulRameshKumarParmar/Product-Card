import React, { useState, useEffect } from 'react';
import './App.css';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function App() {
  let [count, setCount] = useState(0);
  let [removeCart, setRemoveCart] = useState([false, false, false, false]);

  function handleClick(index) {
    let updated = [...removeCart];
    updated[index] = true;
    setCount(count + 1);
    setRemoveCart(updated);
  }
  return (
    <div className='App'>
      <div className='heading'>
        <h1>Product List</h1>
        <span className='cartSymbol'><sup>{count}</sup><Link to={"/cart"}>🛒</Link></span>
      </div>
      <div className='products row mt-5 mb-5'>
        <div className='product-items col-lg-3'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src='./Images/l1.jpg' />
            <Card.Body>
              <Card.Title>Microsoft Powerfull Laptop</Card.Title>
              <Card.Text>
                Ryzon 9 15590H Processor
                1TB SSD 16GB RAM
                Microsoft Apps
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>1,09,990₹</ListGroup.Item>
              <ListGroup.Item>EMI Available</ListGroup.Item>
              <ListGroup.Item>Powerfull Processor</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link onClick={() => handleClick(0)} className={removeCart[0] ? 'd-none' : 'text-decoration-none bg-success text-light p-2'} href="#">Add To Card</Card.Link>
              <Card.Link className='text-decoration-none bg-success text-light p-2' href="#">Buy Now</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className='product-items col-lg-3'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./Images/l2.jpg" />
            <Card.Body>
              <Card.Title>MacBook Pro</Card.Title>
              <Card.Text>
                13 hours Battery Backup
                Latest M3 Chipset
                Lightest Ever
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>89,000₹</ListGroup.Item>
              <ListGroup.Item>EMI Available</ListGroup.Item>
              <ListGroup.Item>Better User UI</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link onClick={() => handleClick(1)} className={removeCart[1] ? 'd-none' : 'text-decoration-none bg-success text-light p-2'} href="#">Add To Card</Card.Link>
              <Card.Link className='text-decoration-none bg-success text-light p-2' href="#">Buy Now</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className='product-items col-lg-3'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./Images/l3.jpg" />
            <Card.Body>
              <Card.Title>Acer Professional Laptop</Card.Title>
              <Card.Text>
                Intel I5 1235U Processor
                Light-Weight
                256 SSD / 1TB Hard Drive
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>47,990₹</ListGroup.Item>
              <ListGroup.Item>EMI Available</ListGroup.Item>
              <ListGroup.Item>Segment Best Professional Laptop</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link onClick={() => handleClick(2)} className={removeCart[2] ? 'd-none' : 'text-decoration-none bg-success text-light p-2'} href="#">Add To Card</Card.Link>
              <Card.Link className='text-decoration-none bg-success text-light p-2' href="#">Buy Now</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className='product-items col-lg-3'>
          <Card style={{ width: '18rem' }}>
            <Card.Img className='mt-5' variant="top" src="./Images/l4.jpg" />
            <Card.Body className='mt-4'>
              <Card.Title>Acer Gaming Laptop</Card.Title>
              <Card.Text>
                Intel I7 1234H Processor
                1TB SSD
                Cooling Technology
                DDR5 RAM
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>79,999₹</ListGroup.Item>
              <ListGroup.Item>EMI Available</ListGroup.Item>
              <ListGroup.Item>Segment Best Laptop</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link onClick={() => handleClick(3)} className={removeCart[3] ? 'd-none' : 'text-decoration-none bg-success text-light p-2'} href="#">Add To Card</Card.Link>
              <Card.Link className='text-decoration-none bg-success text-light p-2' href="#">Buy Now</Card.Link>
            </Card.Body>
          </Card>
        </div>

      </div>
    </div>
  )
}

export default App;
