
$(document).ready(() => {
    currentTime();
})

function currentTime() {
    var dateEl = $('#currentDay');
    var createTimeEl = $('<div>');
    var currentDate = dayjs().format('[Current day: ]dddd[,] MMMM d[th]');
    dateEl.append(createTimeEl.text(currentDate));
}


