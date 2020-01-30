console.log("Привет, мир!");

let a = 0.2,
    b = 1.1,
    sum = a + b,
    difference = a - b,
    multiplication = a * b,
    division = a / b,
    modulo = a % b,
    result = [sum, difference, multiplication, division, modulo],
    operation = ['sum', 'difference', 'multiplication', 'division', 'modulo'],
    isInt = ['', '', '', '', ''],
    maxResult = result[0],
    maxi = 0,
    minResult = result[0],
    mini = 0,
    tempValue,
    tempString;
for (let i = 0; i < 5; ++i) isInt[i] = (Number.isInteger(result[i]));
if (isInt[0] && isInt[1] && isInt[2] && isInt[3] && isInt[4]) {
    tempValue = result[0] + result[1] + result[2] + result[3] + result[4];
    tempString = 'All results are integer ---> Output (a+b) + (a-b) + (a*b) + (a/b) + (a%b) = ';
} else if (!isInt[0] && !isInt[1] && !isInt[2] && !isInt[3] && !isInt[4]) {
    tempValue = '';
    tempString = 'All results are double ---> Change background';
    document.body.style.backgroundImage = 'url(new.jpg)';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center top';
    document.body.style.backgroundColor = '#b9e3e1';
} else {
    tempValue = sum;
    tempString = 'Results are integer and double ---> Output (a+b) = ';
};
let div = document.querySelectorAll("div");
div[0].textContent = 'a = ' + a;
div[1].textContent = 'b = ' + b;
div[2].textContent = '--------------------------------------------------------------------------------------------';
div[3].textContent = operation[0] + ': a + b = ' + result[0] + ' - ' + (isInt[0] ? 'integer' : 'double');
div[4].textContent = operation[1] + ': a - b = ' + result[1] + ' - ' + (isInt[1] ? 'integer' : 'double');
div[5].textContent = operation[2] + ': a * b = ' + result[2] + ' - ' + (isInt[2] ? 'integer' : 'double');
div[6].textContent = operation[3] + ': a / b = ' + result[3] + ' - ' + (isInt[3] ? 'integer' : 'double');
div[7].textContent = operation[4] + ': a % b = ' + result[4] + ' - ' + (isInt[4] ? 'integer' : 'double');
div[8].textContent = '--------------------------------------------------------------------------------------------';
div[9].textContent = tempString + ' ' + tempValue;

/*alert('a = ' + a + '\nb = ' + b + '\n\n' +
    operation[0] + ': a + b = ' + result[0] + ' - ' + (isInt[0] ? 'integer' : 'double') + '\n' +
    operation[1] + ': a - b = ' + result[1] + ' - ' + (isInt[1] ? 'integer' : 'double') + '\n' +
    operation[2] + ': a * b = ' + result[2] + ' - ' + (isInt[2] ? 'integer' : 'double') + '\n' +
    operation[3] + ': a / b = ' + result[3] + ' - ' + (isInt[3] ? 'integer' : 'double') + '\n' +
    operation[4] + ': a % b = ' + result[4] + ' - ' + (isInt[4] ? 'integer' : 'double') + '\n\n' +
    tempString + ' ' + tempValue);*/






/*let Photos = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg'];
let a = -1.0;
if (Number(String(a) + ".")) { alert(a + ' целое число') }
else { alert(a + ' дробное число') };/
/*alert('Смотри фокус! Не было фотографий...');
for (let i = 0; i < 12; i++) {
    function img(i) {
        //alert('Сейчас загрузится изображение с номером ' + String(i + 1));
        var img = document.createElement('img');
        img.setAttribute('src', Photos[i]);
        img.setAttribute('alt', 'Фото №' + String(i + 1));
        img.setAttribute('width', '100px');
        img.setAttribute('style', 'padding: 5px');
        document.getElementById('photos').appendChild(img);
    }
    setTimeout(img(i), 5000);
}
alert('...Появились фотографии!');*/

/*function changeDiv() {
        //alert('Сейчас блок HEADER поменяет цвет на синий, граница будет зелёной, а текст оранжевый')
        let divItem = document.getElementById("head");
        divItem.setAttribute(
            "style",
            "background-color: #0047a3; border: 1px solid #3abb01; color: #ff7c00;"
        );
    }
setTimeout(changeDiv(), 5000);*/



