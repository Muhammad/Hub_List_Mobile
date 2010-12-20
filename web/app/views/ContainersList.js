HubList.views.ContainersList = Ext.extend(Ext.List, {

    initComponent: function() {
        Ext.apply(this, {
	        itemTpl: new Ext.XTemplate(
	        	'<div class="container-list-item">',
	        		'<img class="container-icon" src="resources/images/{type}-icon.png" /><span>{name}</span>',
	        	'</div>'
	        ),
            store: HubList.stores.Containers
        });
    
		HubList.views.ContainersList.superclass.initComponent.apply(this, arguments);	
    }
    
});

Ext.reg('containerslist', HubList.views.ContainersList);