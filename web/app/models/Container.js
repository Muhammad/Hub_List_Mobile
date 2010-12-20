HubList.Container = Ext.regModel('Container', {
    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'type', type: 'string'},
        {name: 'containerId'}
    ],
      
    associations: [
    	{type: 'hasMany', model: 'Container', name: 'children'},
    	{type: 'belongsTo', model: 'Container', foreignKey: 'containerId'}
    ],
    
    proxy: {
        type: 'localstorage',
        id  : 'containers'
    }

});