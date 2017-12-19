import {sendApiRequest} from 'src/services/apiService';

export function paginate(page, methodName, limit) {
    return sendApiRequest(methodName, {
        query: {
            limit,
            skip: page * limit
        }
    })
}
