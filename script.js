// Dados fixos
const ENGENHEIROS = {
    "SALOMÃO JOSE COHEN": {
        "CREA": "0401863549",
        "EMAIL": "salomao.cohen@hotmail.com",
        "FONE": "(92) 99136-1006",
        "ENDERECO": "Rua Mar de SUFE, 67, Conjunto Imperial, Flores, Manaus/AM, CEP 69058-438",
        "RG": "801.420-5",
        "CPF": "317.323.132-53"
    },
    "RODRIGO DAMASCENO NASCIMENTO": {
        "CREA": "0920192912",
        "EMAIL": "rodrigo.ele@ribeirolopes.eng.br",
        "FONE": "(95) 99146-6367",
        "ENDERECO": "Rua Antonio Marques, 108, Buritis, Boa Vista/RR, CEP 69309-172",
        "RG": "413.816-3",
        "CPF": "022.331.622-93"
    }
};

const CLIENTES = {
    "SUPERINTENDÊNCIA DA RECEITA FEDERAL": {
        "CNPJ": "00.394.460/0070-73",
        "END_SEDE": "Rua Travessa Rui Barbosa,1039, Bairro Reduto, Belém-PA, CEP 66.053-260",
        "RESPONSAVEL": "Eduardo Badaró Fernandes",
        "NACIONALIDADE": "brasileira",
        "ESTADO_CIVIL": "Solteiro(a)",
        "IDENTIDADE": "01.184.275-1",
        "CPF": "000.934.647-38",
        "DOMICILIO": "Av. Dr. Theomario Pinto da Costa, n° 192, Chapada, Manaus/AM"
    },
    "PREFEITURA MUNICIPAL DE SÃO LUIZ DO ANAUÁ/RR": {
        "CNPJ": "04.056.230/0001-23",
        "END_SEDE": "Avenida Macapá, Nº 1000, Centro, CEP-69370-000, São Luiz do Anauá/RR",
        "RESPONSAVEL": "Isaac Thomas Santos e Santos",
        "NACIONALIDADE": "brasileiro",
        "ESTADO_CIVIL": "Solteiro",
        "IDENTIDADE": "15.212-3",
        "CPF": "058.834.373-03",
        "DOMICILIO": "Rua Jose Vieira Sampaio, Nº 12, Centro, CEP: 69.378-000, Caroebe/RR"
    },
    "INSTITUTO DE PREVIDÊNCIA SOCIAL DO ESTADO DE RORAIMA - IPER": {
        "CNPJ": "03.491.063/0001-86",
        "END_SEDE": "Rua Araújo Filho, 823 - Centro, Boa Vista - RR, CEP: 69.301-090",
        "RESPONSAVEL": "Rafael David Aires Alencar",
        "NACIONALIDADE": "brasileiro",
        "ESTADO_CIVIL": "Casado(a)",
        "IDENTIDADE": "15.912-4",
        "CPF": "512.997.122-15",
        "DOMICILIO": "Rua Araújo Filho, 823 - Centro, Boa Vista - RR, CEP: 69.301-090"
    },
    "SECRETARIA MUNICIPAL DE OBRAS - SMO": {
        "CNPJ": "05.943.030/0001-55",
        "END_SEDE": "Av. Santos Dumont, 1721 - São Francisco, Boa Vista - RR, CEP 69.305-105",
        "RESPONSAVEL": "Kaynara Carvalho de Oliveira",
        "NACIONALIDADE": "brasileira",
        "ESTADO_CIVIL": "Solteiro(a)",
        "IDENTIDADE": "361.182-7",
        "CPF": "062.137.393-19",
        "DOMICILIO": "Rua João XXIII, n° 476, apartamento 4, Bairro Aparecida, Boa Vista/RR"
    },
    "SECRETARIA DE ESTADO DE INFRAESTRUTURA DE RORAIMA - SEINF": {
        "CNPJ": "84.012.012/0001-26",
        "END_SEDE": "Av. Getúlio Vargas,3941 Bairro Canarinho, Boa Vista/Roraima, CEP 69.306-545",
        "RESPONSAVEL": "Raissa Karla Santos de Andrade",
        "NACIONALIDADE": "brasileira",
        "ESTADO_CIVIL": "Solteiro(a)",
        "IDENTIDADE": "202.909-6",
        "CPF": "049.666.684-33",
        "DOMICILIO": "Av. Getúlio Vargas,3941 Bairro Canarinho, Boa Vista/Roraima, CEP 69.306-545"
    },
    "SECRETARIA DE ESTADO DA SAÚDE DE RORAIMA - SESAU": {
        "CNPJ": "84.013.408/0001-98",
        "END_SEDE": "Rua Madri, 180, Aeroporto, Boa Vista - RR, CEP 69.310-043",
        "RESPONSAVEL": "Wengley Glides Martins Silva",
        "NACIONALIDADE": "brasileiro",
        "ESTADO_CIVIL": "Solteiro(o)",
        "IDENTIDADE": "15.212-3",
        "CPF": "779.133.102-00",
        "DOMICILIO": "Rua Olavo Brasil filho, 101, apartamento 03, Jardim Floresta, CEP 69.312-133"
    }
};

