export const BASE_URL = 'http://api.tappawards.com/api/v1';

export const APP_FIELDS = [
    'name',
    'platform',
    'developer(name,url)',
    'collaborator(name,url)',
    'screens',
    'video(videoThumbnail)',
    'statusChangeDate',
    'description',
    'storeUrl',
    'screensBgColor',
    'rateDate',
    'rates',
    'winDate',
    'isLiked',
    'likeCount',
    'icon',
    'price',
    'totalCount',
    'permalink'
].join(',');

export const actions = {
    listWinners: {
        method: 'GET',
        url: '/apps/winners',
        query: {
            _fields: `items(${APP_FIELDS})`
        }
    }
};