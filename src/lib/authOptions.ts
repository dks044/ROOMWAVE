import { PrismaAdapter } from '@next-auth/prisma-adapter'

import GoogleProvider from 'next-auth/providers/google'
import KakaoProvider from 'next-auth/providers/kakao'
import NaverProvider from 'next-auth/providers/naver'
import { AuthOptions } from 'next-auth'
import { default as prisma } from './prismadb'

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID! as string,
      clientSecret: process.env.KAKAO_CLIENT_SECRET! as string,
      allowDangerousEmailAccountLinking: true,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID! as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET! as string,
      allowDangerousEmailAccountLinking: true,
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID! as string,
      clientSecret: process.env.NAVER_CLIENT_SECRET! as string,
      allowDangerousEmailAccountLinking: true,
    }),
    // CredentialsProvider({
    //   name: 'credentials',
    //   credentials: {
    //     email: { label: 'email', type: 'text' },
    //     password: { label: 'password', type: 'password' },
    //   },
    //   async authorize(credentials) {
    //     if (!credentials?.email || !credentials?.password) {
    //       throw new Error('Invalid credentials')
    //     }

    //     const user = await prisma.user.findUnique({
    //       where: {
    //         email: credentials?.email,
    //       },
    //     })

    //     if (!user || !user?.hashedPassword) {
    //       throw new Error('Invalid creentials')
    //     }

    //     const isCorrectPassword = await bcrypt.compare(
    //       credentials?.password,
    //       user.hashedPassword,
    //     )

    //     if (!isCorrectPassword) {
    //       throw new Error('Invalid credentials')
    //     }
    //     return user
    //   },
    // }),
  ],
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt' as const,
    maxAge: 60 * 60 * 24,
    updateAge: 60 * 60 * 2,
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // MEMO: JWT 정보를 세션에 추가하는 함수
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub, // MEMO: JWT의 sub(subject) 필드를 사용자 ID로 사용
      },
    }),
    jwt: async ({ user, token }) => {
      if (user) {
        token.sub = user.id
      }
      return token
    },
    signIn: async ({ user, account, profile }) => {
      if (account && profile) {
        const provider = account.provider

        const providerId = (profile as any).id ?? crypto.randomUUID()
        let email = profile.email

        // ✅ 이메일이 없을 경우 대체 이메일 생성
        if (!email) {
          email = `${providerId}@${provider}.user`
        }

        const existingUser = await prisma.user.findUnique({
          where: { email },
        })

        if (!existingUser) {
          await prisma.user.create({
            data: {
              email,
              name: profile.name ?? '이름없음',
              image: profile.image,
              oauth: true,
            },
          })
        }
      }

      return true
    },
  },
}
