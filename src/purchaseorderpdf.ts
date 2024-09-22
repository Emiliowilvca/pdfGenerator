interface PurchaseOrderData {
	id: number;
	tenantId: number;
	shopId: number;
	boxId: number;
	providerId: number;
	carrierId: number;
	moneyId: number;
	employeeId: number;
	paymentCondition: string;
	placeDelivery: string;
	orderDate: string;
	deliveryDate: string;
	moneyName: string;
	carrierName: string;
	employeeName: string;
	providerName: string;
	shopName: string;
	providerAddress: string;
	providerContact: string;
	providerPhone: string;
	providerEmail: string;
	providerRuc: string;
	companyName: string;
	companyAddress: string;
	companyCity: string;
	companyState: string;
	companyCountry: string;
	companyEmail: string;
	companyPhone: string;
	companyEcoActivityName: string;
	companyRuc: string;
	companyStampingNumber: string;
	total: number;
	decimalPlaces: number;
	productItems: PurchaseOrderDataDetail[];
}

interface PurchaseOrderDataDetail {
	code: string;
	name: string;
	quantity: number;
	grossPrice: number;
	discount: number;
	netPrice: number;
	discountPercent: number;
	subTotal: number;
	remark: string;
}

const purchaseOrderModel: PurchaseOrderData = {
	id: 1,
	tenantId: 101,
	shopId: 5,
	boxId: 3,
	providerId: 12,
	carrierId: 7,
	moneyId: 2,
	employeeId: 25,
	paymentCondition: "Credit 30 days",
	placeDelivery: "Warehouse A, Main Street",
	orderDate: "2024-09-22",
	deliveryDate: "2024-10-05",
	moneyName: "USD",
	carrierName: "Fast Delivery Ltd.",
	employeeName: "John Doe",
	providerName: "Tech Supplies Inc.",
	shopName: "Downtown Store",
	providerAddress: "123 Supplier Ave, Tech City",
	providerContact: "Jane Smith",
	providerPhone: "+123456789",
	providerEmail: "sales@techsupplies.com",
	providerRuc: "1234567890123",
	companyName: "Enterprise Solutions LLC",
	companyAddress: "456 Company Blvd, Business Town",
	companyCity: "Business Town",
	companyState: "Business State",
	companyCountry: "USA",
	companyEmail: "info@enterprisesolutions.com",
	companyPhone: "+987654321",
	companyEcoActivityName: "Technology Distribution",
	companyRuc: "9876543210987",
	companyStampingNumber: "T123456789",
	total: 4500.75,
	decimalPlaces: 2,
	productItems: [
		{
			code: "PROD-001",
			name: "Laptop X100",
			quantity: 10,
			grossPrice: 500.0,
			discount: 50.0,
			netPrice: 450.0,
			discountPercent: 10,
			subTotal: 4500.0,
			remark: "Special discount applied",
		},
		{
			code: "PROD-002",
			name: "Wireless Mouse Z200",
			quantity: 20,
			grossPrice: 25.0,
			discount: 0,
			netPrice: 25.0,
			discountPercent: 0,
			subTotal: 500.0,
			remark: "",
		},
	],
};

window.onload = () => {
	const generatePdfButton = document.getElementById("purchaseOrderPDF") as HTMLButtonElement;
	if (generatePdfButton) {
		//generatePdfButton.onclick = onPurchaseOrderButtonClick;

		generatePdfButton.onclick = () => generatePurchaseOrderPdf(purchaseOrderModel);
	} else {
		console.error("El botón generatePDF no se encontró");
	}
};

