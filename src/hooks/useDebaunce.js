import { useEffect, useState } from 'react'

function useDebaunce(value) {
   const [debauncedvalue, setDebauncedValue] = useState(value)

   useEffect(() => {
      const handler = setTimeout(() => {
         setDebauncedValue(value)
      }, 500)
      return () => {
         clearTimeout(handler)
      }
   }, [value])

   return debauncedvalue
}

export default useDebaunce
