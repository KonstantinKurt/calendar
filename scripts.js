var onloads = [];
//////////////////////////
function calendar() {
    var monthArray = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    var dayArray = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    var now = new Date(); // Получаем текущую дату;   
    //now.setMonth(9); // Для теста; С изменением месяца все работает нормально;
    var currentMonth = now.getMonth(); // Получаем текущий месяц;
    var table = document.createElement('table'); // Создаем таблицу;
    table.className = 'table'; // Присваиваем таблице класс;
    document.body.appendChild(table); // Родитель таблицы - боди;
    var caption = document.createElement('caption'); // Создаем шапку;
    caption.className = 'caption';
    table.appendChild(caption);
    caption.innerHTML = monthArray[currentMonth]; //Присваиваем содержимому шапки значение текущего месяца;
    var dayRow = document.createElement('tr'); // Создаем строку для дней недели;
    dayRow.className = 'dayRow';
    table.appendChild(dayRow);
    for (var i = 0; i < dayArray.length; i++) { // Заполняем ячейки в цикле значениями из массива дней недели;
        var dayTd = document.createElement('td');
        if (i === 5 || i === 6) { // Субботу и воскресенье подкрашиваем красным;
            dayTd.className = 'dayTd';
            dayTd.style.color = 'red';
        } else {
            dayTd.className = 'dayTd';
        }
        dayRow.appendChild(dayTd);
        dayTd.innerHTML = dayArray[i];
    };
    now.setDate(1); // Изменяем число текущего месяца на 1е;
    var firstDayInCurrentMonth = now.getDay(); // Получаем день недели (для ноября 2018 - 4 т.е. четверг);
    if (firstDayInCurrentMonth == 0)
        firstDayInCurrentMonth = 7; // Преобразыем воскресенье в 7ку (изначально воскресенье - 0);
    function daysInMonth(month, year) { // Функция подсчета колличества дней в заданном месяце;
        return 32 - new Date(year, month, 32).getDate();
    }
    var amountDaysInCurrentMonth = daysInMonth(now.getMonth(), now.getFullYear()); // Получаем колличество дней текущего месяца;
    for (var i = 1; i < 36; i++) {  // Добавляем ячейки под числа и заполняем таблицу;
        if (i % 7 == 1) {
            var newRow = document.createElement('tr');
            table.appendChild(newRow);
            temp = i + 7;
            for (var j = i; j < temp ; j++) {
            	var td = document.createElement('td');
            	newRow.appendChild(td);
            	if(j < firstDayInCurrentMonth || j > amountDaysInCurrentMonth + (firstDayInCurrentMonth-1) ){
            		td.innerHTML = "";
            	}

            	else{
            		td.innerHTML = j -(firstDayInCurrentMonth-1);
            	}
            	if((j == temp -2 || j == temp -1) && td.innerHTML != "")
            	{
            		td.style.background = 'green';
            	}
            	
            }
        }
    }


}


onloads.push(calendar);
//////////////////////////
window.onload = function() {
    for (var i in onloads) {
        onloads[i]();
    }
}