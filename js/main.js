angular.module('demo', []);

angular.module('demo').controller('DemoController', function($scope) {

});

angular.module('demo').directive('demoDirectiveCounter', function() {
    return {
        scope : { inputText: '@' },
        template : '<p ng-class="{ \'text-success\' : inputText > 0, \'text-danger\' : inputText > 10 }">Število znakov: {{ inputText }}</p>'
    };
})

angular.module('demo').directive('demoDirectiveNewsletter', function() {
    return {
        template : '<div class="form-group"><label for="">Prijava na newsletter</label><input type="text" input-text="{{ newsletterEmail }}" ng-model="newsletterEmail" class="form-control" /><button class="btn btn-primary" ng-click="submit();">Prijava</button></div>',
        controller: function($scope) {
            $scope.submit = function() {
                alert('Pošiljam: ' + $scope.newsletterEmail);
            }
        }
    };
})

angular.module('demo').directive('demoDirectiveMonths', function() {
    return {
        template : '<div class="form-group"><label for="">Meseci</label><input type="number" input-text="{{ monthNumber }}" ng-model="monthNumber" ng-blur="months();" class="form-control" /><p>{{ month }}</p></div>',
        controller: function($scope) {
            $scope.months = function() {
                months = ['januar', 'februar', 'marec', 'april', 'maj', 'junij', 'julij', 'avgust', 'september', 'oktober', 'november', 'december'];
                $scope.month = months[$scope.monthNumber - 1];
            }
        }
    };
})