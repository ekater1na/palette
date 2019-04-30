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
  if (window.state.currentTool === 'bucket' &&  b.className == "canvas-item") {
    event.stopPropagation ? event.stopPropagation() : event.cancelBubble = !0;
    event = window.getComputedStyle ? getComputedStyle(b, "") : b.currentStyle;
    event = event.backgroundColor;
    element = document.getElementById("chosen_color");
    currentColor = getComputedStyle(element).backgroundColor;
    b.style.backgroundColor = (c = currentColor);
  }
});

// Transform
const transformEl = document.getElementById('transform');
console.log('transformEl', transformEl);

transformEl.addEventListener("click", function(event){
  console.log('click', event);
});

 window.state = {
  currentTool: '',
};

transformEl.addEventListener('click', (event) => {
  console.log('click', event);
  window.state.currentTool = 'transform';
  transformEl.classList.add('highlight-color-picker');
});

const headerEl2 = document.getElementById('header');

headerEl2.addEventListener('click', () => {
  window.state.currentTool = 'none';
  transformEl.classList.remove('highlight-color-picker');
});

document.addEventListener('click', (a) => {
  const b = a && event.target || window.a.srcElement;
  if (window.state.currentTool === 'transform' &&  b.className == "canvas-item") {
    a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
    a = window.getComputedStyle ? getComputedStyle(b, "") : b.currentStyle;
    a = a.borderRadius ;
    var d = b.getAttribute("border-radius", 50);
    if (b.style.borderRadius == '50%') {
      b.style.borderRadius = '0%';
    }
    else {
      b.style.borderRadius = '50%';
}}})