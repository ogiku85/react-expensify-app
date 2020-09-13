export const setTextFilter = (text = '') =>{
    return {
        type: 'SET_TEXT_FILTER',
        text:text

    }
}
//setStartDate
export const setStartDate = (startDate) =>{
    return {
        type: 'SET_START_DATE',
        startDate:startDate

    }
}

//setEndDate
export const setEndDate = (endDate) =>{
    return {
        type: 'SET_END_DATE',
        endDate:endDate

    }
}
export const sortByDate = () =>{
    return {
        type: 'SORT_BY_DATE'
    }
}
export const sortByAmount = () =>{
    return {
        type: 'SORT_BY_AMOUNT'

    }
}