// Mapeamento dos meses em português
const MESES_PT_BR = {
    "January": "janeiro", "February": "fevereiro", "March": "março",
    "April": "abril", "May": "maio", "June": "junho",
    "July": "julho", "August": "agosto", "September": "setembro",
    "October": "outubro", "November": "novembro", "December": "dezembro"
};

// Templates disponíveis
const TEMPLATES = {
    "memorial": "templates/memorial-descritivo.docx",
    "procuração": "templates/procuração.docx",
    "termo_responsabilidade": "templates/termo-responsabilidade.docx",
    "carta_viabilidade": "templates/carta-viabilidade.docx",
    "termo_nao_geração": "templates/termo-nao-geração.docx"
};

// Variáveis globais
let documentosGerados = [];
let dadosProcessados = {};

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

async function initApp() {
    // Configurar datas padrão
    setupDefaultDates();
    
    // Preencher seletores
    populateSelectors();
    
    // Verificar templates
    await checkTemplates();
    
    // Configurar eventos
    setupEventListeners();
}

function setupDefaultDates() {
    const hoje = new Date();
    const umAno = new Date();
    umAno.setFullYear(hoje.getFullYear() + 1);
    
    // Formatando para input type="date"
    document.getElementById('data_inicio').valueAsDate = hoje;
    document.getElementById('data_fim').valueAsDate = umAno;
}

function populateSelectors() {
    const engenheiroSelect = document.getElementById('engenheiro');
    const clienteSelect = document.getElementById('cliente');
    
    // Adicionar opções de engenheiros
    Object.keys(ENGENHEIROS).forEach(eng => {
        const option = document.createElement('option');
        option.value = eng;
        option.textContent = eng;
        engenheiroSelect.appendChild(option);
    });
    
    // Adicionar opções de clientes
    Object.keys(CLIENTES).forEach(cliente => {
        const option = document.createElement('option');
        option.value = cliente;
        option.textContent = cliente;
        clienteSelect.appendChild(option);
    });
}

async function checkTemplates() {
    const statusElement = document.getElementById('template-status');
    
    try {
        const templates = await Promise.all(
            Object.values(TEMPLATES).map(template => fetch(template).then(res => res.ok))
        );
        
        const allExist = templates.every(exists => exists);
        
        if (allExist) {
            statusElement.innerHTML = `
                <p><i class="fas fa-check-circle" style="color: #27ae60;"></i> 
                Todos os templates encontrados!</p>
                <small>Pronto para gerar documentos Word</small>
            `;
        } else {
            statusElement.innerHTML = `
                <p><i class="fas fa-exclamation-triangle" style="color: #f39c12;"></i> 
                Alguns templates não foram encontrados</p>
                <small>Verifique a pasta /templates/</small>
            `;
        }
    } catch (error) {
        statusElement.innerHTML = `
            <p><i class="fas fa-times-circle" style="color: #e74c3c;"></i> 
            Erro ao verificar templates</p>
            <small>Verifique o console para detalhes</small>
        `;
        console.error('Erro ao verificar templates:', error);
    }
}

function setupEventListeners() {
    const form = document.getElementById('document-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        processarFormulario();
    });
    
    const resetBtn = document.getElementById('reset-btn');
    resetBtn.addEventListener('click', function() {
        form.reset();
        setupDefaultDates();
        document.getElementById('results-section').classList.add('hidden');
    });
    
    // Botão copiar dados
    document.getElementById('copy-data-btn').addEventListener('click', copiarDados);
    
    // Botão download individual
    document.getElementById('download-individual-btn').addEventListener('click', () => {
        alert('Para abrir a pasta de downloads, verifique sua pasta padrão de downloads.');
    });
}

