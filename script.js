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

// NOVO: Dados para os Transformadores
const PT_TRAFO = [112.5, 150, 225, 500, 750, 1000, 1250, 1500];

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
    
    // NOVO: Preencher seleções de potência do Trafo e configurar listener
    populateTrafoPotencias();
    setupTrafoQuantityListener();
    
    // Verificar templates
    await checkTemplates();
    
    // Configurar eventos
    setupEventListeners();
}

function populateTrafoPotencias() {
    const select1 = document.getElementById('potencia_trafo_1');
    const select2 = document.getElementById('potencia_trafo_2');

    function addOptions(selectElement) {
        if (!selectElement) return;
        selectElement.innerHTML = '<option value="" disabled selected>Selecione a Potência (kVA)</option>';
        PT_TRAFO.forEach(potencia => {
            const option = document.createElement('option');
            option.value = potencia;
            option.textContent = `${potencia} kVA`;
            selectElement.appendChild(option);
        });
    }

    addOptions(select1);
    addOptions(select2);
}

function setupTrafoQuantityListener() {
    const quantitySelect = document.getElementById('quantidade_trafos');
    const trafo2Fields = document.getElementById('trafo_2_fields');
    
    if (!quantitySelect || !trafo2Fields) return;
    
    const potencia2 = document.getElementById('potencia_trafo_2');
    const tensao2 = document.getElementById('tensao_trafo_2');

    function toggleTrafo2(show) {
        // Usa 'grid' para manter o estilo do form-grid, ou 'none'
        trafo2Fields.style.display = show ? 'grid' : 'none';
        
        // Define/remove a obrigatoriedade dos campos
        potencia2.required = show;
        tensao2.required = show;
        
        // Limpa os valores se for desativado
        if (!show) {
            potencia2.value = '';
            tensao2.value = '';
        }
    }

    // Inicialização (garante que só 1 está visível por padrão)
    toggleTrafo2(quantitySelect.value === '2');

    quantitySelect.addEventListener('change', (event) => {
        toggleTrafo2(event.target.value === '2');
    });
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
        // NOVO: Recarrega as opções de potência e listener
        populateTrafoPotencias();
        setupTrafoQuantityListener();
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
    // Lista de campos obrigatórios (atualizada para novos IDs)
    const camposObrigatorios = [
        'potencia_trafo_1', 'tensao_trafo_1', 'carga_instalada', // Novos/Atualizados
        'art', 'ramal_tamanho', 'ramal_cabo',
        'nome_projeto', 'concessionaria', 'endereco_empreendimento',
        'localizacao_projeto', 'numero_uc', 'demanda', 'data_inicio', 'data_fim',
        'engenheiro', 'cliente'
    ];
    
    // Adiciona Trafo 2 condicionalmente
    if (document.getElementById('quantidade_trafos').value === '2') {
        camposObrigatorios.push('potencia_trafo_2', 'tensao_trafo_2');
    }
    
    for (const campoId of camposObrigatorios) {
        const campo = document.getElementById(campoId);
        if (!campo || !campo.value.trim()) {
            // Tenta obter o label para um alerta mais amigável
            const labelText = campo ? (campo.previousElementSibling ? campo.previousElementSibling.textContent.replace('*', '').trim() : campoId) : campoId;
            alert(`Por favor, preencha o campo obrigatório: ${labelText}`);
            if (campo) campo.focus();
            return false;
        }
    }
    
    return true;
}

