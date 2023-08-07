import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Subscribe = () => {
  return (
    <section className='section'>
      <div className="row">
        <div className="col-sm-12">
          <h2 className="display-5">Stay Informed and Make a Difference: Subscribe to the ChildSafe South Africa Newsletter</h2>
          <p className="lead">Are you passionate about the safety and well-being of children in South Africa?</p> <p>Join us in our mission to create a safer environment for every child by subscribing to the ChildSafe South Africa newsletter. Stay up-to-date with the latest insights, news, and initiatives aimed at promoting child safety across the nation. Our newsletter is your gateway to valuable resources, expert advice, and heartwarming success stories that highlight the positive impact we can achieve together. By subscribing, you'll be part of a community dedicated to making a real difference in the lives of our children. 
            Join hands with ChildSafe South Africa and be empowered to contribute to a brighter and safer future. Subscribe now and be a part of this vital movement!</p>
        </div>
      </div>


    <div className="row">
      <div className="col-sm-12">
      <Form>
      <Form.Group className="mb-3" controlId="formBasicFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Last Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

    
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </div>
    </div>
    </section>
  );
};
export default Subscribe;