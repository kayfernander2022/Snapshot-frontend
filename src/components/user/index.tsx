import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import UserViewCard from './userCard'
import UserView from '../../models/userView'
import './style.scss'

export const Users: React.FC<{ users: UserView[] }> = props => {

  return (<Container>
    <Col>
        {props.users.map((users: UserView, i: number) => {
            
            return (
                <Col
                    xl={4}
                    md={6}
                    className="mb-4"
                    key={users.id}
                >
                    <UserViewCard {...users} />
                </Col>
            )
        })}
    </Col>
</Container>)
}

