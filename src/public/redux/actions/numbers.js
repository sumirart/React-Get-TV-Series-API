export const addNumber = number => ({
    type: "TAMBAH",
    payload: number
})

export const decreaseNumber = number => ({
    type: "KURANG",
    payload: number
})