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

// Templates dos documentos (em formato simplificado)
const TEMPLATES = {
    "memorial": `**MEMORIAL DESCRITIVO**

**ART: [YYYY]**

**DESCRIÇÃO: SUBESTAÇÃO ABRIGADA TRIFÁSICA ABAIXADORA DE TENSÃO DE [XXXX]kVA**

**PROPRIETÁRIO: [MMMM]**

> **[ZZZZ] / RR**

**SUMÁRIO**

**1. APRESENTAÇÃO**

O projeto da Subestação Abrigada Trifásica Abaixadora de Tensão de [XXXX]kVA a seco, situada na [XXXY], tem por objetivo o fornecimento de energia elétrica em média tensão para o Projeto [GGGG].

1.1 PROJETISTA

> [XXYY]
> Engenheiro Eletricista -- CREA -- RNP [AAAA]
> Contatos/e-mail: [BBBB]
> Fone: [CCCC]
> [ZZZZ] - RR

**2. OBJETIVO**

Projeto Elétrico da Infraestrutura Elétrica em Média Tensão para subestação de [XXXX] KVA-[DDDD], para atender a demanda elétrica do Projeto [GGGG].

**3. RAMAL DE ENTRADA**

O Ramal de entrada terá extensão [EEEE] metros aéreo em cabo xlpe - 90° - 12/20kv [FFFF]

**4. CONSIDERAÇÕES FINAIS**

Conforme o quadro demonstrativo de cargas apresentado, o transformador utilizado será de [XXXX]kVA, com interligação na média tensão devido a confiabilidade da mesma, sendo assim a potência demandada total será de [ZXZX].

**[XXYY]**
***CREA RR [AAAA]***`,

    "procuração": `**PROCURAÇÃO**

**OUTORGANTE: [MMMM]**, pessoa jurídica de direito privado, inscrita perante o CNPJ/MF, sob o nº [NNNN], com sede na [OOOO], neste ato representado pelo seu (a) responsável [PPPP], de nacionalidade [QQQQ], [RRRR], portador da cédula de identidade nº [SSSS] e inscrito no CPF sob o nº [TTTT], residente e domiciliado a [UUUU].

**[GGGG]**, localizado na [XXXY].

**OUTORGADOS: [XXYY]**, brasileiro, portador do RG nº [IIII] e do CPF nº [JJJJ], Registro Profissional [AAAA] residente e domiciliado no(a) [KKKK].

Poderes: Através do presente instrumento particular de mandato, o OUTORGANTE nomeia e constitui como seu procurador o OUTORGADO, acima qualificado, concedendo-lhes poderes, inerentes a o bom e fiel cumprimento deste mandato, podendo representar o OUTORGANTE perante a [LLLL], para o fim específico de solicitação de análise e viabilidade técnica e aprovação de projeto de nossa subestação abaixadora de tensão.

Esta procuração é válida até [14 / 07 / 2026].

[ZZZZ], RR [14 de julho de 2025].`,

    "termo_responsabilidade": `**TERMO DE RESPONSABILIDADE PARA USO DE GERAÇÃO PRÓPRIA**

À

[LLLL] S.A

Documento referente ao [GGGG], localizado na [XXXY], dentro da estrutura urbana da região.

Eu, [PPPP], residente e domiciliada a [UUUU], inscrito(a) no CPF sob o nº [TTTT], pelo presente declaro:

1. Estar ciente e aceitar as eventuais implicações nos casos de acidentes com pessoas ou materiais na instalação própria, na de outros consumidores ou da [MMMM] S.A, quando motivados por defeito no funcionamento do equipamento de bloqueio da geração própria instalada na unidade consumidora em referência, sem número.

2. Comprometer-me a comunicar a [MMMM] S.A antes de fazer qualquer modificação nas instalações da geração própria, inclusive nos equipamentos do sistema de bloqueio.

3. Estar ciente de que o não cumprimento deste termo implicará na suspensão do fornecimento de energia elétrica por parte da [MMMM] S.A. à unidade consumidora em referência.

4. Reconhecer que não caberá ao consumidor direito à indenização por parte da [MMMM] S.A, tendo em vista a ocorrência de eventual acidente provocado pelo mau uso da geração própria, da operação indevida do sistema de bloqueio ou de falhas nos equipamentos componentes do sistema de geração própria.

5. A [MMMM] se compromete a operar o sistema de comutação automática de forma a garantir que a rede da [LLLL] S.A não será energizada pela geração de emergência.

[ZZZZ], [DATA_ATUAL]

Titular da unidade consumidora:

Nome: [PPPP]
CPF: [TTTT]
Assinatura: _____________________________

Testemunhas:

Nome: _____________________________ CPF: _________________
Assinatura: _____________________________

Nome: _____________________________ CPF: _________________
Assinatura: _____________________________`,

    "carta_viabilidade": `Servimo-nos desta para solicitar Viabilidade Técnica e os Níveis de curto-circuito para nosso novo estabelecimento de ensino e fornecimento de energia elétrica para Subestação Abaixadora de [XXXX]kVA, conforme informações abaixo:

1) Nome do Proprietário: [MMMM]
2) Endereço do Proprietário: [OOOO]
3) Nome do Empreendimento: [GGGG]
4) Endereço do Empreendimento: [XXXY]
5) Coordenada Geográfica (Lat./Log.): [HHHH]
6) C.N.P.J / CPF: [NNNN]
7) Número da unidade consumidora (número conosco): [VVVV]
8) Compra de energia: ACR- Ambiente de Contratação Regulada ( X ); ACL- Ambiente de Contratação Livre ( )
9) Classe: Residencial ( ); Industrial ( X ); Comercial ( ); Rural ( ); Poder Público ( )
10) Planta de Situação (Anexar croqui de localização com a posição do transformador).
11) Subestação destinada a: Carga (X); Geração Distribuída ( )
12) Potência a ser instalada em Transformadores: [XXXX kVA]
13) Demanda prevista total: [ZXZX kVA]
14) Nível de tensão do secundário do transformador: [DDDD]
15) Número do Poste de Interligação: S/Nº
16) Data de Início da Obra: [DTIN]; Data de Término da Obra: [DTFI]
17) E-mail para contato (obrigatório): [BBBB]
18) Telefone para Contato (obrigatório): [CCCC]
19) Técnico responsável: [XXYY]`,

    "termo_nao_geracao": `**TERMO DE RESPONSABILIDADE DE NÃO UTILIZAÇÃO DE GERAÇÃO PRÓPRIA**

O consumidor [GGGG], CNPJ: [NNNN], sob responsabilidade de [PPPP], inscrito no CPF sob o nº [TTTT], representado pelo Engenheiro Eletricista [XXYY], registrado no CREA-[AAAA] sob o n.º [JJJJ], declara que a Unidade Consumidora U.C Nº [VVVV] (Ligação nova) não possui Sistema de Geração Própria, instalado em sua unidade consumidora, localizada na [XXXY], não existindo em hipótese alguma a energização do sistema da rede elétrica da concessionária [LLLL], evitando assim a ocorrência de acidentes quando a necessidade de operações, intervenções e ou manutenções no sistema de distribuição de energia elétrica.

[ZZZZ], [14 de julho de 2025].

Responsável pela Unidade Consumidora

[PPPP]

Nome: _______________________________
Assinatura: _______________________________

Responsável Técnico pela Geração Própria

[XXYY]

Nome: _______________________________
Assinatura: _______________________________`
};

