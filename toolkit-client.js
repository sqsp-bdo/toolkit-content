function makeToolkitClient(targetOrigin) {
    const version = '1.0';

    const responses = {};

    const handlersByEvents = {
        'componentsResponse': [
            (response) => {
                responses[response.id] = response;
            }
        ]
    };

    const messageValidators = {
        'windowResize': (message) => isNumber(message.width) && isNumber(message.height),
        'componentsResponse': (message) => !!message.components && !!message.requestId
    };

    const messageParsers = {
        'windowResize': (message) => { return {
            type: message.type,
            width: message.width,
            height: message.height
        }},
        'componentsResponse': (message) => {
            return {
                id: message.requestId,
                components: message.components
            }
        }
    };

    window.addEventListener('message', function(event) {
        const type = event.data.type;

        if (event.origin !== targetOrigin) { return; }

        const events = Object.keys(messageValidators); 

        if (events.indexOf(type) < 0) { return; }

        if(!messageValidators[type](event.data)) { return; }

        const handlers = handlersByEvents[type];

        if (!handlers) { return; }

        const parsedMessage = messageParsers[type](event.data);

        handlers.forEach(handler => {
            handler(parsedMessage);
        });
    });

    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

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
        return null;
    }

    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function getComponents() {
        const requestId = uuidv4();

        parent.postMessage({
            id: initialData.id,
            extensionId: initialData.extensionId,
            type: 'getComponents',
            version,
            requestId
        }, targetOrigin);

        const maxCycles = 100;
        var cycle = 0;

        while (!responses[requestId]) { 
            if (maxCycles === cycle++) {
                throw 'Timed out!'
            }
            await timeout(50);
        }

        const response = responses[requestId];
        delete responses[requestId];
        return response;
    }

    function setSize(height, width, componentId = initialData.id) {
        parent.postMessage({
            id: initialData.id,
            extensionId: initialData.extensionId,
            type: 'setSize',
            componentId,
            height,
            width,
            version
        }, targetOrigin);
    }

    function setVisibility(visible, height, width, componentId = initialData.id) {
        parent.postMessage({
            id: initialData.id,
            extensionId: initialData.extensionId,
            type: 'setVisibility',
            componentId,
            visible,
            height,
            width,
            version
        }, targetOrigin);
    }

    function isNumber(value) {
        return typeof value === 'number' || value instanceof Number;
    };

    function subscribe(handler, events) {
        events.forEach(event => {
            if (event === 'componentsResponse') { return; }

            if (!handlersByEvents[event]) {
                handlersByEvents[event] = [];
            }

            handlersByEvents[event].push(handler);
        });
    }

    return {
        setSize,
        setVisibility,
        subscribe,
        getComponents
    }
}