// Função para extrair município
function extrairMunicipio(enderecoCompleto) {
    if (!enderecoCompleto) return "Boa Vista";
    
    const partes = enderecoCompleto.split(',');
    if (partes.length >= 3) {
        let cidadeUf = partes[partes.length - 1].trim();
        cidadeUf = cidadeUf.split('CEP')[0].trim();
        if (cidadeUf.includes('-')) {
            return cidadeUf.split('-')[0].trim();
        }
        return cidadeUf;
    }
    return "Boa Vista";
}

// Função principal para processar formulário
async function processarFormulario() {
    // Validar campos obrigatórios
    if (!validarFormulario()) return;
    
    // Mostrar loading
    showLoading(true);
    
    try {
        // Coletar e processar dados
        const dados = coletarDadosFormulario();
        
        // Verificar quais documentos gerar
        const documentosParaGerar = getDocumentosSelecionados();
        
        if (documentosParaGerar.length === 0) {
            alert('Selecione pelo menos um documento para gerar.');
            showLoading(false);
            return;
        }
        
        // Gerar documentos
        await gerarDocumentosWord(dados, documentosParaGerar);
        
        // Exibir resultados
        exibirResultados();
        
    } catch (error) {
        console.error('Erro ao processar:', error);
        alert('Erro ao gerar documentos. Verifique o console para detalhes.');
    } finally {
        showLoading(false);
    }
}

function validarFormulario() {
    const camposObrigatorios = [
        'potencia', 'art', 'tensao', 'ramal_tamanho', 'ramal_cabo',
        'nome_projeto', 'concessionaria', 'endereco_empreendimento',
        'localizacao_projeto', 'numero_uc', 'demanda', 'data_inicio', 'data_fim',
        'engenheiro', 'cliente'
    ];
    
    for (const campoId of camposObrigatorios) {
        const campo = document.getElementById(campoId);
        if (!campo.value.trim()) {
            alert(`Por favor, preencha o campo: ${campo.previousElementSibling.textContent}`);
            campo.focus();
            return false;
        }
    }
    
    return true;
}

function coletarDadosFormulario() {
    const dados = {
        'XXXX': document.getElementById('potencia').value,
        'YYYY': document.getElementById('art').value,
        'DDDD': document.getElementById('tensao').value,
        'EEEE': document.getElementById('ramal_tamanho').value,
        'FFFF': document.getElementById('ramal_cabo').value,
        'GGGG': document.getElementById('nome_projeto').value,
        'LLLL': document.getElementById('concessionaria').value,
        'XXXY': document.getElementById('endereco_empreendimento').value,
        'HHHH': document.getElementById('localizacao_projeto').value,
        'VVVV': document.getElementById('numero_uc').value,
        'ZXZX': document.getElementById('demanda').value,
        'DTIN': formatarData(document.getElementById('data_inicio').value),
        'DTFI': formatarData(document.getElementById('data_fim').value)
    };
    
    // Dados do engenheiro
    const engenheiroNome = document.getElementById('engenheiro').value;
    const engData = ENGENHEIROS[engenheiroNome];
    dados['XXYY'] = engenheiroNome;
    dados['AAAA'] = engData.CREA;
    dados['BBBB'] = engData.EMAIL;
    dados['CCCC'] = engData.FONE;
    dados['IIII'] = engData.RG;
    dados['JJJJ'] = engData.CPF;
    dados['KKKK'] = engData.ENDERECO;
    
    // Dados do cliente
    const clienteNome = document.getElementById('cliente').value;
    const cliData = CLIENTES[clienteNome];
    dados['MMMM'] = clienteNome;
    dados['NNNN'] = cliData.CNPJ;
    dados['OOOO'] = cliData.END_SEDE;
    dados['PPPP'] = cliData.RESPONSAVEL;
    dados['QQQQ'] = cliData.NACIONALIDADE;
    dados['RRRR'] = cliData.ESTADO_CIVIL;
    dados['SSSS'] = cliData.IDENTIDADE;
    dados['TTTT'] = cliData.CPF;
    dados['UUUU'] = cliData.DOMICILIO;
    
    // Extrair município
    dados['ZZZZ'] = extrairMunicipio(dados['XXXY']);
    
    // Adicionar datas formatadas
    const hoje = new Date();
    const mesIngles = hoje.toLocaleString('en-US', { month: 'long' });
    const mesPortugues = MESES_PT_BR[mesIngles] || mesIngles;
    
    dados['14 / 07 / 2026'] = hoje.getDate() + ' / ' + (hoje.getMonth() + 1) + ' / ' + (hoje.getFullYear() + 1);
    dados['14 de julho de 2025'] = hoje.getDate() + ' de ' + mesPortugues + ' de ' + hoje.getFullYear();
    
    // Salvar dados para uso posterior
    dadosProcessados = { ...dados };
    
    return dados;
}

