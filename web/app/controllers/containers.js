 /* @class containers
 * @extends Ext.Controller
 * 
 */
Ext.regController("containers", {
	defaultTarget: 'viewport',
    index: function() {
        var thisController = this;
        
        // temporary hack to only load top level items
        // TODO find a better way
        HubList.stores.Containers.load({
			callback:function(records, operation, success) {
				HubList.stores.Containers.filter({property:'containerId', value:0});
			}
		});
                
        this.homeView = this.render({
            xtype: 'containerslist',
            listeners: {
            	'itemtap': function(listPanel, itemIndex, itemNode, eventObj) {
            		var selectedContainer = listPanel.getRecord(itemNode);
            		thisController.list(selectedContainer);
            	}
            }
        }, 'viewport');
     
    },
    
    list: function(parentContainer) {
    	if(parentContainer.get('type') == 'folder') {
    		// make sure this container has items
    		if(parentContainer.children().getCount()  > 0) {
	    		this.homeView.bindStore(parentContainer.children()); 
	    	} else {
	    		// in the future will probably display a specific view for this
	    		Ext.Msg.alert('Alert', 'Empty container view will go here with prompt to add items.', Ext.emptyFn);
	    	}
    	} else if(parentContainer.get('type') == 'list') {
    		// for now we just display an alert
    		Ext.Msg.alert('Alert', 'Coming soon, view list of tasks.', Ext.emptyFn);
    		// eventually pass control to tasks controller action maybe using dispatch
    		//Ext.dispatch({controller: 'tasks', action: 'list', list: parentContainer});
    	} 	
    }

});