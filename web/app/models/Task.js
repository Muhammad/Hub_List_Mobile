Ext.regModel('Task', {
    fields: [
        {name: 'id',        type: 'int'},
        {name: 'name',     type: 'string'},
        {name: 'parentId', type: 'int'},
        {name: 'listId', type: 'int'}
    ],
    
    belongsTo: 'List',
    	
    associations: [
    	{type: 'hasMany', model: 'Task', name: 'tasks'},
    	{type: 'belongsTo', model: 'Task', foreignKey: 'parentId'},
    	{type: 'belongsTo', model: 'Container', foreignKey: 'listId'}
    ],
   
    proxy: {
        type: 'localstorage',
        id  : 'tasks'
    }
});