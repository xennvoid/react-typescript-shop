import { useEffect, useMemo } from 'react'
import useAxios from './useAxios'
import { IProduct } from '../types/product'
import { AxiosError, AxiosResponse } from 'axios';
import { IFilterItem } from '../components/ProductFilter/filters';

type UseProducts = {
    activeFilters?: IFilterItem[],
    productType?: string,
    currentPage?: number,
    productsPerPage?: number,
    dependencies?: any[]
}

type UseProductsReturnType = {
    response: AxiosResponse<any, any> | undefined,
    data: IProduct[] | [],
    error: AxiosError<unknown, any> | undefined,
    loading: boolean,
    totalPages: number,
    makeRequest: () => void,
};

const useProducts = ({ activeFilters = [], productType, currentPage = 0, productsPerPage = 5, dependencies = [] }: UseProducts): UseProductsReturnType => {

    const queryFilters = useMemo(() => activeFilters?.map(filter => filter.query).join('&') || '', [activeFilters])

    console.log(queryFilters)

    const { response, loading, data = [], error, makeRequest } = useAxios<IProduct[]>({
        method: 'GET',
        url: queryFilters && `/products?${queryFilters}` || '/products',
        params: {
            product_type: productType,
            _page: currentPage,
            _limit: productsPerPage
        }
    })

    const totalPages = response?.headers['x-total-count']

    useEffect(() => {
        makeRequest()
    }, [...dependencies])

    return {
        response,
        loading,
        data,
        error,
        makeRequest,
        totalPages,
    }
}

export default useProducts