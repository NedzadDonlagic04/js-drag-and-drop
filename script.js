// Drag related elements
const dragBox = document.querySelector('.drag-me');
const dragText = dragBox.querySelector('.box-text');

// Drop box related elements
const dropBox = document.querySelector('.drop-box');
const dropText = dropBox.querySelector('.box-text');
const boundingRect = dropBox.getBoundingClientRect();

// Reset btn
const resetBtn = document.querySelector('.reset');

// Event listener used for adding opacity when element is dragged
dragBox.addEventListener('dragstart', () => {
    dragBox.classList.add('dragged');
});

// Event listener used for adding dragged element into empty space and allowing the reset btn to appear
dragBox.addEventListener('dragend', event => {
    dragBox.classList.remove('dragged');
    const [mouseX, mouseY] = [event.clientX - 10, event.clientY - 10];

    if(mouseX >= boundingRect.left && mouseX <= boundingRect.right && mouseY >= boundingRect.top && mouseY <= boundingRect.bottom)
    {
        dropText.innerHTML = 'Content';
        dropBox.classList.remove('drop-box');
        dropBox.classList.add('drag-me');
        dragBox.style.visibility = 'hidden';
        resetBtn.style.display = 'inline-block';
    }
});

// Event listener used to reset the drag and drop boxes
resetBtn.addEventListener('click', () => {
    dropText.innerHTML = 'Drag';
    dropBox.classList.add('drop-box');
    dropBox.classList.remove('drag-me');
    dragBox.style.visibility = 'visible';
    resetBtn.style.display = 'none';
});