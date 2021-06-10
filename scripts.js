  var imgArray = [];
  var imageUrl = "facebook_cell.svg";
  
  for (var i = 0; i < 20; i++) {
    var imgNumber = i + 1 >= 10 ? i + 1 : "0" + (i + 1);
    var imgPath = "tiles/tiles-" + imgNumber + ".jpg";
    imgArray.push(imgPath);
  }
  
  var filledCells = [
     1,2,3,4
  ];
  
  var box = document.querySelector(".box");
  for (let index = 0; index < 1400; index++) {
    const element = document.createElement("div");
    element.classList.add("item");
    element.addEventListener("click", function () {
      // если ячейка заполнена
      if (filledCells.includes(index)) {
        // то очистить её
        // element.style.backgroundImage = "none";
        element.style.backgroundColor = "white";
        // и удалить её индекс из массива индексов заполненных ячеек
        filledCells = filledCells.filter(function (cellIndex) {
          return cellIndex !== index;
        });
      } else {
        // если не заполнена
        // то заполнить
        // var imageUrl = "url(" + randomArrayItem(imgArray) + ")";
        element.style.backgroundColor = "red";
        // и добавить её индекс в массив индексов заполненных ячеек
        filledCells.push(index);
      }
      console.log(filledCells);
    });
    box.appendChild(element);
  }
  
  
  var cells = document.querySelectorAll(".item");
  cells.forEach(function (cell, cellIndex) {
    if (filledCells.includes(cellIndex)) {
      cell.style.backgroundImage = imageUrl;
      // cell.style.backgroundColor = "black";
    }
  });