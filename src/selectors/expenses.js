import moment from 'moment';

const getVisibleExpenses = (expenses, filter) =>{
    // console.log('filter =', filter);
    return expenses.filter((expense) =>{
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = filter.startDate ? filter.startDate.isSameOrBefore(createdAtMoment, 'day'): true;
        const endDateMatch = filter.endDate ? filter.endDate.isSameOrAfter(createdAtMoment) : true;
        const textMatch = expense.description.toLowerCase().includes(filter.text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) =>{
        if(filter.sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        if(filter.sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

export default  getVisibleExpenses;