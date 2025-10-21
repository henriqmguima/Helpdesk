// Dados de exemplo para os setores
const setores = [
    {
        id: 1,
        nome: "INFORMÁTICA",
        criadoEm: "2024-10-05",
        criadoPor: "Henrique Guimarães",
        codigoEntrada: "GABGILN25",
        imagemPerfil: "/Logo.png", // coloque uma imagem local depois
        chamados: [
            { id: 1, titulo: "Erro no sistema", descricao: "Usuário não consegue acessar a intranet." },
            { id: 2, titulo: "Atualização necessária", descricao: "Solicitação de atualização do antivírus." }
        ],
        perfis: [
            { id: 1, nome: "Carlos Silva" },
            { id: 2, nome: "Maria Souza" },
            { id: 3, nome: "João Pereira" } // esse aparecerá apenas no "Ver mais"
        ]
    },
    {
        id: 2,
        nome: "FINANCEIRO",
        criadoEm: "2024-09-28",
        criadoPor: "Ana Lima",
        codigoEntrada: "FNC244M7",
        imagemPerfil: "/imgs/perfil_financeiro.png",
        chamados: [
            { id: 1, titulo: "Planilha corrompida", descricao: "Erro ao abrir planilha de despesas." }
        ],
        perfis: [{ id: 1, nome: "Pedro Alves" }]
    }
];

export default setores;
