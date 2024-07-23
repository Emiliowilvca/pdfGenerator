interface SaleReturnModel {
  companyName: string;
  companyAddress: string;
  companyCity: string;
  companyState: string;
  companyEmail: string;
  companyPhone: string;
  companyActivity: string;
}

const saleReturnModel: SaleReturnModel = {
  companyName: "Compañia Paraguaya de Sistemas Informatico",
  companyAddress: "123 Main St., Col.Manitoba, San Pedro, 12345",
  companyCity: "Colonia Manitoba",
  companyState: "San Pedro - Paraguay",
  companyEmail: "company@example.com",
  companyPhone: "(123) 456-7890",
  companyActivity:
    "Comercio al pormenor de otros productos en Comercio no especific",
};

function onGeneratePdfButtonClick(event: MouseEvent): void {
  generatePdf(saleReturnModel);
}

window.onload = () => {
  const generatePdfButton = document.getElementById(
    "generatePDF"
  ) as HTMLButtonElement;
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
  // Calcular la posición X para centrar la línea vertical
  const lineX = pageWidth / 2;
  // Configuración de los rectángulos
  const margin = 5; // Margen entre los rectángulos y el borde de la página
  const rectMargin = 5; // Margen adicional a la derecha de la línea
  const rectWidth = pageWidth / 2 - margin - rectMargin; // Ancho de cada rectángulo

  const _fontLarge = 12;
  const _fontMedium = 9;
  const _fontSmall = 7;

  // Configurar color y grosor de línea
  doc.setDrawColor(0, 0, 0);
  doc.setFillColor(255, 255, 255);
  doc.setLineWidth(0.3);

  // Rectángulo a la izquierda (x, y, width, height, cornerX, cornerY)
  doc.roundedRect(margin, margin, rectWidth, pageHeight - 2 * margin, 2, 2);

  // Rectángulo a la derecha
  doc.roundedRect(
    lineX + rectMargin,
    margin,
    rectWidth,
    pageHeight - 2 * margin,
    2,
    2
  );

  // (x1, y1, x2, y2)
  doc.line(lineX, 0, lineX, pageHeight);
  const xPosA = margin;
  const xPosB = lineX + rectMargin;
  let yPos = 7;

  doc.setFont("helvetica");
  doc.setFontSize(_fontSmall);

  doc.text(saleReturn.companyName, xPosA, yPos);
  doc.text(saleReturn.companyName, xPosB, yPos);

  const pdfDataUrl = doc.output("datauristring");

  // Mostrar el PDF en el iframe
  const pdfViewer = document.getElementById("pdfViewer") as HTMLIFrameElement;
  pdfViewer.src = pdfDataUrl;
}
