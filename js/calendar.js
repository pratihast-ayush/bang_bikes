const months = [
    { 'id': 1, 'name': 'January' },
    { 'id': 2, 'name': 'February' },
    { 'id': 3, 'name': 'March' },
    { 'id': 4, 'name': 'April' },
    { 'id': 5, 'name': 'May' },
    { 'id': 6, 'name': 'June' },
    { 'id': 7, 'name': 'July' },
    { 'id': 8, 'name': 'August' },
    { 'id': 9, 'name': 'September' },
    { 'id': 10, 'name': 'October' },
    { 'id': 11, 'name': 'November' },
    { 'id': 12, 'name': 'December' },
];
var currentYear = new Date().getFullYear();
var currentMonth = new Date().getMonth() + 1;
var counter = 0;


function letsCheck(year, month) {
    var daysInMonth = new Date(year, month, 0).getDate();
    var firstDay = new Date(year, month, 01).getUTCDay();
    var array = {
        daysInMonth: daysInMonth,
        firstDay: firstDay
    };
    return array;
}


function makeCalendar(year, month) {
    var getChek = letsCheck(year, month);
    getChek.firstDay === 0 ? getChek.firstDay = 7 : getChek.firstDay;
    $('#calendarList').empty();
    for (let i = 1; i <= getChek.daysInMonth; i++) {
        if (i === 1) {
            var div = '<li id="' + i +  '"  style="grid-column-start: ' + getChek.firstDay + ';"' +'onclick="chooseDate('+ i +')">1</li>';
        } else {
            var div = '<li id="' + i + '" onclick="chooseDate('+ i +')">' + i +  '</li>'
        }
        $('#calendarList').append(div);
    }
    monthName = months.find(x => x.id === month).name;
    $('#yearMonth').text(monthName + ' ' +year );
}

makeCalendar(currentYear, currentMonth);


function nextMonth() {
    counter = 0;
    currentMonth = currentMonth + 1;
    if (currentMonth > 12) {
        currentYear = currentYear + 1;
        currentMonth = 1;
    }
    $('#calendarList').empty();
    $('#yearMonth').text(currentMonth + ' ' + currentYear );
    makeCalendar(currentYear, currentMonth);
}


function prevMonth() {
    counter = 0;

    currentMonth = currentMonth - 1;
    if (currentMonth < 1) {
        currentYear = currentYear - 1;
        currentMonth = 12;
    }
    $('#calendarList').empty();
    $('#yearMonth').text(currentMonth + ' ' + currentMonth);
    makeCalendar(currentYear, currentMonth);
}
function chooseDate(i) {
    counter++;
    var choosenDiv = document.getElementById(i);

    
    if (counter <= 3) {
        choosenDiv.style.backgroundColor = "blue";
        choosenDiv.style.borderRadius = "50%";
        choosenDiv.style.padding = "6px 10px";
        choosenDiv.style.color = "#fff";
        

    } if (i < 10) {
        choosenDiv.style.backgroundColor = "blue";
        choosenDiv.style.borderRadius = "50%";
        choosenDiv.style.padding = "6px 14px";
        choosenDiv.style.color = "#fff";
    }

}