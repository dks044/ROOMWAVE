const CommentForm = () => {
  return (
    <form className="mt-8">
      <textarea
        rows={3}
        placeholder="후기를 작성해주세요..."
        className="block min-h-[7.5rem] w-full resize-none rounded-md border bg-transparent px-4 py-2.5 text-sm leading-6 outline-none placeholder:text-gray-400 focus:border-black"
      />
      <div className="mt-4 flex flex-row-reverse">
        <button
          type="submit"
          className="rounded-md bg-brand px-8 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-pressedBrand"
        >
          작성하기
        </button>
      </div>
    </form>
  )
}

export default CommentForm
