import { useEffect, useState, useRef } from 'react'

export function useNearScreen () {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(function () {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined' ? window.IntersectionObserver : import('intersection-observer')
    ).then(() => {
        // Saber si el elemento está en el viewport o no, es decir, si el usuario lo está viendo o no.
        const observer = new window.IntersectionObserver(function (entries) {
          const { isIntersecting } = entries[0]
    
          if (isIntersecting) {
            setShow(true)
            observer.disconnect()
          }
        })
        observer.observe(element.current)
      })
  }, [element])

  return [show, element]
}
