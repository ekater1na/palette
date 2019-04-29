const colorPickerEl = document.getElementById('color_picker');
//console.log('colorPickerEl', colorPickerEl);
colorPickerEl.addEventListener("click", function(event){
  console.log('click', event);
});

 window.state = {
  currentTool: 'colorPicker',
};

document.addEventListener('click', (event) => {
  // eslint-disable-next-line no-console
  console.log('click', event);
  console.log('color', event.target.style.backgroundColor);
});

