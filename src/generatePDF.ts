declare global {
    interface Window {
      jspdf: any;
    }
  }
  
  export function generatePDF(): string {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text("Hello, world!", 10, 10);
    return doc.output('datauristring');
  }
  
  document.getElementById('generate')!.addEventListener('click', () => {
    const pdfDataUri = generatePDF();
    const link = document.createElement('a');
    link.href = pdfDataUri;
    link.download = 'document.pdf';
    link.click();
  });
  
  