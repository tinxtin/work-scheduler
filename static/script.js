
$(document).ready(() => {
    var time = currTime();
    colorTimeBlock(12);

})

function currTime() {
    var dateEl = $('#currentDay');
    var createTimeEl = $('<div>');
    var currDate = dayjs().format('[Current day: ]dddd[,] MMMM d[th]');
    dateEl.append(createTimeEl.text(currDate));
    return parseInt(dayjs().format('H'));
}

function colorTimeBlock(currTime) {
    $('.description').each(function() {
        var blockTime = ($(this).attr('data-time'))

        blockTime < currTime ? $(this).css('background-color', 'grey') 
        : blockTime > currTime ? $(this).css('background-color', 'green')
        : $(this).css('background-color', 'red');
    })
}

