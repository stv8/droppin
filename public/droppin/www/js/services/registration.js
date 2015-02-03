app.factory('Registration', function ($resource, Host) {
    return $resource(Host + '/api/v1/users/', {});
});