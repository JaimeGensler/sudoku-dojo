import { Draft } from 'immer';

export interface Rules<S> {
    [ruleName: string]: {
        condition?: (currentState: S, actionPayload?: any) => boolean;
        modifier: (draft: Draft<S>, payload?: any) => void;
    };
}

export interface KeyMap<S> {
    [key: string]: {
        type: string | ((currentState: S) => string);
        payload?: any;
    };
}

export interface Game<S> {
    initialize: () => S;
    rules: Rules<S>;
    keyMap: KeyMap<S>;
}

export type ApplyRule = (ruleName: string, payload?: unknown) => void;
