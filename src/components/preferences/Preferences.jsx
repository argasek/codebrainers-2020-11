import React from "react";
import { Card, CardBody, FormGroup, Input, Label } from "reactstrap";

const Preferences = ({
  handleUserFullNameChange,
  handleUserFullNameBlur,
  userFullName,
  userFullNameDelayed,
}) => {

  return (
    <Card className="mb-4">
      <CardBody>
        <FormGroup>
          <Label for="userFullName">Full Name:</Label>
          <Input
            id="userFullName"
            name="userFullName"
            type="text"
            valid={ userFullName.length === 10 }
            invalid={ userFullName.length > 0 && userFullName.length !== 10 }
            onChange={ handleUserFullNameChange }
            onBlur={ handleUserFullNameBlur }
          />
          <p>{ userFullNameDelayed }</p>
        </FormGroup>
      </CardBody>
    </Card>
  );
};

export default Preferences;