// Mapeamento dos meses em português
const MESES_PT_BR = {
    "January": "janeiro",
    "February": "fevereiro",
    "March": "março",
    "April": "abril",
    "May": "maio",
    "June": "junho",
    "July": "julho",
    "August": "agosto",
    "September": "setembro",
    "October": "outubro",
    "November": "novembro",
    "December": "dezembro"
};

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Preencher seletores
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
    
    // Configurar evento do formulário
    const form = document.getElementById('document-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        gerarDocumentos();
    });
    
    // Configurar botão de reset
    const resetBtn = document.getElementById('reset-btn');
    resetBtn.addEventListener('click', function() {
        form.reset();
        document.getElementById('results-section').classList.add('hidden');
    });
});

// Função para extrair município do endereço
function extrairMunicipio(enderecoCompleto) {
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

// Função principal para gerar documentos
function gerarDocumentos() {
    // Validar campos obrigatórios
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
            return;
        }
    }
    
    // Coletar dados do formulário
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
        'DTIN': document.getElementById('data_inicio').value,
        'DTFI': document.getElementById('data_fim').value
    };
    
    // Dados do engenheiro selecionado
    const engenheiroNome = document.getElementById('engenheiro').value;
    const engData = ENGENHEIROS[engenheiroNome];
    dados['XXYY'] = engenheiroNome;
    dados['AAAA'] = engData.CREA;
    dados['BBBB'] = engData.EMAIL;
    dados['CCCC'] = engData.FONE;
    dados['IIII'] = engData.RG;
    dados['JJJJ'] = engData.CPF;
    dados['KKKK'] = engData.ENDERECO;
    
    // Dados do cliente selecionado
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
    
    // Adicionar datas atuais
    const hoje = new Date();
    const mesIngles = hoje.toLocaleString('en-US', { month: 'long' });
    const mesPortugues = MESES_PT_BR[mesIngles] || mesIngles;
    
    dados['14 / 07 / 2026'] = hoje.getDate() + ' / ' + (hoje.getMonth() + 1) + ' / ' + (hoje.getFullYear() + 1);
    dados['14 de julho de 2025'] = hoje.getDate() + ' de ' + mesPortugues + ' de ' + hoje.getFullYear();
    dados['DATA_ATUAL'] = hoje.getDate() + ' de ' + mesPortugues + ' de ' + hoje.getFullYear();
    
    // Gerar documentos
    const documentosGerados = {};
    const gerarTermoNaoGeracao = document.getElementById('gerar_termo_nao_geracao').checked;
    
    // Lista de documentos a gerar
    const documentosParaGerar = [
        { nome: "Memorial Descritivo", template: "memorial", nomeArquivo: `Memorial Descritivo - ${dados['GGGG']}.txt` },
        { nome: "Procuração", template: "procuração", nomeArquivo: `Procuração - ${dados['GGGG']}.txt` },
        { nome: "Termo de Responsabilidade", template: "termo_responsabilidade", nomeArquivo: `Termo de Responsabilidade - ${dados['PPPP']}.txt` },
        { nome: "Carta de Viabilidade", template: "carta_viabilidade", nomeArquivo: `Carta de Viabilidade - ${dados['GGGG']}.txt` }
    ];
    
    if (gerarTermoNaoGeracao) {
        documentosParaGerar.push({
            nome: "Termo de Não Geração",
            template: "termo_nao_geracao",
            nomeArquivo: `Termo de Não Utilização de Geração Própria - ${dados['GGGG']}.txt`
        });
    }
    
    // Processar cada documento
    documentosParaGerar.forEach(doc => {
        let conteudo = TEMPLATES[doc.template];
        
        // Substituir placeholders
        Object.keys(dados).forEach(key => {
            const placeholder = `[${key}]`;
            conteudo = conteudo.split(placeholder).join(dados[key]);
        });
        
        documentosGerados[doc.nome] = {
            conteudo: conteudo,
            nomeArquivo: doc.nomeArquivo,
            nomeExibicao: doc.nome
        };
    });
    
    // Exibir resultados
    exibirResultados(documentosGerados, dados);
}

