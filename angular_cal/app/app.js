/**
 * Created by Jerry on 5/10/16.
 */

var calModule = angular.module('cal',['mwl.calendar', 'ui.bootstrap']);

calModule.config(function(calendarConfig) { //this is run before the app itself (config step)

    console.log(calendarConfig); //view all available config

    calendarConfig.templates.calendarSlideBox = 'app/views/calendarDetailCustom.html'; //change the month view template to a custom template


});

calModule.controller('mainController',function(){
    
    var vm = this;

    vm.test = 'hello world';
    
    //These variables MUST be set as a minimum for the calendar to work
    vm.calendarView = 'month';
    vm.viewDate = new Date();
    vm.events = [
        {
            title: 'An event',
            type: 'warning',
            address: '1234 fake St.',
            startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
            endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
            draggable: true,
            resizable: true
        }, {
            title: '<i class="glyphicon glyphicon-asterisk"></i> <span class="text-primary">Another event</span>, with a <i>html</i> title',
            type: 'info',
            address: '1234 fake St.',
            startsAt: moment().subtract(1, 'day').toDate(),
            endsAt: moment().add(5, 'days').toDate(),
            draggable: true,
            resizable: true
        }, {
            title: 'This is a really long event title that occurs on every year',
            type: 'important',
            address: '1234 fake St.',
            startsAt: moment().startOf('day').add(7, 'hours').toDate(),
            endsAt: moment().startOf('day').add(19, 'hours').toDate(),
            recursOn: 'year',
            draggable: true,
            resizable: true
        }
    ];

    vm.isCellOpen = true;

    vm.eventClicked = function(event) {
        //alert.show('Clicked', event);
    };

    vm.eventEdited = function(event) {
        //alert.show('Edited', event);
    };

    vm.eventDeleted = function(event) {
       // alert.show('Deleted', event);
    };

    vm.eventTimesChanged = function(event) {
       // alert.show('Dropped or resized', event);
    };

    vm.toggle = function($event, field, event) {
        $event.preventDefault();
        $event.stopPropagation();
        event[field] = !event[field];
    };

});