import { IFilterItem } from "../components/ProductFilter/filters"

const getActiveFilters = (filters: IFilterItem[]) => {
    return filters.filter(filter => filter.active)
}

export default getActiveFilters