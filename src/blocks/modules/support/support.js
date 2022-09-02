
window.onload = function () {
    const supportBlock = document.querySelector(".support-pannel");

    // const screenHeigth = window.screen.height;
    // const scrollHeight = document.body.scrollHeight;
    // console.log(screenHeigth, 'screen');
    // console.log(scrollHeight, 'scroll');
    // if(scrollHeight > screenHeigth) {
    //     supportBlock.style.top = `${document.body.scrollHeight - 60}px`;
    // } else {
    //     supportBlock.style.bottom = 40 + 'px';
    // }


    
    function enterSupportBlock(event) {
        console.log('enter');
    }
    
    function leaveSupportBlock() {
        console.log('leave');
    }
    
    supportBlock.addEventListener('mouseenter', enterSupportBlock);
    supportBlock.addEventListener('mouseleave', leaveSupportBlock)
}
