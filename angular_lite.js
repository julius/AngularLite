/*

AngularLite
by Julius Eckert

*/
(function () {

	var module = angular.module("angularLite", []);
	var injector = null;

	// creates a new scope for the given element
	var scope = function (element) {
		injector = injector || angular.injector([["$provide", function ($provide) {}], "ng", "angularLite"]);
		var resultScope = null;

		injector.invoke(['$rootScope', '$compile', '$injector', '$animate',
			function(scope, compile, injector, animate) {
				resultScope = scope.$new();
				resultScope.$apply(function () {
					compile(element)(resultScope);
				});
			}
		]);

		return resultScope;
	};

	// lets you define new directives
	// NOTE: all directives have to be declared before the first call of scope
	var directive = function () {
		if (injector) throw "You must define all directives before you call .scope the first time."
		module.directive.apply(module, arguments);
	};

	// lets you define new filters
	// NOTE: all filters have to be declared before the first call of scope
	var filter = function () {
		if (injector) throw "You must define all filters before you call .scope the first time."
		module.filter.apply(module, arguments);
	};

	// export api
	window.angularLite = {
		module_: module,

		scope: scope,
		filter: filter,
		directive: directive
	};

})();


