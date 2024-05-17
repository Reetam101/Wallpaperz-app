const API_KEY='43914025-0ef2e9363a857e451acdc2d5f'
const API_URL=`https://pixabay.com/api/?key=${API_KEY}`

export const apiCall = async (params) => {
    try {
        const response = await axios.get(formatUrl());
    } catch (error) {
        console.log('error: ', error.message)
        return { success: false, msg: error.message }
    }
}