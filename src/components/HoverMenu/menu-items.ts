export interface IHoverMenuItem {
    name: string,
    children?: IHoverMenuItem[]
}

const menu = [
    {
        name: "Items1",
        children: [
            { name: "Items1 lvl2" },
            { name: "Items1 lvl2" }
        ]
    },
    {
        name: "Items2",
        children: [
            { name: "Items2 lvl2" },
            { name: "Items2 lvl2" }
        ]
    },
    {
        name: "Items3",
        children: [
            {
                name: "Items3 lvl2",
                children: [
                    { name: "Items3 lvl3" },
                ]
            },
            { name: "Items3 lvl2" }
        ]
    }
]

export default menu