import React from 'react'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import UserView from '../../models/userView'

export const UserViewCard: React.FC<UserView> = props => {
    return (
        <Card className="shadow-sm">
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <div>
                <Button>Friend</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default UserViewCard
