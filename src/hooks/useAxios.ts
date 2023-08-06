import { useState, useEffect } from 'react'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.method = "get"

const useAxios = <T>(axiosParams: AxiosRequestConfig) => {

    const [response, setResponse] = useState<AxiosResponse>()
    const [data, setData] = useState<T>()
    const [error, setError] = useState<AxiosError>()
    const [loading, setLoading] = useState(axiosParams.method === "GET" || axiosParams.method === "get")

    const fetchData = async (params: AxiosRequestConfig) => {
        try {
            const result = await axios.request(params)
            setResponse(result)
            setData(result.data)
        } catch (err: any) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    const makeRequest = () => {
        fetchData(axiosParams)
    }

    useEffect(() => {
        fetchData(axiosParams)
    }, []);

    return { response, data, error, loading, makeRequest }
}

export default useAxios
