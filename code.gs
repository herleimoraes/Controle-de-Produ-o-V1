function onOpen() {
  SpreadsheetApp.getUi()
      .createMenu('Sistema HMC')
      .addItem('Abrir Formulário', 'abrirFormulario')
      .addToUi();
}

function abrirFormulario() {
  const html = HtmlService.createTemplateFromFile('form') // Mudamos para Template
      .evaluate()
      .setWidth(1280)
      .setHeight(720)
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  
  SpreadsheetApp.getUi().showModalDialog(html, 'Gestão de Serralheria');
}

// Função auxiliar para incluir arquivos HTML (CSS/JS)
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

// ID da pasta principal onde todos os pedidos serão guardados
const PASTA_RAIZ_ID = '1Pk3UdLNMay1c-OU6Cc6t5CQI2N3cok3w';

function processarFormulario(dados) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const abaPedidos = ss.getSheetByName('Pedidos');
    const abaArquivos = ss.getSheetByName('Arquivos');
    
    const dataRegistro = new Date();
    
    // 1. Localizar ou criar a pasta do pedido
    const pastaPai = DriveApp.getFolderById(PASTA_RAIZ_ID);
    const novaPastaPedido = pastaPai.createFolder("Pedido_" + dados.numeroPedido);
    
    // 2. Salvar dados principais
    abaPedidos.appendRow([
      dataRegistro, 
      dados.numeroPedido, 
      dados.dataEntrega, 
      dados.nomeCliente, 
      dados.descricao
    ]);
    
    // 3. Função interna para salvar cada arquivo
    const salvarPDF = (arqObjeto, tipoNome) => {
      if (arqObjeto && arqObjeto.data) {
        // Converte Base64 para Blob
        const byteCharacters = Utilities.base64Decode(arqObjeto.data);
        const blob = Utilities.newBlob(byteCharacters, arqObjeto.type, arqObjeto.name);
        
        // Salva no Drive
        const arquivoFinal = novaPastaPedido.createFile(blob);
        
        // Registra na aba de Arquivos
        abaArquivos.appendRow([
          dados.numeroPedido,
          tipoNome,
          arquivoFinal.getUrl()
        ]);
      }
    };

    // Executa o salvamento para os dois campos
    salvarPDF(dados.pdfPedido, "Pedido Original");
    salvarPDF(dados.pdfNota, "Nota Fiscal");
    
    return "✅ Sucesso! Pedido " + dados.numeroPedido + " e arquivos salvos.";
    
  } catch (e) {
    return "❌ Erro no servidor: " + e.toString();
  }
}
