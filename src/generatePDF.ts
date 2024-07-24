interface SaleReturnModel {
	companyName: string;
	companyAddress: string;
	companyCity: string;
	companyState: string;
	companyCountry: string;
	companyEmail: string;
	companyPhone: string;
	companyActivity: string;
	companyRuc: string;
	timbradoNumber: string;
	timbradoDate: string;
	saleReturnInvoice: string;
	saleReturnId: string;
	saleReturnDate: string;
	saleReturnHours: string;
	saleReturnMoney: string;
	saleReturnShop: string;
	saleReturnBox: string;
	saleReturnOperTypeName: string;
	saleInvoiceNumber: string;
	saleId: string;
	saleCDC: string;
	userName: string;
	customerName: string;
	customerFantasy: string;
	customerRuc: string;
	customerAddress: string;
	customerPhone: string;
	customerAccountName: string;
	customerAccountNum: string;
	customerEmail: string;
	customerZone: string;
	customerRoute: string;
}

const saleReturnModel: SaleReturnModel = {
	companyName: "Compañia Paraguaya de Sistemas Informatico",
	companyAddress: "123 Main St., Col.Manitoba, San Pedro, 12345",
	companyCity: "Colonia Manitoba",
	companyState: "San Pedro",
	companyCountry: "Paraguay",
	companyEmail: "company@example.com",
	companyPhone: "(123) 456-7890",
	companyActivity: "Comercio al pormenor de otros productos en Comercio no especific",
	companyRuc: "123456789012",
	timbradoNumber: "1234567890",
	timbradoDate: "01/01/2022",
	saleReturnInvoice: "001-001-0000700",
	saleReturnId: "1321564",
	saleReturnDate: "01/01/2022",
	saleReturnHours: "12:00 PM",
	saleReturnMoney: "GUARANI",
	saleInvoiceNumber: "001-001-0701047",
	saleCDC: "01800290011001003000589922024062512544458894",
	saleId: "25326541",
	saleReturnShop: "Comercial Sucursal 1",
	saleReturnBox: "Caja 1 ferreteria",
	saleReturnOperTypeName: "Devolución de Ventas",
	userName: "Juan Perez",
	customerName: "Jose Ignacio Silvero",
	customerFantasy: "Importadora el Surco Grueso",
	customerRuc: "8002531256-6",
	customerAddress: "Av. Amelia Earhart 1234",
	customerPhone: "(123) 456-7890",
	customerAccountName: "Cta. Cte. Importadora El Surco Grueso",
	customerAccountNum: "1234567890",
	customerEmail: "importadora@example.com",
	customerZone: "zona cental",
	customerRoute: "Ruta cental 1 y 3",
};

function onGeneratePdfButtonClick(event: MouseEvent): void {
	generatePdf(saleReturnModel);
}

// Escuchar el evento "onload" del documento y agregar el evento de clic al botón
window.onload = () => {
	const generatePdfButton = document.getElementById("generatePDF") as HTMLButtonElement;
	generatePdfButton.onclick = onGeneratePdfButtonClick;
};

