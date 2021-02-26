function makeToolkitSdk() {
    const version = '1.0';

    //parse initial data
    function getInitialData() {
        const url = new URL(window.location.href);
        const data = url.searchParams.get('data');

        if (data) {
            var stringifiedObject = decodeURI(data);
            var object = JSON.parse(stringifiedObject);
            return object;
        }  

        return null;
    }

    const initialData = getInitialData();

    if (!initialData) {
        return {};
    }

    //SetSize
    function setSize(height, width, componentId = initialData.id) {
        parent.postMessage({
            id: initialData.id,
            extensionId: initialData.extensionId,
            type: 'setSize',
            componentId,
            height,
            width,
            version
        }, parent.origin);
    }

    //SetVisiblity
    function setVisibility(visible, componentId = initialData.id) {
        parent.postMessage({
            id: initialData.id,
            extensionId: initialData.extensionId,
            type: 'setVisibility',
            componentId,
            visible,
            version
        }, parent.origin);
    }

    const isNumber = function(value) {
        return typeof value === 'number' || value instanceof Number;
    };

    //Subscribe
    function subscribe(handler, events, origin) {
        window.addEventListener('message', function(event) {
            const type = event.data.type;

            if (event.origin !== origin) { return; }

            if (events.indexOf(type) < 0) { return; }

            if (type === 'windowResize') {
                if (!isNumber(event.data.width) || !isNumber(event.data.height)) {
                    return;
                }

                handler({
                    type,
                    width: event.data.width,
                    height: event.data.height
                })
            }
        });
    }

    return {
        setSize,
        setVisibility,
        subscribe
    }
}