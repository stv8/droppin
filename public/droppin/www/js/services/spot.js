app.factory('Spot', function ($resource, Host, CurrentUser) {

    return $resource(Host + '/api/v1/spots/:id', {}, {
        'get':      { method:'GET', headers: CurrentUser.authorization_header() },
        'save':     { method:'POST', headers: CurrentUser.authorization_header() },
        'query':    { method:'GET', isArray: true, cache: true, headers: CurrentUser.authorization_header() },
        'remove':   { method:'DELETE', headers: CurrentUser.authorization_header() },
        'delete':   { method:'DELETE', headers: CurrentUser.authorization_header() },
        'update':   { method:'PATCH', headers: CurrentUser.authorization_header() }
    });
});