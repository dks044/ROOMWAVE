import prisma from '@/lib/prismadb'

export const dynamic = 'force-static'

/**
 * @info SSG PAGE
 */
const Page = async () => {
  const data = await prisma.faq.findMany()

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-lg md:text-3xl font-semibold">FAQ</h1>
      <p className="mt-2 text-gray-600">도움말 내용을 확인해주세요</p>
      <div className="mt-8 flex flex-col mb-10 ">
        {data?.map((faq) => (
          <div
            key={faq.id}
            className="py-5 border-b border-b-gray-200 text-black items-center font-semibold"
          >
            <div>{faq.title}</div>
            <div className="text-gray-600 font-normal mt-2">{faq.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page
