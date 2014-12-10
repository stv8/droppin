app.service('CurrentUser', function(localStorageService) {

    this.store = function(token, email, first_name){
        localStorageService.add('droppin_token', token);
        localStorageService.add('droppin_email', email);
        localStorageService.add('droppin_first_name', first_name);
    }

    this.delete_all = function() {
        localStorageService.clearAll();
    }

    this.droppin_token = function(){
        return localStorageService.get('droppin_token');
    }

    this.email = function(){
        return localStorageService.get('droppin_email');
    }

    this.first_name = function(){
        return localStorageService.get('droppin_first_name');
    }

    this.authorization_header = function() {
        if(this.isAuthenticated()) {
            return { 'token': this.droppin_token(), 'email': this.email() };
        } else {
            return { 'token': null };
        }
    };

    this.isAuthenticated = function(){
        var boolean = ( this.droppin_token() != null && this.email() != null && this.droppin_token().length != 0 && this.email().length != 0);
        console.log(boolean);
        return boolean;
    }

    this.update = function(user){
        localStorageService.add('droppin_email', user.email);
        localStorageService.add('droppin_first_name', user.first_name);
    }

    this.sign_out = function(){
        this.delete_all();
        location.reload()
    }
});