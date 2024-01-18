
function displayTodayTime() {
    var dateEl = $('#currentDay');
    var createEl = $('<div>');

    var setting = { 
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day:'numeric'
    };
    var d = new Date();
    var currentDate = d.toLocaleDateString('en-GB', setting)

    dateEl.append(createEl.text(currentDate));
}

displayTodayTime();