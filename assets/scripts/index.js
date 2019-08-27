/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
// ColorPicker

const colorPickerEl = document.getElementById('color_picker');

colorPickerEl.addEventListener('click', function() {});

window.state = {
    currentTool: '',
};

colorPickerEl.addEventListener('click', () => {
    window.state.currentTool = 'colorPicker';
    colorPickerEl.classList.add('highlight-color-picker');
});

const headerEl = document.getElementById('header');

headerEl.addEventListener('click', () => {
    window.state.currentTool = 'none';
    colorPickerEl.classList.remove('highlight-color-picker');
});

document.addEventListener('click', event => {
    if (window.state.currentTool === 'colorPicker') {
        const colorValueEl = document.getElementById('chosen_color');
        colorValueEl.style.background =
            getComputedStyle(event.target).backgroundColor || 'none';
    }
});

// Bucket

const bucketEl = document.getElementById('bucket');

bucketEl.addEventListener('click', function() {});

window.state = {
    currentTool: '',
};

bucketEl.addEventListener('click', () => {
    window.state.currentTool = 'bucket';
    bucketEl.classList.add('highlight-color-picker');
});

const headerEl1 = document.getElementById('header');

headerEl1.addEventListener('click', () => {
    window.state.currentTool = 'none';
    bucketEl.classList.remove('highlight-color-picker');
});

document.addEventListener('click', event => {
    const b = (event && event.target) || window.event.srcElement;
    if (
        window.state.currentTool === 'bucket' &&
        b.className === 'canvas-item'
    ) {
        event.stopPropagation
            ? event.stopPropagation()
            : (event.cancelBubble = !0);
        event = window.getComputedStyle
            ? getComputedStyle(b, '')
            : b.currentStyle;
        event = event.backgroundColor;
        const element = document.getElementById('chosen_color');
        const currentColor = getComputedStyle(element).backgroundColor;
        b.style.backgroundColor = currentColor;
    }
});

// Transform
const transformEl = document.getElementById('transform');

transformEl.addEventListener('click', function() {});

window.state = {
    currentTool: '',
};

transformEl.addEventListener('click', () => {
    window.state.currentTool = 'transform';
    transformEl.classList.add('highlight-color-picker');
});

const headerEl2 = document.getElementById('header');

headerEl2.addEventListener('click', () => {
    window.state.currentTool = 'none';
    transformEl.classList.remove('highlight-color-picker');
});

document.addEventListener('click', eventMove => {
    const b = (eventMove && eventMove.target) || window.a.srcElement;
    if (
        window.state.currentTool === 'transform' &&
        b.className === 'canvas-item'
    ) {
        eventMove.stopPropagation
            ? eventMove.stopPropagation()
            : (eventMove.cancelBubble = !0);
        eventMove = window.getComputedStyle
            ? getComputedStyle(b, '')
            : b.currentStyle;
        eventMove = eventMove.borderRadius;
        if (b.style.borderRadius === '50%') {
            b.style.borderRadius = '0%';
        } else {
            b.style.borderRadius = '50%';
        }
    }
});
