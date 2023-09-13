


export default function useScroll() {

    function disableScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

        document.body.setAttribute('data-scroll-top', scrollTop);
        document.body.setAttribute('data-scroll-left', scrollLeft);

        document.body.style.overflow = 'hidden';
    }
    function enableScroll() {
        if (document.body.style.overflow = '') {

            const scrollTop = parseFloat(document.body.getAttribute('data-scroll-top')) || 0;
            const scrollLeft = parseFloat(document.body.getAttribute('data-scroll-left')) || 0;


            document.body.style.overflow = '';
            window.scrollTo(scrollLeft, scrollTop);
        }
    }

    return {disableScroll, enableScroll}
}