/**
 * Defines the API route we are using.
 */
var api_url = '';

switch( process.env.NODE_ENV ){
    case 'development':
        api_url = 'http://myadmint.com/api/v1';
        break;
    case 'production':
        api_url = 'http://myadmint.com/api/v1';
        break;
}

export const ROAST_CONFIG = {
    API_URL: api_url,
}