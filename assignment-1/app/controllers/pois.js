'use strict';

const POI = require('../models/poi');

const Pois = {
    home: {
        handler: function(request, h) {
            return h.view('home', {title: 'Add a POI'})
        }
    },
    report: {
        handler: async function(request, h) {
            const poi = await POI.find().lean();
            return h.view('report', {
                title: 'Points of Interest',
                poi: poi
            });
        }
    },
    addPoi: {
        handler:  async function(request, h) {
            const data = request.payload;
            const newPOI= new POI({
                poiName: data.poiName,
                poiDescription: data.poiDescription,
                poiCategory: data.poiCategory,
                poiLatitude: data.poiLatitude,
                poiLongitude: data.poiLongitude
            })
            await newPOI.save();
            return h.redirect('/report');
        }
    },
    editPoi: {
        handler: async function(request, h) {

        }
    }
};

module.exports = Pois;

