import angular    from 'angular';

class PeriodicElements {
    constructor($http) {
        this.$http = $http;
        this.api = 'http://127.0.0.1:1337/v1';
    }

    getElements() {
        return this.$http.get(`${this.api}/elements`);
    }
}

export default angular.module('services.periodic-elements', [])
    .service('periodicElements', PeriodicElements)
    .name;

PeriodicElements.$inject = ['$http'];
