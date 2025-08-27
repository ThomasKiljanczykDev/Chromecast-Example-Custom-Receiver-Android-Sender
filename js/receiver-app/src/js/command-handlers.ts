import { MOVE_STEP, SQUARE_SIZE } from './constants';
import { MoveAction } from './models';

function getPosition(style: string): number {
    return parseInt(style.replace('px', ''), 10);
}

function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(value, max));
}

export function handleTextCommand(text: string) {
    const userTextElement = document.getElementById('user-text');
    if (userTextElement) {
        userTextElement.innerHTML = text;
    }
}

export function handleMoveCommand(action: MoveAction) {
    const square = document.getElementById('square');
    if (!square) {
        return;
    }

    switch (action.toUpperCase()) {
        case MoveAction.LEFT: {
            const currentLeft = getPosition(square.style.left);
            square.style.left = `${clamp(currentLeft - MOVE_STEP, 0, window.innerWidth - SQUARE_SIZE)}px`;
            break;
        }
        case MoveAction.RIGHT: {
            const currentLeft = getPosition(square.style.left);
            square.style.left = `${clamp(currentLeft + MOVE_STEP, 0, window.innerWidth - SQUARE_SIZE)}px`;
            break;
        }
        case MoveAction.UP: {
            const currentTop = getPosition(square.style.top);
            square.style.top = `${clamp(currentTop - MOVE_STEP, 0, window.innerHeight - SQUARE_SIZE)}px`;
            break;
        }
        case MoveAction.DOWN: {
            const currentTop = getPosition(square.style.top);
            square.style.top = `${clamp(currentTop + MOVE_STEP, 0, window.innerHeight - SQUARE_SIZE)}px`;
            break;
        }
    }
}
