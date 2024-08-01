sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'kalesha/ust/kaleshafiori/test/integration/FirstJourney',
		'kalesha/ust/kaleshafiori/test/integration/pages/TravelPList',
		'kalesha/ust/kaleshafiori/test/integration/pages/TravelPObjectPage',
		'kalesha/ust/kaleshafiori/test/integration/pages/BookingPObjectPage'
    ],
    function(JourneyRunner, opaJourney, TravelPList, TravelPObjectPage, BookingPObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('kalesha/ust/kaleshafiori') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTravelPList: TravelPList,
					onTheTravelPObjectPage: TravelPObjectPage,
					onTheBookingPObjectPage: BookingPObjectPage
                }
            },
            opaJourney.run
        );
    }
);