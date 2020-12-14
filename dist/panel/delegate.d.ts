import { CompositeDisposable, Disposable, Emitter } from 'atom';
import type { LinterMessage } from '../types';
export default class PanelDelegate {
    emitter: Emitter;
    messages: Array<LinterMessage>;
    filteredMessages: Array<LinterMessage>;
    subscriptions: CompositeDisposable;
    panelRepresents: 'Entire Project' | 'Current File' | 'Current Line';
    constructor();
    getFilteredMessages(): Array<LinterMessage>;
    update(messages?: Array<LinterMessage> | null | undefined): void;
    onDidChangeMessages(callback: (messages: Array<LinterMessage>) => any): Disposable;
    dispose(): void;
}
