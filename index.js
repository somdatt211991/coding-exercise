let array = [1,2,3,4,5,6,7,8,9];
let colorCode = ['#2b8ead', '#6f98a8', '#2f454e', '#909090']
/**
 * 
 * @param array 
 */
const shuffler = () => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    createListElement();
};

/**
 * 
 * @param array
 */
const sort = () => {
  array = array.sort((a, b) => {
    return a - b;
  });
  createListElement();
};

/**
 * getRandomcolor
 */
const getRandomColor = () => {
    return colorCode[Math.floor(Math.random()*colorCode.length)];
}
/**
 * @param array
 */
const createListElement = () =>{
    let item = document.querySelector("ul");
    item.innerHTML = '';
    for(let i=0;i<array.length;++i){
        let list = document.createElement('li');
        let span = document.createElement('span');
        let colorStamp = document.createElement('p');
        span.innerHTML = array[i];
        colorStamp.innerHTML = "&nbsp;&nbsp;";
        let color = getRandomColor();
        colorStamp.style.backgroundColor = color;
        colorStamp.style.margin = 0;
        colorStamp.style.height = 30;
        colorStamp.style.float = 'left';
        colorStamp.style.height = '45px';

        list.style.display = "flex";
        list.style.justifyContent = "flex-start";
        list.style.backgroundColor = color;
        list.append(colorStamp);
        list.append(span);
        item.append(list);
    }
}
