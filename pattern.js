//make anonymous function to avoid name clashing
!function() {
	function foo() {
		console.log('foobar');
	};
	//call function
	foo();
}();

//they say this is faster because it's all in the same scope
!function(underscore) {
	underscore.some_method = "yay!!";
	console.log(underscore.VERSION);
}(_);

//module pattern example
//
//if you are importing this over a previous existing newModule,
//the last module loaded will overwrite the previous one
//
//you cannot pass variables between modules!!!
//
//?? the .sub means inheritance??
//
var newModule.sub = (function(exports) {
	//local variable to serve as a sort of private container
	var exports = {
		foo: 5,
		bar: 10
	};
	//assigning a method called 'helloMars'
	exports.helloMars = function() {
		console.log("Hello Mars!");
	};
	//creating another example
	exports.goodbye = function() {
		console.log("Goodbye!");
	};
	//but you can return the values if you want
	return exports;
//if newModule exists, import it, else import it as a simple object
}(newModule.sub || {}));

//this is some code from Polyglot.js

!function(root) {
//...
	// Export for Node, attach to 'window' for browser.
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = Polyglot;
	} else {
		root.Polyglot = Polyglot;
	}
//...
}(this);
