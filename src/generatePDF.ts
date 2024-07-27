// import { jsPDF } from "jspdf";
//import QRious from "qrious";

interface saleReturnDetails {
	code: string;
	description: string;
	quantity: string;
	price: string;
	discount: string;
	exenta: string;
	iva5: string;
	iva10: string;
}

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
	totalExenta: string;
	totalIva5: string;
	totalIva10: string;
	totalInvoice: string;
	numalet: string;
	totalmoneyTitle: string;
	VATsettlementTotal: string;
	VATsettlement5: string;
	VATsettlement10: string;
	saleReturnDetails: saleReturnDetails[];
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
	totalExenta: "14.700",
	totalIva5: "13.500",
	totalIva10: "13.500",
	totalInvoice: "14.850.120",
	numalet: "Catorce millones ochocientos cincuenta mil ciento veinte.",
	totalmoneyTitle: "TOTAL EN GUARANIES",
	VATsettlement10: "18.500",
	VATsettlement5: "5.500",
	VATsettlementTotal: "24.000",

	saleReturnDetails: [
		{ code: "1234567890123", description: "Arroz parbolizado 5kg", quantity: "1", price: "15000", discount: "0.00", exenta: "0.00", iva5: "0.00", iva10: "13500" },
		{ code: "2345678901234", description: "Fideos tallarín 500g", quantity: "2", price: "1200", discount: "50", exenta: "0.00", iva5: "0.00", iva10: "1140" },
		{ code: "3456789012345", description: "Leche entera 1L", quantity: "1", price: "2500", discount: "0.00", exenta: "0.00", iva5: "0.00", iva10: "2375" },
		{ code: "4567890123456", description: "Pan lactal 500g", quantity: "1", price: "800", discount: "0.00", exenta: "0.00", iva5: "0.00", iva10: "760" },
		{ code: "5678901234567", description: "Manzanas rojas x kg", quantity: "1.5", price: "3000", discount: "100", exenta: "0.00", iva5: "0.00", iva10: "2700" },
		{ code: "6789012345678", description: "Bananas x kg", quantity: "2", price: "2500", discount: "0.00", exenta: "0.00", iva5: "0.00", iva10: "2375" },
		{ code: "7890123456789", description: "Huevos x docena", quantity: "1", price: "1800", discount: "0.00", exenta: "0.00", iva5: "0.00", iva10: "1620" },
		{ code: "8901234567890", description: "Carne picada 500g", quantity: "1", price: "8000", discount: "200", exenta: "0.00", iva5: "0.00", iva10: "7200" },
		{ code: "9012345678901", description: "Queso fresco 250g", quantity: "2", price: "1500", discount: "0.00", exenta: "0.00", iva5: "0.00", iva10: "1350" },
		{ code: "0123456789012", description: "Yogur natural 150g", quantity: "3", price: "900", discount: "0.00", exenta: "0.00", iva5: "0.00", iva10: "810" },
		{ code: "1234567890123", description: "Jugo de naranja 1L", quantity: "1", price: "1200", discount: "0.00", exenta: "0.00", iva5: "0.00", iva10: "1140" },
		{ code: "2345678901234", description: "Coca-Cola 2L", quantity: "1", price: "1800", discount: "100", exenta: "0.00", iva5: "0.00", iva10: "1620" },
		{ code: "3456789012345", description: "Papas fritas 500g", quantity: "1", price: "1000", discount: "0.00", exenta: "0.00", iva5: "0.00", iva10: "900" },
		{ code: "4567890123456", description: "Cerveza 6 pack", quantity: "1", price: "2500", discount: "200", exenta: "0.00", iva5: "0.00", iva10: "2250" },
		{ code: "5678901234567", description: "Galletas dulces 200g", quantity: "2", price: "800", discount: "0.00", exenta: "0.00", iva5: "0.00", iva10: "720" },
		{ code: "6789012345678", description: "Chocolate con leche 100g", quantity: "1", price: "500", discount: "0.00", exenta: "0.00", iva5: "0.00", iva10: "450" },
		{ code: "7890123456789", description: "Café molido 250g", quantity: "1", price: "1200", discount: "50", exenta: "0.00", iva5: "0.00", iva10: "1140" },
		{ code: "8901234567890", description: "Té en saquitos x 20", quantity: "1", price: "700", discount: "0.00", exenta: "0.00", iva5: "0.00", iva10: "630" },
		{ code: "9012345678901", description: "Azúcar 1kg", quantity: "1", price: "800", discount: "0.00", exenta: "0.00", iva5: "0.00", iva10: "720" },
		{ code: "0123456789012", description: "Sal 500g", quantity: "2", price: "300", discount: "0.00", exenta: "0.00", iva5: "0.00", iva10: "270" },
		{ code: "1234567890123", description: "Aceite vegetal 1L", quantity: "1", price: "2000", discount: "100", exenta: "0.00", iva5: "0.00", iva10: "1800" },
		{ code: "2345678901234", description: "Vinagre blanco 500ml", quantity: "1", price: "800", discount: "0.00", exenta: "0.00", iva5: "0.00", iva10: "720" },
		{ code: "3456789012345", description: "Detergente lavavajillas 500ml", quantity: "1", price: "1200", discount: "50", exenta: "0.00", iva5: "0.00", iva10: "1140" },
		{ code: "4567890123456", description: "Jabón en polvo 1kg", quantity: "1", price: "1500", discount: "0.00", exenta: "0.00", iva5: "0.00", iva10: "1350" },
		{ code: "5678901234567", description: "Papel higiénico 4 rollos", quantity: "1", price: "1000", discount: "0.00", exenta: "0.00", iva5: "0.00", iva10: "900" },
	],
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
	const _fontSmall = 6;
	const _fontFamily = "Helvetica";
	const _fontBold = "bold";
	const _fontNormal = "normal";

	const _lineHsmall = 2.7;
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

	doc.setLineDashPattern([0.5, 0.3], 0);
	doc.line(lineX, 0, lineX, pageHeight);
	doc.setLineDashPattern([], 0);

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

	//companyEmail
	doc.text(saleReturn.companyPhone, xPosA + _logoWith + 50, yPos);
	doc.text(saleReturn.companyPhone, xPosB + _logoWith + 50, yPos);

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
	yPos += _lineHmediun;

	const span1 = 3;
	const span2 = 60;
	const span3 = 98;

	//saleReturn Date

	doc.setFont(_fontFamily, _fontBold);
	const dateStr = "Fecha: ";
	doc.text(dateStr, xPosA + span1, yPos);
	doc.text(dateStr, xPosB + span1, yPos);
	doc.setFont(_fontFamily, _fontNormal);

	const dateWith = doc.getTextWidth(dateStr);

	doc.text(`${saleReturn.saleReturnDate}`, xPosA + span1 + dateWith + 1, yPos);
	doc.text(`${saleReturn.saleReturnDate}`, xPosB + span1 + dateWith + 1, yPos);

	doc.setFont(_fontFamily, _fontBold);
	const hourStr = "Hora: ";
	doc.text(hourStr, xPosA + span1 + 22, yPos);
	doc.text(hourStr, xPosB + span1 + 22, yPos);
	doc.setFont(_fontFamily, _fontNormal);

	const hourW = doc.getTextWidth(hourStr);
	doc.text(`${saleReturn.saleReturnHours}`, xPosA + span1 + hourW + 22, yPos);
	doc.text(`${saleReturn.saleReturnHours}`, xPosB + span1 + hourW + 22, yPos);

	//sucursal
	doc.setFont(_fontFamily, _fontBold);
	const shop = "Sucursal: ";
	doc.text(shop, xPosA + span2, yPos);
	doc.text(shop, xPosB + span2, yPos);
	doc.setFont(_fontFamily, _fontNormal);

	const shopWidth = doc.getTextWidth(shop);
	doc.text(saleReturn.saleReturnShop, xPosA + span2 + shopWidth + 1, yPos);
	doc.text(saleReturn.saleReturnShop, xPosB + span2 + shopWidth + 1, yPos);

	//sucursal
	doc.setFont(_fontFamily, _fontBold);
	const box = "Caja: ";
	doc.text(box, xPosA + span3, yPos);
	doc.text(box, xPosB + span3, yPos);
	doc.setFont(_fontFamily, _fontNormal);

	const boxWidth = doc.getTextWidth(box);

	//saleReturn Date
	doc.text(saleReturn.saleReturnBox, xPosA + span3 + boxWidth, yPos);
	doc.text(saleReturn.saleReturnBox, xPosB + span3 + boxWidth, yPos);
	yPos += _lineHsmall + 1;

	//tipo de Operacion
	doc.setFont(_fontFamily, _fontBold);
	const operType = "Tipo de transacción: ";
	doc.text(operType, xPosA + span1, yPos);
	doc.text(operType, xPosB + span1, yPos);
	doc.setFont(_fontFamily, _fontNormal);

	const operTypeW = doc.getTextWidth(operType);
	doc.text(`${saleReturn.saleReturnOperTypeName}`, xPosA + span1 + operTypeW + 2, yPos);
	doc.text(`${saleReturn.saleReturnOperTypeName}`, xPosB + span1 + operTypeW + 2, yPos);

	//tipo de Operacion
	doc.setFont(_fontFamily, _fontBold);
	const userstr = "Usuario: ";
	doc.text(userstr, xPosA + span2, yPos);
	doc.text(userstr, xPosB + span2, yPos);
	doc.setFont(_fontFamily, _fontNormal);

	const userW = doc.getTextWidth(userstr);
	doc.text(`${saleReturn.userName}`, xPosA + span2 + userW + 1, yPos);
	doc.text(`${saleReturn.userName}`, xPosB + span2 + userW + 1, yPos);

	//Moneda
	doc.setFont(_fontFamily, _fontBold);
	const moneystr = "Money: ";
	doc.text(moneystr, xPosA + span3, yPos);
	doc.text(moneystr, xPosB + span3, yPos);
	doc.setFont(_fontFamily, _fontNormal);

	const moneyW = doc.getTextWidth(moneystr);
	doc.text(`${saleReturn.saleReturnMoney}`, xPosA + span3 + moneyW + 1, yPos);
	doc.text(`${saleReturn.saleReturnMoney}`, xPosB + span3 + moneyW + 1, yPos);

	yPos += _lineHsmall + 1;

	//sale Invoice
	doc.setFont(_fontFamily, _fontBold);
	const invoicestr = "Nro. Factura: ";
	doc.text(invoicestr, xPosA + span1, yPos);
	doc.text(invoicestr, xPosB + span1, yPos);
	doc.setFont(_fontFamily, _fontNormal);

	const invoiceW = doc.getTextWidth(invoicestr);
	doc.text(`${saleReturn.saleInvoiceNumber}`, xPosA + span1 + invoiceW + 1, yPos);
	doc.text(`${saleReturn.saleInvoiceNumber}`, xPosB + span1 + invoiceW + 1, yPos);

	//cdc venta
	doc.setFont(_fontFamily, _fontBold);
	const cdcstr = "CDC: ";
	doc.text(cdcstr, xPosA + span2, yPos);
	doc.text(cdcstr, xPosB + span2, yPos);
	doc.setFont(_fontFamily, _fontNormal);

	const cdcW = doc.getTextWidth(cdcstr);
	doc.text(`${saleReturn.saleCDC}`, xPosA + span2 + cdcW, yPos);
	doc.text(`${saleReturn.saleCDC}`, xPosB + span2 + cdcW, yPos);
	yPos += 1.5;

	//line divide
	doc.setLineWidth(0.2);
	doc.line(xPosA, yPos, lineX - margin, yPos);
	doc.line(xPosB, yPos, pageWidth - margin, yPos);
	yPos += _lineHsmall;

	//CustomerName
	doc.setFont(_fontFamily, _fontBold);
	const customerstr = "Razón Social:";
	doc.text(customerstr, xPosA + span1, yPos);
	doc.text(customerstr, xPosB + span1, yPos);
	doc.setFont(_fontFamily, _fontNormal);

	const customerW = doc.getTextWidth(customerstr);
	doc.text(saleReturn.customerName, xPosA + span1 + customerW + 1, yPos);
	doc.text(saleReturn.customerName, xPosB + span1 + customerW + 1, yPos);

	//Customerruc
	doc.setFont(_fontFamily, _fontBold);
	const rucstr = "Ruc:";
	doc.text(rucstr, xPosA + span2, yPos);
	doc.text(rucstr, xPosB + span2, yPos);
	doc.setFont(_fontFamily, _fontNormal);

	const rucW = doc.getTextWidth(rucstr);
	doc.text(saleReturn.customerRuc, xPosA + span2 + rucW + 1, yPos);
	doc.text(saleReturn.customerRuc, xPosB + span2 + rucW + 1, yPos);

	//CustomerAccount
	doc.setFont(_fontFamily, _fontBold);
	const customerAccountstr = "Cuenta de Cliente: ";
	doc.text(customerAccountstr, xPosA + span3, yPos);
	doc.text(customerAccountstr, xPosB + span3, yPos);
	doc.setFont(_fontFamily, _fontNormal);

	const customerAccountW = doc.getTextWidth(customerAccountstr);
	doc.text(saleReturn.customerAccountName.substring(0, 22), xPosA + span3 + customerAccountW + 1, yPos);
	doc.text(saleReturn.customerAccountName.substring(0, 22), xPosB + span3 + customerAccountW + 1, yPos);

	yPos += _lineHsmall + 1;

	//FantasyName
	doc.setFont(_fontFamily, _fontBold);
	const fantasyNamestr = "Nombre de Fantasia: ";
	doc.text(fantasyNamestr, xPosA + span1, yPos);
	doc.text(fantasyNamestr, xPosB + span1, yPos);
	doc.setFont(_fontFamily, _fontNormal);

	const fantasyW = doc.getTextWidth(fantasyNamestr);
	doc.text(saleReturn.customerName, xPosA + span1 + fantasyW + 1, yPos);
	doc.text(saleReturn.customerName, xPosB + span1 + fantasyW + 1, yPos);

	//email
	doc.setFont(_fontFamily, _fontBold);
	const emailstr = "Email: ";
	doc.text(emailstr, xPosA + span3, yPos);
	doc.text(emailstr, xPosB + span3, yPos);
	doc.setFont(_fontFamily, _fontNormal);
	const emailW = doc.getTextWidth(emailstr);
	doc.text(saleReturn.customerEmail, xPosA + span3 + emailW + 1, yPos);
	doc.text(saleReturn.customerEmail, xPosB + span3 + emailW + 1, yPos);

	yPos += _lineHsmall + 1;

	//address
	doc.setFont(_fontFamily, _fontBold);
	const addressStr = "Dirección: ";
	doc.text(addressStr, xPosA + span1, yPos);
	doc.text(addressStr, xPosB + span1, yPos);
	doc.setFont(_fontFamily, _fontNormal);

	const addressW = doc.getTextWidth(addressStr);
	doc.text(saleReturn.customerAddress, xPosA + span1 + addressW + 1, yPos);
	doc.text(saleReturn.customerAddress, xPosB + span1 + addressW + 1, yPos);

	//zone
	doc.setFont(_fontFamily, _fontBold);
	const zoneStr = "Zona: ";
	doc.text(zoneStr, xPosA + span2, yPos);
	doc.text(zoneStr, xPosB + span2, yPos);
	doc.setFont(_fontFamily, _fontNormal);

	const zoneW = doc.getTextWidth(zoneStr);
	doc.text(saleReturn.customerZone, xPosA + span2 + zoneW + 1, yPos);
	doc.text(saleReturn.customerZone, xPosB + span2 + zoneW + 1, yPos);

	//route
	doc.setFont(_fontFamily, _fontBold);
	const routeStr = "Ruta: ";
	doc.text(routeStr, xPosA + span3, yPos);
	doc.text(routeStr, xPosB + span3, yPos);
	doc.setFont(_fontFamily, _fontNormal);

	const routeW = doc.getTextWidth(zoneStr);
	doc.text(saleReturn.customerRoute, xPosA + span3 + routeW + 1, yPos);
	doc.text(saleReturn.customerRoute, xPosB + span3 + routeW + 1, yPos);

	yPos += 1.5;

	const verticalTop = yPos;

	//line divide
	doc.setLineWidth(0.2);
	doc.line(xPosA, yPos, lineX - margin, yPos);
	doc.line(xPosB, yPos, pageWidth - margin, yPos);
	yPos += _lineHsmall + 1;

	doc.setFont(_fontFamily, _fontBold);

	doc.text("Codigo", xPosA + span1, yPos);
	doc.text("Codigo", xPosB + span1, yPos);

	doc.text("Cantidad", xPosA + 31, yPos, { align: "right" });
	doc.text("Cantidad", xPosB + 31, yPos, { align: "right" });

	doc.text("Descripcion", xPosA + 33, yPos);
	doc.text("Descripcion", xPosB + 33, yPos);

	doc.text("Precio", xPosA + 80, yPos, { align: "right" });
	doc.text("Precio", xPosB + 80, yPos, { align: "right" });

	doc.text("Desc.", xPosA + 95, yPos, { align: "right" });
	doc.text("Desc.", xPosB + 95, yPos, { align: "right" });

	const vPos = yPos + 1.5;
	doc.text("Exenta", xPosA + 105, vPos, { align: "right" });
	doc.text("Exenta", xPosB + 105, vPos, { align: "right" });

	doc.text("Iva 5%", xPosA + 120, vPos, { align: "right" });
	doc.text("Iva 5%", xPosB + 120, vPos, { align: "right" });

	doc.text("Iva 10%", xPosA + 137, vPos, { align: "right" });
	doc.text("Iva 10%", xPosB + 137, vPos, { align: "right" });

	const xPos1HA = xPosA + 96;
	const xPos1HB = xPosB + 96;

	const xPos2HA = lineX - margin;
	const xPos2HB = pageWidth - margin;
	const yPosl = vPos - 2.5;

	doc.setFontSize(_fontSmall - 1);
	doc.text("Valor de Venta", xPos1HA + (xPos2HA - xPos1HA) / 2, yPos - 1.5, { align: "center" });
	doc.text("Valor de Venta", xPos1HB + (xPos2HB - xPos1HB) / 2, yPos - 1.5, { align: "center" });
	doc.setFontSize(_fontSmall);
	doc.setFont(_fontFamily, _fontNormal);

	doc.line(xPos1HA, yPosl, xPos2HA, yPosl);
	doc.line(xPos1HB, yPosl, xPos2HB, yPosl);

	yPos += _lineHsmall;

	//line divide
	doc.setLineWidth(0.2);
	doc.line(xPosA, yPos, lineX - margin, yPos);
	doc.line(xPosB, yPos, pageWidth - margin, yPos);
	yPos += 3;

	saleReturn.saleReturnDetails.forEach((item) => {
		doc.text(item.code, xPosA + span1, yPos);
		doc.text(item.code, xPosB + span1, yPos);

		doc.text(item.quantity, xPosA + 31, yPos, { align: "right" });
		doc.text(item.quantity, xPosB + 31, yPos, { align: "right" });

		doc.text(item.description, xPosA + 33, yPos);
		doc.text(item.description, xPosB + 33, yPos);

		doc.text(item.price, xPosA + 82, yPos, { align: "right" });
		doc.text(item.price, xPosB + 82, yPos, { align: "right" });

		doc.text(item.discount, xPosA + 95, yPos, { align: "right" });
		doc.text(item.discount, xPosB + 95, yPos, { align: "right" });

		doc.text(item.exenta, xPosA + 105, yPos, { align: "right" });
		doc.text(item.exenta, xPosB + 105, yPos, { align: "right" });

		doc.text(item.iva5, xPosA + 120, yPos, { align: "right" });
		doc.text(item.iva5, xPosB + 120, yPos, { align: "right" });

		doc.text(item.iva10, xPosA + 137, yPos, { align: "right" });
		doc.text(item.iva10, xPosB + 137, yPos, { align: "right" });

		yPos += _lineHsmall + 0.8;
	});

	const linefoot = 150;

	doc.setLineWidth(0.2);

	doc.line(xPosA + 21, verticalTop, xPosA + 21, linefoot);
	doc.line(xPosB + 21, verticalTop, xPosB + 21, linefoot);

	doc.line(xPosA + 32, verticalTop, xPosA + 32, linefoot);
	doc.line(xPosB + 32, verticalTop, xPosB + 32, linefoot);

	doc.line(xPosA + 70, verticalTop, xPosA + 70, linefoot);
	doc.line(xPosB + 70, verticalTop, xPosB + 70, linefoot);

	doc.line(xPosA + 83, verticalTop, xPosA + 83, linefoot); // price
	doc.line(xPosB + 83, verticalTop, xPosB + 83, linefoot); // price

	doc.line(xPos1HA, verticalTop, xPos1HA, linefoot); // desc
	doc.line(xPos1HB, verticalTop, xPos1HB, linefoot); // desc

	doc.line(xPosA + 107, yPosl, xPosA + 106, linefoot); // exenta
	doc.line(xPosB + 107, yPosl, xPosB + 106, linefoot); // exenta

	doc.line(xPosA + 122, yPosl, xPosA + 121, linefoot);
	doc.line(xPosB + 122, yPosl, xPosB + 121, linefoot);

	yPos = linefoot;

	//line divide

	doc.line(xPosA, yPos, lineX - margin, yPos);
	doc.line(xPosB, yPos, pageWidth - margin, yPos);
	yPos += _lineHsmall;

	doc.setFont(_fontFamily, _fontBold);
	doc.text("SUBTOTAL", xPosA + span1, yPos);
	doc.text("SUBTOTAL", xPosB + span1, yPos);
	doc.setFont(_fontFamily, _fontNormal);

	doc.text(saleReturn.totalExenta, xPosA + 105, yPos, { align: "right" });
	doc.text(saleReturn.totalExenta, xPosB + 105, yPos, { align: "right" });

	doc.text(saleReturn.totalIva5, xPosA + 120, yPos, { align: "right" });
	doc.text(saleReturn.totalIva5, xPosB + 120, yPos, { align: "right" });

	doc.text(saleReturn.totalIva10, xPosA + 137, yPos, { align: "right" });
	doc.text(saleReturn.totalIva10, xPosB + 137, yPos, { align: "right" });

	yPos += 1.5;

	//line divide
	doc.setLineWidth(0.2);
	doc.line(xPosA, yPos, lineX - margin, yPos);
	doc.line(xPosB, yPos, pageWidth - margin, yPos);
	yPos += _lineHsmall;

	//numalet
	doc.setFont(_fontFamily, _fontBold);
	doc.text(saleReturn.totalmoneyTitle, xPosA + span1, yPos);
	doc.text(saleReturn.totalmoneyTitle, xPosB + span1, yPos);
	doc.setFont(_fontFamily, _fontNormal);

	const monTitlew = doc.getTextWidth(saleReturn.totalmoneyTitle);
	doc.text(saleReturn.numalet, xPosA + span1 + monTitlew + 2, yPos);
	doc.text(saleReturn.numalet, xPosB + span1 + monTitlew + 2, yPos);

	doc.setFont(_fontFamily, _fontBold);
	doc.text(saleReturn.totalInvoice, xPosA + 137, yPos, { align: "right" });
	doc.text(saleReturn.totalInvoice, xPosB + 137, yPos, { align: "right" });
	doc.setFont(_fontFamily, _fontNormal);

	yPos += 1.5;

	//line divide
	doc.setLineWidth(0.2);
	doc.line(xPosA, yPos, lineX - margin, yPos);
	doc.line(xPosB, yPos, pageWidth - margin, yPos);
	yPos += _lineHsmall;

	doc.setFont(_fontFamily, _fontBold);
	doc.text("Liquidacion del Iva.", xPosA + span1, yPos);
	doc.text("Liquidacion del Iva.", xPosB + span1, yPos);
	doc.setFont(_fontFamily, _fontNormal);

	doc.text(`(5%) ${saleReturn.VATsettlement5}`, xPosA + 50, yPos);
	doc.text(`(5%) ${saleReturn.VATsettlement5}`, xPosB + 50, yPos);

	doc.text(`(10%) ${saleReturn.VATsettlement10}`, xPosA + 75, yPos);
	doc.text(`(10%) ${saleReturn.VATsettlement10}`, xPosB + 75, yPos);

	doc.setFont(_fontFamily, _fontBold);
	doc.text("Total Iva", xPosA + 120, yPos, { align: "right" });
	doc.text("Total Iva", xPosB + 120, yPos, { align: "right" });
	doc.setFont(_fontFamily, _fontNormal);

	doc.text(saleReturn.VATsettlementTotal, xPosA + 137, yPos, { align: "right" });
	doc.text(saleReturn.VATsettlementTotal, xPosB + 137, yPos, { align: "right" });

	yPos += 1.5;

	//line divide
	doc.setLineWidth(0.2);
	doc.line(xPosA, yPos, lineX - margin, yPos);
	doc.line(xPosB, yPos, pageWidth - margin, yPos);
	yPos += _lineHsmall;

	const QRious = window.QRious;

	const qr = new QRious({
		value: "https://example.com",
		size: 100,
	});

	const qrImage = qr.toDataURL();

	doc.addImage(qrImage, "PNG", xPosA, yPos, 70, 70);
	doc.addImage(qrImage, "PNG", xPosB, yPos, 70, 70);

	const pdfDataUrl = doc.output("datauristring");

	// Mostrar el PDF en el iframe
	const pdfViewer = document.getElementById("pdfViewer") as HTMLIFrameElement;
	pdfViewer.src = pdfDataUrl;
}
