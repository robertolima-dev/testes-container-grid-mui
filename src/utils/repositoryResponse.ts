
export const handleSuccess = (res: any) => {
    return {
        type: 'success',
        status: res.status,
        data: res.data
    }
}

export const handleError = (error: any) => {
    if (error && error.response && error.response.data && error.response.data.message) {

        return {
            type: 'error',
            status: error.response.status,
            message: error.response.data.message
        }

    }

    return {
        type: 'error',
        status: 500,
        message: 'Ocorreu um erro, tente novamente mais tarde!'
    }
}