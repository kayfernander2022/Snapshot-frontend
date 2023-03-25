import Photo from './photos'

export default interface Section {
    id: string
    menu: string
    headline: string
    subhead: string
    photos: Photo[]
}
