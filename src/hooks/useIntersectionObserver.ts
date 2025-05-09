import { RefObject, useState, useEffect } from 'react'

/**
 * @info
 * 해당 훅은 IntersectionObserver API를 활용하여
 * 특정 DOM 요소가 viewport 또는 특정 root 요소와 교차하는지를 감지하고,
 * 교차 상태를 반환한다.
 *
 * @param elementRef - 관찰 대상이 되는 DOM 요소의 Ref 객체
 * @param therehold - 요소가 교차했다고 간주될 비율 (기본값: 0.1)
 * @param root - 관찰 기준이 되는 root 요소 (기본값: null → viewport 기준)
 * @param rootMargin - root 주변의 마진 영역 (기본값: '0')
 *
 * @returns IntersectionObserverEntry 또는 undefined
 *          (해당 요소가 root와 어떻게 교차되고 있는지에 대한 정보)
 */
const useIntersectionObserver = (
  elementRef: RefObject<Element>,
  { therehold = 0.1, root = null, rootMargin = '0' },
) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>()

  //entry값 업데이트 함수
  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry)
  }

  // @node : 받아올 ref의 현재값
  // @hasIsSupport : 현재 브라우저가 IntersectionObserver 지원하는지 아닌지 (falsy 이면 훅 사용불가)
  // @observerParam : 사용하는 param
  // @observer : observer 인스턴스(update콜백, param값) => node 값 관찰
  useEffect(() => {
    const node = elementRef?.current
    const hasIsSupport = !!window.IntersectionObserver

    if (!node || !hasIsSupport) return

    const observerParam = { therehold, root, rootMargin }
    const observer = new IntersectionObserver(updateEntry, observerParam)

    observer.observe(node)

    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef?.current, root, rootMargin, JSON.stringify(therehold)])

  return entry
}

export default useIntersectionObserver
