// ColorPicker

const colorPickerEl = document.getElementById('color_picker');

colorPickerEl.addEventListener("click", function(event){
  console.log('click', event);
});

 window.state = {
  currentTool: '',
};

colorPickerEl.addEventListener('click', (event) => {
  console.log('click', event);
  window.state.currentTool = 'colorPicker';
  colorPickerEl.classList.add('highlight-color-picker');
});

const headerEl = document.getElementById('header');

headerEl.addEventListener('click', () => {
  window.state.currentTool = 'none';
  colorPickerEl.classList.remove('highlight-color-picker');
});

document.addEventListener('click', (event) => {
  if (window.state.currentTool === 'colorPicker') {
    const colorValueEl = document.getElementById('chosen_color');
    colorValueEl.style.background = getComputedStyle(event.target).backgroundColor || 'none';
    console.log('color', event.target.style.backgroundColor);
    console.log('color', getComputedStyle(event.target).backgroundColor);
  }
});

// Bucket

const bucketEl = document.getElementById('bucket');
console.log('bucket', bucket);

bucketEl.addEventListener("click", function(event){
  console.log('click', event);
});

 window.state = {
  currentTool: '',
};

bucketEl.addEventListener('click', (event) => {
  console.log('click', event);
  window.state.currentTool = 'bucket';
  bucketEl.classList.add('highlight-color-picker');
});

const headerEl1 = document.getElementById('header');

headerEl1.addEventListener('click', () => {
  window.state.currentTool = 'none';
  bucketEl.classList.remove('highlight-color-picker');
});

document.addEventListener('click', (event) => {
  const b = event && event.target || window.event.srcElement;
  if (window.state.currentTool === 'bucket' && "canvas-item" == b.className) {
    event.stopPropagation ? event.stopPropagation() : event.cancelBubble = !0;
    event = window.getComputedStyle ? getComputedStyle(b, "") : b.currentStyle;
    event = event.backgroundColor;
    let c = b.getAttribute("color");
    element=document.getElementById("chosen_color");
    currentColor = getComputedStyle(element).backgroundColor;
    b.style.backgroundColor = (c = event, currentColor);
    b.setAttribute("color", c)
  }
});
