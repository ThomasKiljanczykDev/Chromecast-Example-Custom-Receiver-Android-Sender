/*
 * Created by Tomasz Kiljanczyk on 16/04/2021, 09:10
 * Copyright (c) 2021 . All rights reserved.
 * Last modified 16/04/2021, 09:10
 */

document.addEventListener('DOMContentLoaded', onContentLoaded, false);

function onContentLoaded() {

    const TEXT_NAMESPACE = 'urn:x-cast:example.cast.title';
    const MOVE_NAMESPACE = 'urn:x-cast:example.cast.move';

    /**
     * Cast receiver context as variable
     */
    const castReceiverContext = cast.framework.CastReceiverContext.getInstance();

    /**
     * Handle disconnect
     */
    castReceiverContext.onSenderDisconnected = function (event) {
        // noinspection TypeScriptUMDGlobal
        if (castReceiverContext.getSenders().length === 0
            && event.reason === system.DisconnectReason.REQUESTED_BY_SENDER) {

            window.close();
        }
    };

    /**
     * Control message listener setup
     */
    castReceiverContext.addCustomMessageListener(TEXT_NAMESPACE, function (event) {
        const text = event.data.text;

        console.log(`Received text message: ${text}`);
        document.getElementById("user-text").innerHTML = text;
    });

    castReceiverContext.addCustomMessageListener(MOVE_NAMESPACE, function (event) {
        const action = event.data.action;
        console.log(`Received move message: ${action}`);

        switch (action.toUpperCase()) {
            case "LEFT":
                const leftNumbers = document.getElementById("square")
                    .style.left.replace('px', '');
                let left = parseInt(leftNumbers, 10) - 10;
                if (left < 0) {
                    left = 0
                }

                document.getElementById("square").style.left = `${left}px`;
                break;
            case "RIGHT":
                const rightNumbers = document.getElementById("square")
                    .style.left.replace('px', '');
                let right = parseInt(rightNumbers, 10) + 10;
                if (right > window.innerWidth - 50) {
                    right = window.innerWidth - 50;
                }

                document.getElementById("square").style.left = `${right}px`;
                break;
            case "UP":
                const upNumbers = document.getElementById("square")
                    .style.top.replace('px', '');
                let up = parseInt(upNumbers, 10) - 10;
                if (up < 0) {
                    up = 0;
                }

                document.getElementById("square").style.top = `${up}px`;
                break;
            case "DOWN":
                const downNumbers = document.getElementById("square")
                    .style.top.replace('px', '');
                let down = parseInt(downNumbers, 10) + 10;
                if (down > window.innerHeight - 50) {
                    down = window.innerHeight - 50;
                }

                document.getElementById("square").style.top = `${down}px`;
                break;
        }
    });

    /**
     * Initializes the system manager. The application should call this method when
     * it is ready to start receiving messages, typically after registering
     * to listen for the events it is interested on.
     */
    castReceiverContext.start({
        maxInactivity: 300,
        statusText: "Ready to present"
    });

}
