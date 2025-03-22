import { fakerKO as faker } from '@faker-js/faker'
import prisma from '../src/lib/prismadb'
import { CATEGORY } from '../src/constants/index'

async function seedUsers() {
  Array.from({ length: 10 }, (v, i) => i).forEach(async () => {
    const userData = {
      email: faker.internet.email(),
      name: faker.person.fullName(),
      image: faker.image.avatar(),
      desc: faker.lorem.paragraph(),
    }
    const res = await prisma.user.create({
      data: userData,
    })
  })
}

async function seedRooms() {
  const totalUsers = await prisma.user.findMany()
  if (totalUsers?.length > 1) {
    const promises = Array.from({ length: 10 }, async () => {
      const randomUserIndex = Math.floor(Math.random() * totalUsers.length)
      const randomUser = totalUsers[randomUserIndex]

      const roomData = {
        title: faker.lorem.words(),
        images: [
          faker.image.urlPicsumPhotos({ width: 500, height: 500 }),
          faker.image.urlPicsumPhotos({ width: 500, height: 500 }),
          faker.image.urlPicsumPhotos({ width: 500, height: 500 }),
          faker.image.urlPicsumPhotos({ width: 500, height: 500 }),
        ],
        lat: getRandomLatitude(),
        lng: getRandomLongtitude(),
        address:
          faker.location.state() +
          faker.location.street() +
          faker.location.streetAddress({ useFullAddress: true }),
        category: CATEGORY[Math.floor(Math.random() * CATEGORY.length)],
        desc: faker.lorem.paragraph(),
        price: parseInt(
          faker.commerce.price({ min: 50000, max: 500000, dec: 0 }),
        ),
        bedroomDesc: faker.lorem.words(),
        userId: randomUser.id,
        freeCancel: faker.datatype.boolean(),
        officeSpace: faker.datatype.boolean(),
        hasShower: faker.datatype.boolean(),
        hasAirCondition: faker.datatype.boolean(),
        hasWifi: faker.datatype.boolean(),
        hasFreeParking: faker.datatype.boolean(),
      }

      // 데이터베이스에 방 생성
      return await prisma.room.create({ data: roomData })
    })

    // 모든 생성 작업이 완료될 때까지 기다리기
    try {
      const results = await Promise.all(promises)
      results.forEach((res) => console.log(res))
    } catch (error) {
      console.error('Error creating rooms:', error)
    }
  }
}

async function seedFaqs() {
  Array.from({ length: 10 }, (v, i) => i).forEach(async () => {
    const faqData = {
      title: faker.lorem.words(),
      desc: faker.lorem.paragraph(),
    }
    const res = await prisma.faq.create({
      data: faqData,
    })
    console.log(res)
  })
}

//서울 위도/경도값 랜덤 생성 함수
function getRandomLatitude() {
  const minLatitude = 37.4316
  const maxLatitude = 37.701

  return faker.number
    .float({
      min: minLatitude,
      max: maxLatitude,
      multipleOf: 0.000001,
    })
    ?.toString()
}
function getRandomLongtitude() {
  const minLongtitude = 37.4316
  const maxLongtitude = 37.701

  return faker.number
    .float({
      min: minLongtitude,
      max: maxLongtitude,
      multipleOf: 0.000001,
    })
    ?.toString()
}

async function main() {
  // await seedUsers()
  //await seedRooms()
  await seedFaqs()
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
