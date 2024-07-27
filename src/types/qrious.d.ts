declare module "qrious" {
	interface QRiousOptions {
		element?: HTMLElement;
		value?: string;
		size?: number;
		level?: "L" | "M" | "Q" | "H";
		background?: string;
		backgroundAlpha?: number;
		foreground?: string;
		foregroundAlpha?: number;
		padding?: number;
	}

	class QRious {
		constructor(options: QRiousOptions);
		element: HTMLCanvasElement;
		value: string;
		size: number;
		level: "L" | "M" | "Q" | "H";
		background: string;
		backgroundAlpha: number;
		foreground: string;
		foregroundAlpha: number;
		padding: number;
		toDataURL(): string; // Añadir este método si realmente existe en la biblioteca
	}

	export = QRious;
}
