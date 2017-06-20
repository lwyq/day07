//IIFE

(function () {
    var RegApp = angular.module("RegApp", []);
    console.log(" in app");

    var RegCtrl = function () {
        var regCtrl = this;
        regCtrl.name = "";
        regCtrl.email = "";
    console.log("in controller");
                regCtrl.resetForm = function () {
                    regCtrl.name = "";
                    regCtrl.email = "";
                }
    
        regCtrl.register = function () {

            if (!(regCtrl.name || regCtrl.email)) {
                regCtrl.message = "Incomplete form";
                return
            }
            console.log("name = %s", regCtrl.name);
            console.log("email = %s", regCtrl.email);
        }

regCtrl.isvalid = function(form, fieldName){
    console.log("fieldName = " + form[fieldName].$invalid);
    return (form[fieldName].$invalid);
}

    };
    /*
    //creating a prototype
    RegCtrl.prototype.resetForm = function () {
        var regCtrl = this;
        regCtrl.name = "";
        regCtrl.email = "";
    }
*/
    RegApp.controller("RegCtrl", RegCtrl);
})();