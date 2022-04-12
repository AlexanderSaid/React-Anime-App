import { useState, useEffect } from "react"

const useAxios = (configObj) => {
  const { axiosInstance, method, url, requestConfig = {} } = configObj

  const [response, setResponse] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)
  const [pages, setPages] = useState(0)

  useEffect(() => {
    const controller = new AbortController()
    const fetchData = async () => {
      try {
        const res = await axiosInstance[method.toLowerCase()](url, {
          ...requestConfig,
          signal: controller.signal,
        })
        res.data.pagination && setPages(res.data.pagination.last_visible_page)
        setResponse(res.data.data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()

    // useEffect cleanup
    return () => controller.abort()
    //eslint-disable-next-line
  }, [url])
  return [response, error, loading, pages]
}
export default useAxios
