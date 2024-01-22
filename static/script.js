
$(document).ready(() => {
    var time = currTime();
    colorBlock(time);
    setInterval(function() {
        colorBlock(time);
    },60000)

    $('.description').on('click', function() {
        editBlock($(this));
        if (!$(this).is(':focus')) {$(this).focus();}
    })
    $('.description').on('focusout', function() {
        editBlock($(this));
    })
    $('.saveBtn').on('click', function() {
        var $descText = $(this).siblings('.description').text();
        var $descTime = $(this).siblings('.description').attr('data-time');
        localStorage.setItem($descTime, $descText)
    })
})

function currTime() {
    var $dateEl = $('#currentDay');
    var $createTimeEl = $('<div>');
    var currDate = dayjs().format('[Current day: ]dddd[,] MMMM d[th]');
    $dateEl.append($createTimeEl.text(currDate));
    return parseInt(dayjs().format('H'));
}

function colorBlock(currTime) {
    $('.description').each(function() {
        var $blockTime = ($(this).attr('data-time'));
        $blockTime < currTime ? $(this).css('background-color', 'grey') 
        : $blockTime > currTime ? $(this).css('background-color', 'green')
        : $(this).css('background-color', 'red');
    })
}

function editBlock($descEl) {
    isEditable = $descEl.is('.editable');
    $descEl.prop('contentEditable',!isEditable).toggleClass('editable')
}

function saveBlock() {

}