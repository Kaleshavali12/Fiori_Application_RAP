sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'kalesha.ust.kaleshafiori',
            componentId: 'BookingPObjectPage',
            contextPath: '/TravelP/_Booking'
        },
        CustomPageDefinitions
    );
});