function formatarData(dataString) {
    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR');
}

function getDocumentosSelecionados() {
    const documentos = [];
    
    if (document.getElementById('gerar_memorial').checked) {
        documentos.push({ 
            tipo: 'memorial', 
            nome: 'Memorial Descritivo',
            nomeArquivo: 'Memorial Descritivo' 
        });
    }
    
    if (document.getElementById('gerar_procuracao').checked) {
        documentos.push({ 
            tipo: 'procuração', 
            nome: 'Procuração',
            nomeArquivo: 'Procuração' 
        });
    }
    
    if (document.getElementById('gerar_termo').checked) {
        documentos.push({ 
            tipo: 'termo_responsabilidade', 
            nome: 'Termo de Responsabilidade',
            nomeArquivo: 'Termo de Responsabilidade' 
        });
    }
    
    if (document.getElementById('gerar_carta').checked) {
        documentos.push({ 
            tipo: 'carta_viabilidade', 
            nome: 'Carta de Viabilidade',
            nomeArquivo: 'Carta de Viabilidade' 
        });
    }
    
    if (document.getElementById('gerar_termo_nao_geracao').checked) {
        documentos.push({ 
            tipo: 'termo_nao_geração', 
            nome: 'Termo de Não Geração',
            nomeArquivo: 'Termo de Não Geração' 
        });
    }
    
    return documentos;
}

async function gerarDocumentosWord(dados, documentosParaGerar) {
    documentosGerados = [];
    
    for (const docInfo of documentosParaGerar) {
        try {
            const templateUrl = TEMPLATES[docInfo.tipo];
            const response = await fetch(templateUrl);
            
            if (!response.ok) {
                throw new Error(`Template não encontrado: ${templateUrl}`);
            }
            
            const arrayBuffer = await response.arrayBuffer();
            
            // Criar documento com dados substituídos
            const docxContent = await processarTemplateWord(arrayBuffer, dados);
            
            // Nome do arquivo final
            const nomeProjeto = dados['GGGG'].replace(/[^a-z0-9]/gi, '_').toLowerCase();
            const nomeArquivo = `${docInfo.nomeArquivo} - ${nomeProjeto}.docx`;
            
            documentosGerados.push({
                nome: docInfo.nome,
                nomeArquivo: nomeArquivo,
                conteudo: docxContent,
                tipo: docInfo.tipo
            });
            
        } catch (error) {
            console.error(`Erro ao processar ${docInfo.nome}:`, error);
            throw error;
        }
    }
}

async function processarTemplateWord(arrayBuffer, dados) {
    // Para simplificar, vamos fazer uma substituição básica no conteúdo binário
    // Nota: Esta é uma abordagem simplificada. Para substituição complexa em Word,
    // seria necessário usar docxtemplater ou similar
    
    try {
        // Converter ArrayBuffer para Uint8Array
        const data = new Uint8Array(arrayBuffer);
        
        // Converter para string (simplificado - funciona para textos simples)
        let content = '';
        for (let i = 0; i < data.length; i++) {
            content += String.fromCharCode(data[i]);
        }
        
        // Substituir placeholders (simplificado)
        Object.keys(dados).forEach(key => {
            const placeholder = `[${key}]`;
            const value = dados[key];
            // Substituir de forma simples (pode não funcionar para formatação complexa)
            content = content.split(placeholder).join(value);
        });
        
        // Converter de volta para ArrayBuffer
        const buffer = new ArrayBuffer(content.length);
        const view = new Uint8Array(buffer);
        for (let i = 0; i < content.length; i++) {
            view[i] = content.charCodeAt(i);
        }
        
        return buffer;
        
    } catch (error) {
        console.error('Erro no processamento Word:', error);
        // Fallback: retornar o buffer original
        return arrayBuffer;
    }
}

