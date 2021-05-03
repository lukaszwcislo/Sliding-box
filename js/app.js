import '../sass/style.scss';

document.addEventListener('DOMContentLoaded', () => {

    const slidingBox = () => {

        const handle = document.querySelector('.slider__handle');
        const slider = document.querySelector('.slider-wrapper');
        const imageWrapperSecond = document.querySelector('.slider-image-wrapper--second');
        const divider = document.querySelector('.slider__divider');
        let dragging;
        let sliderLeftOffset;
        let sliderWidth;
        let sliderHeight;

        function getOffset(clientX) {
            const offset = clientX - sliderLeftOffset;
            if (offset < 0) {
                return 0;
            } else if (offset > sliderWidth) {
                return sliderWidth;
            } else {
                return offset;
            }
        }
    
        function move(clientX) {
            const offset = getOffset(clientX);
            const percent = offset / sliderWidth * 100;
            divider.style.left = `${percent}%`;
            imageWrapperSecond.style.width = `${percent}%`;
        }

        function adjustImagesSize() {
            sliderLeftOffset = slider.offsetLeft;
            sliderWidth = slider.offsetWidth;
            sliderHeight = sliderWidth * 2/3 + 'px';
            slider.style.height = sliderHeight;
        }

        window.addEventListener('resize', adjustImagesSize);
        
        const initEvents = () => {

            handle.addEventListener('mousedown', ()=>{
                dragging = true;
            });
            handle.addEventListener('mouseup', ()=> {
                dragging = false;
            });
            handle.addEventListener('touchstart', ()=>{
                dragging = true;
            });
            handle.addEventListener('touchend', ()=>{
                dragging = false;
            });
            window.addEventListener('touchmove', (e)=>{
                if (dragging) {
                    move(e.touches[0].clientX);
                }
            });
            window.addEventListener('mousemove', e => {
                if (dragging) {
                    move(e.clientX);
                }
            });
        }

    initEvents();
    adjustImagesSize();

    }
    slidingBox();
});