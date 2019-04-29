
const colorPickerEl = document.getElementById('color_picker');
//console.log('colorPickerEl', colorPickerEl);

colorPickerEl.addEventListener("click", function(event){
  console.log('click', event);
});

 window.state = {
  currentTool: 'colorPicker',
};

colorPickerEl.addEventListener('click', (event) => {
  // eslint-disable-next-line no-console
  console.log('click', event);
  window.state.currentTool = 'colorPicker';
  colorPickerEl.classList.add('highlight-color-picker');
});

document.addEventListener('click', (event) => {
  if (window.state.currentTool === 'colorPicker') {
    const colorValueEl = document.getElementById('chosen_color');
    colorValueEl.style.background = getComputedStyle(event.target).backgroundColor || 'none';
    console.log('color', event.target.style.backgroundColor);
    console.log('color', getComputedStyle(event.target).backgroundColor);
  }
});




