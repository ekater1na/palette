// ColorPicker

const colorPickerEl = document.getElementById('color_picker');

colorPickerEl.addEventListener("click", function(event){
  console.log('click', event);
});

 window.state = {
  currentTool: 'colorPicker',
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

