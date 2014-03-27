AngularLite - Use AngularJS as a library
===========================================

AngularLite allows you to use core AngularJS functionality for 
data-binding, dom-manipulation etc. in existing projects and normal websites.

With AngularLite, you can inject all the power of AngularJS into a small part of your DOM.



Example
===========================================

html:
		...
		<div id="foo">
			<div>Name = {{name}}</div>
			<input type="text" ng-model="name">
			<input type="button" ng-click="ouch()" value="Ouch!">
		</div>
		...
		<script src="path/to/angular.js"></script>
		<script src="path/to/angular_lite.js"></script>
		...

js:
		var vm = angularLite.scope(jQuery("#foo"));
		vm.name = "Peter Pan";
		vm.ouch = function () {
			alert("Ouch!!!");
			vm.name = "Peter Parker";
		};
		vm.$digest();


