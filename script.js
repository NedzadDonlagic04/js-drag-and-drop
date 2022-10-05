const dragBox = document.querySelector('.drag-me');
const dragText = dragBox.querySelector('.box-text');

const dropBox = document.querySelector('.drop-box');
const dropText = dropBox.querySelector('.box-text');
const boundingRect = dropBox.getBoundingClientRect();

const resetBtn = document.querySelector('.reset');

dragBox.addEventListener('dragstart', () => {
    dragBox.classList.add('dragged');
});

dragBox.addEventListener('dragend', event => {
    dragBox.classList.remove('dragged');
    const [mouseX, mouseY] = [event.clientX, event.clientY];

    if(mouseX >= boundingRect.left && mouseX <= boundingRect.right && mouseY >= boundingRect.top && mouseY <= boundingRect.bottom)
    {
        dropText.innerHTML = 'Content';
        dropBox.classList.remove('drop-box');
        dropBox.classList.add('drag-me');
        dragBox.style.visibility = 'hidden';
        resetBtn.style.display = 'inline-block';
    }
});

resetBtn.addEventListener('click', () => {
    dropText.innerHTML = 'Drag';
    dropBox.classList.add('drop-box');
    dropBox.classList.remove('drag-me');
    dragBox.style.visibility = 'visible';
    resetBtn.style.display = 'none';
});