function generatePdf(saleReturn: SaleReturnModel): void {
	// Crear una instancia de jsPDF
	const { jsPDF } = window.jspdf;
	const doc = new jsPDF({
		orientation: "l",
		unit: "mm",
		format: "a4",
		putOnlyUsedFonts: true,
	});

	// Obtener las dimensiones de la página A4 en milímetros
	const pageWidth = doc.internal.pageSize.getWidth();
	const pageHeight = doc.internal.pageSize.getHeight();

	const lineX = pageWidth / 2;

	const margin = 5; // Margen entre los rectángulos y el borde de la página
	const rectMargin = 5; // Margen adicional a la derecha de la línea
	const rectWidth = pageWidth / 2 - margin - rectMargin;

	const _fontLarge = 12;
	const _fontMedium = 9;
	const _fontSmall = 7;
	const _fontFamily = "Helvetica";
	const _fontBold = "bold";
	const _fontNormal = "normal";

	const _lineHsmall = 2.5;
	const _lineHmediun = 3;
	const _lineHlarge = 5;

	const xPosA = margin;
	const xPosB = lineX + rectMargin;
	let yPos = 10;
	const _logoWith = 20;

	const rucLeftSpace = 97;
	let ryPos = yPos;

	// Configurar color y grosor de línea
	doc.setDrawColor(0, 0, 0);
	doc.setFillColor(255, 255, 255);
	doc.setLineWidth(0.2);

	// Rectángulo a la izquierda (x, y, width, height, cornerX, cornerY)
	doc.roundedRect(margin, margin, rectWidth, pageHeight - 2 * margin, 2, 2);

	// Rectángulo a la derecha
	doc.roundedRect(lineX + rectMargin, margin, rectWidth, pageHeight - 2 * margin, 2, 2);

	//vertical line
	doc.setLineWidth(0.1);
	doc.setLineDash([0.5, 0.3], 0);
	doc.line(lineX, 0, lineX, pageHeight);
	doc.setLineDash([]);

	doc.setFont(_fontFamily);
	doc.setFontSize(_fontLarge);

	//kude title
	const kude = "KuDE de Nota de Crédito Electrónica";
	doc.text(kude, xPosA + _logoWith, yPos);
	doc.text(kude, xPosB + _logoWith, yPos);
	yPos += _lineHlarge;

	//companyName
	const company = saleReturn.companyName.substring(0, 35);
	doc.text(company, xPosA + _logoWith, yPos);
	doc.text(company, xPosB + _logoWith, yPos);

	yPos += _lineHmediun;
	doc.setFontSize(_fontSmall);

	//companyAddress
	doc.text(saleReturn.companyAddress, xPosA + _logoWith, yPos);
	doc.text(saleReturn.companyAddress, xPosB + _logoWith, yPos);
	yPos += _lineHsmall;

	//City
	doc.text(saleReturn.companyCity, xPosA + _logoWith, yPos);
	doc.text(saleReturn.companyCity, xPosB + _logoWith, yPos);
	yPos += _lineHsmall;

	//state and country
	doc.text(`${saleReturn.companyState} - ${saleReturn.companyCountry}`, xPosA + _logoWith, yPos);
	doc.text(`${saleReturn.companyState} - ${saleReturn.companyCountry}`, xPosB + _logoWith, yPos);
	yPos += _lineHsmall;

	//companyEmail
	doc.text(saleReturn.companyEmail, xPosA + _logoWith, yPos);
	doc.text(saleReturn.companyEmail, xPosB + _logoWith, yPos);
	yPos += _lineHsmall;

	//companyActivity
	const activity = saleReturn.companyActivity.substring(0, 70);
	doc.text(activity, xPosA + _logoWith, yPos);
	doc.text(activity, xPosB + _logoWith, yPos);
	yPos += _lineHsmall;

	//RUC
	doc.setFont(_fontFamily, _fontBold);
	doc.setFontSize(_fontSmall);
	doc.text(`RUC: ${saleReturn.companyRuc}`, xPosA + _logoWith + rucLeftSpace, ryPos, { align: "center" });
	doc.text(`RUC: ${saleReturn.companyRuc}`, xPosB + _logoWith + rucLeftSpace, ryPos, { align: "center" });
	doc.setFont(_fontFamily, _fontNormal);
	ryPos += _lineHsmall;

	//Timbrado
	doc.text(`Timbrado Nro: ${saleReturn.timbradoNumber}`, xPosA + _logoWith + rucLeftSpace, ryPos, { align: "center" });
	doc.text(`Timbrado Nro: ${saleReturn.timbradoNumber}`, xPosB + _logoWith + rucLeftSpace, ryPos, { align: "center" });
	ryPos += _lineHsmall;

	//fecha de Inicio de Vigencia
	doc.text(`Inicio de Vigencia: ${saleReturn.timbradoDate}`, xPosA + _logoWith + rucLeftSpace, ryPos, { align: "center" });
	doc.text(`Inicio de Vigencia: ${saleReturn.timbradoDate}`, xPosB + _logoWith + rucLeftSpace, ryPos, { align: "center" });
	ryPos += _lineHlarge;

	//fecha de Inicio de Vigencia
	doc.setFont(_fontFamily, _fontBold);
	doc.setFontSize(_fontSmall);
	doc.text(`NOTA DE CRÉDITO ELECTRÓNICA`, xPosA + _logoWith + rucLeftSpace, ryPos, { align: "center" });
	doc.text(`NOTA DE CRÉDITO ELECTRÓNICA`, xPosB + _logoWith + rucLeftSpace, ryPos, { align: "center" });
	ryPos += _lineHlarge;

	//Invoice
	doc.setFont(_fontFamily, _fontBold);
	doc.setFontSize(_fontMedium);
	doc.text(`${saleReturn.saleReturnInvoice}`, xPosA + _logoWith + rucLeftSpace, ryPos, { align: "center" });
	doc.text(`${saleReturn.saleReturnInvoice}`, xPosB + _logoWith + rucLeftSpace, ryPos, { align: "center" });
	ryPos += _lineHmediun;

	//Nro Registro
	doc.setFont(_fontFamily, _fontNormal);
	doc.setFontSize(_fontSmall);
	doc.text(`Nro Registro: ${saleReturn.saleReturnId}`, xPosA + _logoWith + rucLeftSpace, ryPos, { align: "center" });
	doc.text(`Nro Registro: ${saleReturn.saleReturnId}`, xPosB + _logoWith + rucLeftSpace, ryPos, { align: "center" });

	//line divide
	doc.setLineWidth(0.2);
	doc.line(xPosA, yPos, lineX - margin, yPos);
	doc.line(xPosB, yPos, pageWidth - margin, yPos);
	yPos += _lineHsmall;

	const pdfDataUrl = doc.output("datauristring");

	// Mostrar el PDF en el iframe
	const pdfViewer = document.getElementById("pdfViewer") as HTMLIFrameElement;
	pdfViewer.src = pdfDataUrl;
}
