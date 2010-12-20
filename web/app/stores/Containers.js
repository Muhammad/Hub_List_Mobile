HubList.stores.Containers = new Ext.data.Store({
    model: "Container",
    //autoLoad: true,
    listeners: {
    	load: function(store, records, successful) {
    		// check to see if any containers exist, if not create a default one
    		if(records.length == 0) {
    			var topContainer = store.add({name: 'Welcome to Hub List', type: 'folder', containerId: 0})[0];
    			store.sync();
    			
    			topContainer.children().add([
    				{name: 'Test Sub Folder', type: 'folder', containerId: topContainer.getId()},
    				{name: 'Test List', type: 'list', containerId: topContainer.getId()},
    			]);
    			topContainer.children().sync();
    		}
    	}
    }
});