async function generatePurchaseOrderPdf(orderData: PurchaseOrderData): Promise<void> {
	// Crear una instancia de jsPDF
	const { jsPDF } = window.jspdf;

	const doc = new jsPDF({
		orientation: "p",
		unit: "mm",
		format: "a4",
		putOnlyUsedFonts: true,
	});
	try {
		// Obtener las dimensiones de la página A4 en milímetros
		const pageWidth = doc.internal.pageSize.getWidth();
		const pageHeight = doc.internal.pageSize.getHeight();

		const margin = 5; // Margen entre los rectángulos y el borde de la página
		const rectMargin = 5; // Margen adicional a la derecha de la línea

		const _fontLarge = 12;
		const _fontMedium = 9;
		const _fontSmall = 6;
		const _fontFamily = "Helvetica";
		const _fontBold = "bold";
		const _fontNormal = "normal";

		const _lineHsmall = 2.7;
		const _lineHmedium = 4;
		const _lineHlarge = 5;
		let yPos = 10;
		const xPos = margin + 10;
		let xposR = pageWidth - 60;

		doc.setDrawColor(0, 0, 0);
		doc.setFillColor(255, 255, 255);
		doc.setLineWidth(0.2);

		// Rectángulo a la izquierda (x, y, width, height, cornerX, cornerY)
		doc.roundedRect(margin, margin, pageWidth - 2 * margin, pageHeight - 2 * margin, 2, 2);

		doc.setFont(_fontFamily);
		doc.setFontSize(_fontLarge);

		// Título principal
		let title = "ORDEN DE COMPRAS";
		let titlewidth = doc.getTextWidth(title);
		doc.text(title, (pageWidth - titlewidth) / 2, yPos);

		yPos += _lineHlarge;

		// Company
		doc.setFontSize(_fontMedium);
		doc.text(orderData.companyName, xPos, yPos);

		doc.text(`Fecha de Solicitud: ${orderData.orderDate}`, xposR, yPos);
		yPos += _lineHmedium;

		//address
		doc.text(orderData.companyAddress, xPos, yPos);
		doc.text(`Fecha de Entrega: ${orderData.deliveryDate}`, xposR, yPos);
		yPos += _lineHmedium;

		//city and country
		doc.text(`${orderData.companyCity} - ${orderData.companyState} - ${orderData.companyCountry}`, xPos, yPos);
		doc.text(`Nro de Pedido: ${orderData.id}`, xposR, yPos);
		yPos += _lineHmedium;

		//email
		doc.text(orderData.companyEmail, xPos, yPos);
		yPos += _lineHsmall;

		//line
		doc.setLineWidth(0.2);
		doc.line(margin, yPos, pageWidth - margin, yPos);
		yPos += _lineHmedium;

		let span1 = margin + 75;
		let span2 = margin + 120;

		doc.setFont(_fontFamily, _fontBold);
		doc.setFontSize(_fontMedium);
		//Shop
		doc.text(`PROVEEDOR`, xPos, yPos);
		doc.text(`ENVIAR A`, xPos + span2, yPos);

		yPos += _lineHmedium;

		doc.setFont(_fontFamily, _fontNormal);
		doc.text(`Proveedor: ${orderData.providerName}`, xPos, yPos);
		doc.text(`Sucursal: ${orderData.shopName}`, xPos + span2, yPos);

		yPos += _lineHmedium;

		doc.text(`Contacto: ${orderData.providerContact}`, xPos, yPos);
		doc.text(`Empleado: ${orderData.employeeName}`, xPos + span2, yPos);

		yPos += _lineHmedium;

		doc.text(`Correo : ${orderData.providerEmail}`, xPos, yPos);
		doc.text(`Telefono: `, xPos + span2, yPos);

		yPos += _lineHmedium;

		doc.text(`Telefono: ${orderData.providerPhone}`, xPos, yPos);
		doc.text(`Direccion: `, xPos + span2, yPos);

		yPos += _lineHmedium;

		doc.text(`Condicion de Pago: ${orderData.paymentCondition}`, xPos, yPos);
		doc.text(`Email: `, xPos + span2, yPos);

		yPos += _lineHsmall;

		doc.setLineWidth(0.2);
		doc.line(margin, yPos, pageWidth - margin, yPos);
		yPos += _lineHmedium;

		doc.setFont(_fontFamily, _fontBold);
		doc.setFontSize(_fontMedium);
		doc.text(`Condiciones de Envio`, xPos, yPos);

		doc.setFont(_fontFamily, _fontNormal);

		yPos += _lineHmedium;

		doc.text(`Transportadora: ${orderData.carrierName}`, xPos, yPos);
		doc.text(`Telefono: `, xPos + span1, yPos);
		doc.text(`Conductor: `, xPos + span2, yPos);
		yPos += _lineHsmall;

		doc.setLineWidth(0.2);
		doc.line(margin, yPos, pageWidth - margin, yPos);
		yPos += _lineHmedium;

		/*
		================================================================
		
		*/
	} catch (error) {
		console.error("Ocurrió un error:", error);
	}

	const pdfDataUrl = doc.output("datauristring");

	// Mostrar el PDF en el iframe
	const pdfViewer = document.getElementById("pdfViewer") as HTMLIFrameElement;
	pdfViewer.src = pdfDataUrl;
}
