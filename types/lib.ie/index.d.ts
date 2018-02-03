// Type definitions for IE 0.0.1
// Project: https://github.com/NN---/lib.ie.d.ts
// Definitions by: NN <https://github.com/NN--->
// Definitions: https://github.com/NN---/lib.ie.d.ts

interface EventTarget {
	attachEvent(type: string, listener: EventListener): boolean;
	detachEvent(type: string, listener: EventListener): void;
}

interface IEDocumentEventMap {
	"onreadystatechange": Event
}

interface IEWindowEventMap {
	"onload": Event
}

interface Document {
	attachEvent<K extends keyof IEDocumentEventMap>(type: K, listener: (this: Window, ev: IEDocumentEventMap[K]) => any): void;
	attachEvent(type: string, listener: EventListener): void;
	detachEvent<K extends keyof IEDocumentEventMap>(type: K, listener: (this: Window, ev: IEDocumentEventMap[K]) => any): void;
	detachEvent(type: string, listener: EventListener): void;
}

interface Window {
	attachEvent<K extends keyof IEWindowEventMap>(type: K, listener: (this: Window, ev: IEWindowEventMap[K]) => any): void;
	attachEvent(type: string, listener: EventListener): void;
	detachEvent<K extends keyof IEWindowEventMap>(type: K, listener: (this: Window, ev: IEWindowEventMap[K]) => any): void;
	detachEvent(type: string, listener: EventListener): void;
}

interface HTMLElement {
	doScroll(component: string): boolean;
}