function exibirResultados() {
    const resultsSection = document.getElementById('results-section');
    const documentsContainer = document.getElementById('documents-container');
    const dataSummaryContent = document.getElementById('data-summary-content');
    
    // Limpar conteúdo anterior
    documentsContainer.innerHTML = '';
    dataSummaryContent.innerHTML = '';
    
    // Exibir documentos gerados
    documentosGerados.forEach((doc, index) => {
        const docElement = document.createElement('div');
        docElement.className = 'document-card';
        docElement.innerHTML = `
            <h4><i class="fas fa-file-word"></i> ${doc.nome}</h4>
            <p>Arquivo: <strong>${doc.nomeArquivo}</strong></p>
            <p>Formato: Microsoft Word (.docx)</p>
            <div class="document-buttons">
                <button class="btn-download" onclick="baixarDocumentoWord(${index})">
                    <i class="fas fa-download"></i> Baixar Word
                </button>
                <button class="btn-preview" onclick="visualizarDocumento(${index})">
                    <i class="fas fa-eye"></i> Visualizar
                </button>
            </div>
        `;
        documentsContainer.appendChild(docElement);
    });
    
    // Configurar botão para baixar todos
    const downloadAllBtn = document.getElementById('download-all-btn');
    downloadAllBtn.onclick = baixarTodosDocumentos;
    
    // Exibir resumo dos dados
    const dadosFormatados = {};
    Object.keys(dadosProcessados).forEach(key => {
        if (!key.startsWith('14') && !key.includes('de ') && !key.includes('/202')) {
            dadosFormatados[key] = dadosProcessados[key];
        }
    });
    
    dataSummaryContent.innerHTML = JSON.stringify(dadosFormatados, null, 2);
    
    // Mostrar seção de resultados
    resultsSection.classList.remove('hidden');
    
    // Rolagem suave para resultados
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

function baixarDocumentoWord(index) {
    const doc = documentosGerados[index];
    
    // Criar blob do documento Word
    const blob = new Blob([doc.conteudo], { 
        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' 
    });
    
    // Criar link para download
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = doc.nomeArquivo;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    // Liberar URL
    setTimeout(() => URL.revokeObjectURL(url), 100);
    
    // Feedback visual
    showDownloadFeedback(doc.nome);
}

function baixarTodosDocumentos() {
    if (documentosGerados.length === 0) {
        alert('Nenhum documento para baixar.');
        return;
    }
    
    // Criar um arquivo ZIP com todos os documentos
    const zip = new JSZip();
    
    documentosGerados.forEach(doc => {
        zip.file(doc.nomeArquivo, doc.conteudo);
    });
    
    // Gerar o ZIP
    zip.generateAsync({ type: 'blob' })
        .then(function(content) {
            // Criar link para download do ZIP
            const url = URL.createObjectURL(content);
            const a = document.createElement('a');
            a.href = url;
            a.download = `Documentos_${dadosProcessados['GGGG'].replace(/[^a-z0-9]/gi, '_')}.zip`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            
            // Liberar URL
            setTimeout(() => URL.revokeObjectURL(url), 100);
            
            // Feedback
            showDownloadFeedback('todos os documentos');
        })
        .catch(function(error) {
            console.error('Erro ao criar ZIP:', error);
            alert('Erro ao criar arquivo ZIP.');
        });
}

function visualizarDocumento(index) {
    const doc = documentosGerados[index];
    
    // Em um ambiente real, você poderia abrir em uma nova janela
    // ou usar um visualizador de documentos
    alert(`Para visualizar o documento "${doc.nome}", faça o download e abra no Microsoft Word.\n\nArquivo: ${doc.nomeArquivo}`);
}

function copiarDados() {
    const dadosFormatados = document.getElementById('data-summary-content').textContent;
    
    navigator.clipboard.writeText(dadosFormatados)
        .then(() => {
            const btn = document.getElementById('copy-data-btn');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> Copiado!';
            btn.style.background = '#27ae60';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
            }, 2000);
        })
        .catch(err => {
            console.error('Erro ao copiar:', err);
            alert('Erro ao copiar dados para a área de transferência.');
        });
}

function showLoading(show) {
    const loading = document.getElementById('loading');
    const generateBtn = document.getElementById('generate-btn');
    
    if (show) {
        loading.classList.remove('hidden');
        generateBtn.disabled = true;
        generateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processando...';
    } else {
        loading.classList.add('hidden');
        generateBtn.disabled = false;
        generateBtn.innerHTML = '<i class="fas fa-file-word"></i> Gerar Documentos Word';
    }
}

function showDownloadFeedback(nomeDocumento) {
    // Feedback visual simples
    const originalTitle = document.title;
    document.title = `✓ ${nomeDocumento} baixado! - Gerador de Documentos`;
    
    setTimeout(() => {
        document.title = originalTitle;
    }, 1500);
}

// Funções auxiliares para o navegador
function formatDateToDMY(date) {
    const d = new Date(date);
    return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()}`;
}
