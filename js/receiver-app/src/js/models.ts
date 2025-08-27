import { z } from 'zod';

export enum MoveAction {
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
    UP = 'UP',
    DOWN = 'DOWN'
}

export const MoveCommandSchema = z.object({ action: z.enum(MoveAction) });

export const TextCommandSchema = z.object({ text: z.string() });
