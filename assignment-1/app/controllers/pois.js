'use strict';

const Pois = {
    home: {
        handler: function(request, h) {
            return h.view('home', {title: 'Add a POI'})
        }
    },
    report: {
        handler: function(request, h) {
            return h.view('report', {
                title: 'Points of Interest',
                poilist: this.poilist
            });
        }
    },
    addPoi: {
        handler: function(request, h) {
            const data = request.payload;
            var userEmail= request.auth.credentials.id;
            data.user= this.users[userEmail];
            this.poilist.push(data);
            return h.redirect('/report');
        }
    }
};

module.exports = Pois;

