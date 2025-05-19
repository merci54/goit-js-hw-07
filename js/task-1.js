
const childListElements = document.querySelectorAll('.item');


const listCounter = () => {
    console.log(`Number of categories: ${childListElements.length}`);

    childListElements.forEach(el => {

        console.log(`Category: ${el.firstElementChild.textContent}`);
        console.log(`Elements: ${el.lastElementChild.children.length}`);
    })

}
listCounter();

