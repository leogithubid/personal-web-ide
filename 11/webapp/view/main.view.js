sap.ui.jsview("home.view.main",{
	getControllerName:function(){
		return "home.controller.main";
	},
	createContent:function(oController){
		var oButton = new sap.m.Button("clickButton",{
			text : "click me",
			press : function(){
				alert("Hello!");
			}
		});
		return oButton;
	} 
});