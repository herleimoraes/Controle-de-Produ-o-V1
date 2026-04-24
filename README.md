# 🛠️ Sistema de Gestão de Serralheria - HMC DigitalLab

Sistema desenvolvido para automação de processos de serralheria, produção e expedição, utilizando **Google Apps Script** integrado ao **Google Sheets** e **Google Drive**.

## 🚀 Funcionalidades Atuais

* **Dashboard Operacional:** Interface de 1280x720 com acesso rápido aos setores e criação de pedidos.
* **Gestão de Pedidos:** Cadastro completo com número de pedido, cliente, descrição e prazos.
* **Automação de Arquivos:** * Criação automática de pastas no Google Drive baseadas no número do pedido.
    * Upload de arquivos PDF (Pedido e Nota Fiscal) diretamente para a pasta específica.
* **Auditoria Interna:** Registro automático de data e hora de criação em todas as entradas.
* **Banco de Dados Relacional:** Organização em abas separadas para dados de pedidos e links de arquivos para melhor escalabilidade.

## 📁 Tecnologias Utilizadas

* [Google Apps Script](https://developers.google.com/apps-script) - Engine de execução.
* [Bootstrap 5](https://getbootstrap.com/) - Framework CSS para layout responsivo e moderno.
* [Bootstrap Icons](https://icons.getbootstrap.com/) - Conjunto de ícones para interface.
* [Google Drive API](https://developers.google.com/drive) - Gerenciamento de pastas e arquivos.

## 🔧 Configuração

1.  Crie uma planilha no Google Sheets com as abas `Pedidos` e `Arquivos`.
2.  No menu `Extensões > Apps Script`, adicione os arquivos contidos neste repositório.
3.  No arquivo `Código.gs`, substitua a variável `PASTA_RAIZ_ID` pelo ID da sua pasta principal no Google Drive.
4.  Atualize a planilha para visualizar o menu **Sistema HMC**.

## 📅 Roadmap de Desenvolvimento

- [x] Interface Principal (Dashboard)
- [x] Formulário de Cadastro com Upload de PDF
- [x] Lógica de pastas dinâmicas no Drive
- [ ] Implementar tela de visualização/listagem de pedidos (Serralheria/Produção)
- [ ] Sistema de status (Em produção, Finalizado, Enviado)

---
Desenhado com foco em produtividade por **Herlei Moraes Costa (HMC DigitalLab)**.
