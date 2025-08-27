/*
 * Created by Tomasz Kiljanczyk on 16/04/2021, 09:10
 * Copyright (c) 2021 . All rights reserved.
 * Last modified 16/04/2021, 09:10
 */
import type { DisconnectReason, EventType } from 'chromecast-caf-receiver/cast.framework.system';

import { handleMoveCommand, handleTextCommand } from './command-handlers';
import { MOVE_NAMESPACE, TEXT_NAMESPACE } from './constants';
import { MoveCommandSchema, TextCommandSchema } from './models';

function onContentLoaded() {
    /**
     * Cast receiver context as variable
     */
    const castReceiverContext = cast.framework.CastReceiverContext.getInstance();

    /**
     * Handle disconnect
     */
    castReceiverContext.addEventListener('senderdisconnected' as EventType, event => {
        if (!(event instanceof cast.framework.system.SenderDisconnectedEvent)) {
            return;
        }

        if (
            castReceiverContext.getSenders().length === 0 &&
            event.reason === ('requested_by_sender' as DisconnectReason)
        ) {
            window.close();
        }
    });

    /**
     * Control message listener setup
     */
    castReceiverContext.addCustomMessageListener(TEXT_NAMESPACE, event => {
        const data = TextCommandSchema.parse(event.data);

        console.debug(`Received text message: ${data.text}`);
        handleTextCommand(data.text);
    });

    castReceiverContext.addCustomMessageListener(MOVE_NAMESPACE, event => {
        const data = MoveCommandSchema.parse(event.data);

        console.debug(`Received move message: ${data.action}`);
        handleMoveCommand(data.action);
    });

    /**
     * Initializes the system manager. The application should call this method when
     * it is ready to start receiving messages, typically after registering
     * to listen for the events it is interested on.
     */
    castReceiverContext.start({
        maxInactivity: 300,
        statusText: 'Ready to present'
    });
}

document.addEventListener('DOMContentLoaded', onContentLoaded, false);