function coletarDadosFormulario() {
    // NOVO: Captura dos campos da subestação
    const potencia1 = document.getElementById('potencia_trafo_1').value;
    const tensao1 = document.getElementById('tensao_trafo_1').value;
    const qtdTrafos = document.getElementById('quantidade_trafos').value;
    const tipoTrafo = document.getElementById('tipo_trafo').value;
    const cargaInstalada = document.getElementById('carga_instalada').value;

    let potencia2 = '';
    let tensao2 = '';
    let potenciaTotal = parseFloat(potencia1);

    if (qtdTrafos === '2') {
        potencia2 = document.getElementById('potencia_trafo_2').value;
        tensao2 = document.getElementById('tensao_trafo_2').value;
        if (potencia2) {
            potenciaTotal += parseFloat(potencia2);
        }
    }

    // Mapeamento dos placeholders
    const dados = {
        // NOVOS PLACEHOLDERS SOLICITADOS
        'PTF1': potencia1, // Potência do Trafo 1
        'TTF1': tensao1,   // Tensão do Trafo 1
        'PTF2': potencia2 || 'N/A', // Potência do Trafo 2 (ou N/A)
        'TTF2': tensao2 || 'N/A',   // Tensão do Trafo 2 (ou N/A)
        'TIPO_TRAFO': tipoTrafo, // NOVO PLACEHOLDER SUGERIDO
        'ZXXZ': cargaInstalada, // Placeholder para Carga Instalada

        // PLACEHOLDERS EXISTENTES (Atualizados com a nova lógica)
        'XXXX': potenciaTotal.toString(), // Potência Total (soma Trafo 1 e 2)
        'DDDD': tensao1, // Tensão Geral (usando Trafo 1 como referência)
        'ZXZX': document.getElementById('demanda').value, // Demanda (Mantido)
        
        // PLACEHOLDERS EXISTENTES (Mantidos)
        'YYYY': document.getElementById('art').value,
        'EEEE': document.getElementById('ramal_tamanho').value,
        'FFFF': document.getElementById('ramal_cabo').value,
        'GGGG': document.getElementById('nome_projeto').value,
        'LLLL': document.getElementById('concessionaria').value,
        'XXXY': document.getElementById('endereco_empreendimento').value,
        'HHHH': document.getElementById('localizacao_projeto').value,
        'VVVV': document.getElementById('numero_uc').value,
        'DTIN': formatarData(document.getElementById('data_inicio').value),
        'DTFI': formatarData(document.getElementById('data_fim').value),
        
        // Dados do engenheiro
        // ... (resto do código de Engenheiro, Cliente e Datas)
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
    
    // Adicionar datas formatadas (com correção do zero padding)
    const hoje = new Date();
    
    // 1. Obter e formatar o dia (com zero à esquerda)
    const diaFormatado = hoje.getDate().toString().padStart(2, '0');
    
    // 2. Obter e formatar o mês (com zero à esquerda)
    // O mês é base 0, então somamos 1 antes de formatar.
    const mesFormatado = (hoje.getMonth() + 1).toString().padStart(2, '0');
    
    // 3. Obter o nome do mês em português (reutilizando sua lógica)
    const mesIngles = hoje.toLocaleString('en-US', { month: 'long' });
    // Certifique-se de que a variável global MESES_PT_BR está definida!
    const mesPortugues = MESES_PT_BR[mesIngles] || mesIngles;
    
    // 4. Aplicar nos dados
    // Chave: '14 / 07 / 2026' (Usado como placeholder para data futura)
    dados['14 / 07 / 2026'] = `${diaFormatado} / ${mesFormatado} / ${hoje.getFullYear() + 1}`;
    
    // Chave: '14 de julho de 2025' (Usado como placeholder para data por extenso)
    dados['14 de julho de 2025'] = `${diaFormatado} de ${mesPortugues} de ${hoje.getFullYear()}`;
    
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
    try {
        // 1. Carregar o ArrayBuffer com Pizzip
        const zip = new PizZip(arrayBuffer);

        // Substitua o Passo 2 por isso se realmente precisar manter os [placeholders]
        const doc = new docxtemplater(zip, {
            paragraphLoop: true,
            linebreaks: true,
            delimiters: {
                start: '[',
                end: ']'
            }
        });

        // 3. Definir os dados para substituição
        // Nota: As chaves no 'dados' devem ser iguais aos placeholders no Word.
        doc.setData(dados);

        // 4. Executar a substituição
        doc.render();

        // 5. Gerar o novo arquivo binário (.docx)
        const content = doc.getZip().generate({
            type: "arraybuffer",
            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            compression: "DEFLATE",
        });

        return content;
    } catch (error) {
        console.error('Erro ao processar template Word:', error);
        // Exibir detalhes de erro do Docxtemplater, se possível
        if (error.properties) {
            console.log('Descrição do erro:', error.properties.explanation);
            console.log('Erro na tag:', error.properties.xtag);
        }
        throw new Error('Falha ao gerar o documento Word com Docxtemplater.');
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
            const nomeProjeto = dadosProcessados['GGGG'].replace(/[^a-z0-9]/gi, '_').toLowerCase();
            a.href = url;
            a.download = `Documentos_${nomeProjeto}.zip`;
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
