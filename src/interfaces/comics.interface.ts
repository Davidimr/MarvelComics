export interface Comics{
    title: string,
    thumbnail: {
        path: string
    },
    extension: string,
    prices: [
        {
            price: string
        }
    ]
}