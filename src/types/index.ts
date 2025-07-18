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
  likes?: LikeType[]
}

export interface LikeType {
  id: number
  roomId: number
  userId: number
  createdAt: string
}

export interface NavMenuItem {
  id: number
  title: string
  url?: string
  action?: () => void
}

interface Account {
  id: string
  provider: string
}

export interface UserType {
  id: string
  email: string
  name?: string
  image?: string
  desc?: string
  rooms?: RoomType[]
  accounts: Account[]
  address?: string
  phone?: string
}

export interface FaqType {
  id: number
  title: string
  desc: string
}
