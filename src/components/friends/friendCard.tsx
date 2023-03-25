import React from 'react'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Friend from '../../models/friend'

export const FriendCard: React.FC<Friend> = props => {
    return (
        <Card className="shadow-sm">
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <div>
                <Button>Unfriend</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default FriendCard
