/**
 * This file sets application-wide settings and launches the application when everything has
 * been loaded onto the page.
 * 
 * The global variable hublist holds a reference to the application, and namespaces are automatically
 * set up for HubList.views, HubList.models, HubList.controllers and HubList.stores
 */ 
Ext.regApplication({
	name: "HubList",
    defaultTarget: "viewport",

	launch: function() {
	
		Ext.Viewport.init();
		this.viewport = new HubList.Viewport({application: this});
		Ext.Viewport.onOrientationChange();
				
		Ext.dispatch({
            controller: 'containers',
            action    : 'index'
        });
						
	}
	
}); 