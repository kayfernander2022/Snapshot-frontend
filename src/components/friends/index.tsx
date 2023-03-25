import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FriendCard from './friendCard'
import Friend from '../../models/friend'
import './style.scss'

export const Friends: React.FC<{ friends: Friend[] }> = props => {

  return (<Container>
    <Col>
        {props.friends.map((friend: Friend, i: number) => {
            
            return (
                <Col
                    xl={4}
                    md={6}
                    className="mb-4"
                    key={friend.id}
                >
                    <FriendCard {...friend} />
                </Col>
            )
        })}
    </Col>
</Container>)
}

