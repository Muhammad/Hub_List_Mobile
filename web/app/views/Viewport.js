HubList.Viewport = Ext.extend(Ext.Panel, {

    initComponent: function() {
        Ext.apply(this, {
            id: 'viewport',
            fullscreen: true,
            layout: 'card',
            scroll: 'vertical',
             dockedItems: [{
            	dock: 'top',
                xtype: 'toolbar',
                title: 'Hub List'
            },
            {
            	dock: 'bottom',
            	xtype: 'tabbar',
           	    cls: 'hl-bot-tbar',
            	defaults: {
            		iconAlign: 'top',
            		iconMask: true
            	},
            	layout: {pack:'center'}, 
            	ui:'light',
	            items: [{
		        		text: 'Home',
		        		iconCls	 : 'home'
		    		},
		    		{                      
		        		xtype: 'spacer',
		        		flex: 1
		    		},
		    		{
		        		text     : 'Settings',
						iconCls	 : 'settings'
		    		},
		    		{
		    			text: 'New',
		    			iconCls: 'add'
		    		}
		    	]
		    }]
	
        });
    
        HubList.Viewport.superclass.initComponent.apply(this, arguments);
    }
});