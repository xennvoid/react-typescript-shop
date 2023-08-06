export interface IFilterObject {
    title: string,
    items: IFilterItem[]
}

export interface IFilterItem {
    title: string,
    query: string,
    active: boolean
}