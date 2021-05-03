// 1)
const navCategoriesEl = document.querySelector('#categories');
const quontityOfCategoriesEl = navCategoriesEl.children.length;
console.log(`В списке ${quontityOfCategoriesEl} категории.`);

// 2)
const itemEl = document.querySelectorAll('.item')
itemEl.forEach((element) =>
    console.log(
        `Категория: ${element.firstElementChild.textContent}.`,
        `Количество элементов: ${element.lastElementChild.children.length};`
        
    )
); 