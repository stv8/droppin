app.factory('Session', function ($resource, Host) {
    return $resource(Host + '/api/v1/session', {});
});
