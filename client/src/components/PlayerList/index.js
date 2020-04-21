import React, { useState } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v1 as uuid } from "uuid";

const PlayerList = () => {
  const [items, setItems] = useState([
    { id: uuid(), name: "Eggs" },
    { id: uuid(), name: "Milk" },
    { id: uuid(), name: "Steak" },
    { id: uuid(), name: "Water" },
  ]);
  return (
    <Container>
      <Button
        color="dark"
        style={{ marginBottom: "2rem" }}
        onClick={() => {
          const name = prompt("Enter Item");
          if (name) {
            setItems([...items, { id: uuid(), name: name }]);
          }
        }}
      >
        Add Item
      </Button>
      <Button>What up</Button>

      <ListGroup>
        <TransitionGroup>
          {items.map(({ id, name }) => (
            <CSSTransition key={id} timeout={500} className="fade">
              <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={() => {
                    setItems([items.filter((item) => item.id !== id)]);
                  }}
                >
                  &times;
                </Button>
                {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>

      <ListGroup></ListGroup>
      <Button>Another one</Button>
    </Container>
  );
};

export default PlayerList;
