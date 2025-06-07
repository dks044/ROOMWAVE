import prisma from '@/lib/prismadb'

export const dynamic = 'force-static'

/**
 * @info SSG PAGE
 */
const Page = async () => {
  const data = await prisma.faq.findMany()

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="text-lg font-semibold md:text-3xl">FAQ</h1>
      <p className="mt-2 text-gray-600">도움말 내용을 확인해주세요</p>
      <div className="mb-10 mt-8 flex flex-col">
        {data?.map((faq) => (
          <div
            key={faq.id}
            className="items-center border-b border-b-gray-200 py-5 font-semibold text-black"
          >
            <div>{faq.title}</div>
            <div className="mt-2 font-normal text-gray-600">{faq.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page