// Função para exibir resultados
function exibirResultados(documentosGerados, dados) {
    const resultsSection = document.getElementById('results-section');
    const documentsContainer = document.getElementById('documents-container');
    const dataSummaryContent = document.getElementById('data-summary-content');
    
    // Limpar conteúdo anterior
    documentsContainer.innerHTML = '';
    dataSummaryContent.innerHTML = '';
    
    // Exibir documentos gerados
    Object.values(documentosGerados).forEach((doc, index) => {
        const docElement = document.createElement('div');
        docElement.className = 'document-card';
        docElement.innerHTML = `
            <h4>${doc.nomeExibicao}</h4>
            <p>Arquivo: ${doc.nomeArquivo}</p>
            <button class="btn-download" onclick="baixarDocumento('${doc.nomeArquivo}', ${index})">
                <i class="fas fa-download"></i> Baixar ${doc.nomeExibicao}
            </button>
        `;
        
        // Armazenar dados para download
        docElement.dataset.conteudo = btoa(unescape(encodeURIComponent(doc.conteudo)));
        docElement.dataset.nomeArquivo = doc.nomeArquivo;
        
        documentsContainer.appendChild(docElement);
    });
    
    // Exibir resumo dos dados
    const dadosFormatados = {};
    Object.keys(dados).forEach(key => {
        if (!key.startsWith('14') && key !== 'DATA_ATUAL' && !key.includes('/2025')) {
            dadosFormatados[key] = dados[key];
        }
    });
    
    dataSummaryContent.innerHTML = `<pre>${JSON.stringify(dadosFormatados, null, 2)}</pre>`;
    
    // Configurar botão para baixar todos
    const downloadAllBtn = document.getElementById('download-all-btn');
    downloadAllBtn.onclick = function() {
        baixarTodosDocumentos(documentosGerados);
    };
    
    // Mostrar seção de resultados
    resultsSection.classList.remove('hidden');
    
    // Rolagem suave para resultados
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// Função para baixar um documento individual
function baixarDocumento(nomeArquivo, index) {
    const docCard = document.querySelectorAll('.document-card')[index];
    const conteudoCodificado = docCard.dataset.conteudo;
    const conteudo = decodeURIComponent(escape(atob(conteudoCodificado)));
    
    const blob = new Blob([conteudo], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = nomeArquivo;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    URL.revokeObjectURL(url);
}

// Função para baixar todos os documentos em um ZIP
function baixarTodosDocumentos(documentosGerados) {
    // Como JSZip não está disponível neste exemplo simples,
    // vamos oferecer para baixar o primeiro documento e informar sobre os outros
    if (Object.keys(documentosGerados).length > 0) {
        const primeiroDoc = Object.values(documentosGerados)[0];
        alert(`Para simplificação, baixando apenas "${primeiroDoc.nomeArquivo}".\n\nPara gerar um arquivo ZIP com todos os documentos, seria necessário uma biblioteca como JSZip.`);
        baixarDocumento(primeiroDoc.nomeArquivo, 0);
    }
}
