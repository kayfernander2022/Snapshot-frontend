import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PhotoCard from './photoCard'
import Photo from '../../models/photos'
import './style.scss'

export const PhotoPortfolio: React.FC<{ photos: Photo[] }> = props => {
  const sampleImage: string = 'https://ik.imagekit.io/jfpi8d5c5/capstone/default-image.jpg?updatedAt=1679757673963';

  const images: object[] = []
  const makePath = (image: string) => {
      return image ? image : sampleImage; // image ? 'img/' + image : sampleImage
  }

  return (<Container className="section-wrapper">
    <Row>
        {props.photos.map((photo: Photo, i: number) => {
            images.push({ source: makePath(photo.imageUrl) })

            return (
                <Col
                    xl={4}
                    md={6}
                    className="mb-4"
                    key={photo.id}
                >
                    <PhotoCard {...photo} />
                </Col>
            )
        })}
    </Row>
</Container>)
}

