export type PageParams = Promise<{ id: string }>

export interface RoomType {
  id: number
  images: string[]
  title: string
  address: string
  price: number
  category: string
  desc: string
  bedroomDesc: string
  lat: string
  lng: string
  user?: UserType
  userId: number
  freeCancel: boolean
  officeSpace: boolean
  hasShower: boolean
  hasAirCondition: boolean
  hasWifi: boolean
  hasFreeParking: boolean
}

interface UserType {
  id: number
  email: string
  name?: string
  image?: string
  desc?: string
  rooms?: RoomType[]
}

export interface FaqType {
  id: number
  title: string
  desc: string
}
