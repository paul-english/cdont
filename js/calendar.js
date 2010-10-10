
// Set up the data stores used by the calendar
this.calendarStore = new Ext.data.JsonStore({
    // config options
});
this.eventStore = new Ext.data.JsonStore({
    // config options
});
 
// Set up the UI
new Ext.Viewport({
    layout: 'border',
    items: [{
        id: 'app-header',
        region: 'north',
        // etc. -- static header area
    },{
        id: 'app-center',
        region: 'center',
        layout: 'border',
        items: [{
            id:'app-west',
            region: 'west',
            // etc. -- sidebar region configs
        },{
            // This is the start of the calendar
            xtype: 'calendarpanel',
            region: 'center',
 
            // Tie the data stores to the calendar
            eventStore: this.eventStore,
            calendarStore: this.calendarStore,
 
            // Configure views as needed
            monthViewCfg: {
                showWeekLinks: true
            },
 
            // CalendarPanel-specific configs as needed
            showTime: false,
 
            // Set up event listeners -- see the sample app code for the full list
            listeners: {
                'eventclick': {
                    fn: function(vw, rec, el){
                        // etc.
                    },
                    scope: this
                },
                'eventadd': {
                    fn: function(cp, rec){
                        // etc.
                    },
                    scope: this
                },
                // etc. -- there are a lot of these
                // These handlers allow the app code to coordinate between
                // components and the overall UI so that the components 
                // don't have to know about each other.
            }
        }]
    }]
});