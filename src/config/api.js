export const BASE_URL = 'http://api.tappawards.com/api/v1';

export const APP_FIELDS = [
    'name',
    'platform',
    'developer(name,url)',
    'collaborator(name,url)',
    'screens',
    'video',
    'storeUrl',
    'screensBgColor',
    'rateDate',
    'rates',
    'winDate',
    'isLiked',
    'likeCount',
    'price'
].join(',');

export const actions = {
    listWinners: {
        method: 'GET',
        url: '/apps/winners',
        query: {
            _fields: `items(${APP_FIELDS})`
        }
    },
    listNominees: {
        method: 'GET',
        url: '/apps',
        query: {
            _fields: `items(${APP_FIELDS})`
        }
    }
};
