import $ from 'jquery'

export default class iFrameHeightAdjuster {

    constructor(iframeSelector) {
        this.iframeElement = $(iframeSelector);
        if (this.iframeElement.length) {
            window.addEventListener('message', this.iFrameElementResize.bind(this));
        }
    }

    iFrameElementResize(event) {
        console.dir(event.data);
        if (event.data && event.data.indexOf('sizing') !== -1) {
            let size = event.data.replace('sizing:', '');
            this.iframeElement.css({height: size + 'px'});
        }
    }
}