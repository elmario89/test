import {actions, BASE_URL} from '../config/api';

export function sendApiRequest(actionName, options = {}) {
    const {query, data, fields} = options;
    const action = actions[actionName];

    if (! action.method || !action.url) {
        throw new Error('no method or url specified');
    }

    let {url} = action;
    if (options.params) {
        Object.keys(options.params).forEach((name) => {
            url = action.url.replace(
              `:${name}`,
              options.params[name]
            );
        });
    }

    const fetchOptions = {
        method: action.method,
        data: Object.assign({_fields: fields}, data),
        params: Object.assign({}, query, action.query)
    };

    return fetch(`${BASE_URL}${url}?_fields=${fetchOptions.params._fields}&limit=${fetchOptions.params.limit}`)
        .then(response => response.json())
        .then(winner => winner);
}
