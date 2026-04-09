# Meu Direito Previdenciário

Um site informativo e moderno sobre direitos previdenciários no Brasil, desenvolvido como projeto de extensão universitária. O site oferece informações claras e acessíveis sobre aposentadorias, benefícios do INSS, como contribuir e como solicitar benefícios.

## 🎯 Objetivo

Democratizar o conhecimento sobre a Previdência Social brasileira, tornando informações complexas acessíveis e compreensíveis para todos os cidadãos. O projeto segue a filosofia de **Modernismo Institucional com Humanidade**, combinando design profissional com elementos visuais acolhedores.

## ✨ Características

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Navegação Intuitiva**: Menu sticky com acesso rápido às seções principais
- **Informações Atualizadas**: Dados de 2026 sobre benefícios, requisitos e valores
- **Acessibilidade**: Tipografia legível, contraste adequado e navegação clara
- **Componentes Reutilizáveis**: Construído com React e Tailwind CSS para fácil manutenção

## 📋 Conteúdo

O site cobre os seguintes tópicos:

- **Quem tem direito à Previdência**: Categorias de segurados (empregado, autônomo, rural, etc.)
- **Como contribuir**: Informações sobre MEI, autônomos e trabalhadores rurais
- **Benefícios**: Tabela completa com aposentadorias, auxílios e pensões
- **Aposentadoria Especial**: Conversão de tempo e requisitos especiais
- **BPC/LOAS**: Benefício assistencial para quem nunca contribuiu
- **Como pedir**: Canais digitais (Meu INSS, telefone 135, CRAS)
- **Perguntas Frequentes**: Respostas diretas e simples

## 🛠️ Stack Tecnológico

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4
- **Roteamento**: Wouter
- **UI Components**: shadcn/ui
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 📁 Estrutura do Projeto

```
meu-direito-previdenciario/
├── client/                    # Frontend React
│   ├── index.html            # HTML principal
│   ├── public/               # Arquivos estáticos
│   └── src/
│       ├── pages/            # Componentes de página
│       ├── components/       # Componentes reutilizáveis
│       ├── contexts/         # React contexts
│       ├── hooks/            # Custom hooks
│       ├── lib/              # Utilitários
│       ├── App.tsx           # Componente raiz
│       ├── main.tsx          # Entry point
│       └── index.css         # Estilos globais
├── server/                   # Backend (Express)
├── shared/                   # Código compartilhado
├── package.json              # Dependências
├── vite.config.ts            # Configuração Vite
├── tsconfig.json             # Configuração TypeScript
├── ideas.md                  # Filosofia de design
└── README.md                 # Este arquivo
```

## 🚀 Como Começar

### Pré-requisitos

- Node.js 18+
- pnpm 10+

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/meu-direito-previdenciario.git
cd meu-direito-previdenciario
```

2. Instale as dependências:
```bash
pnpm install
```

3. Inicie o servidor de desenvolvimento:
```bash
pnpm dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

### Scripts Disponíveis

- `pnpm dev` - Inicia o servidor de desenvolvimento
- `pnpm build` - Cria build de produção
- `pnpm preview` - Visualiza o build de produção localmente
- `pnpm check` - Verifica tipos TypeScript
- `pnpm format` - Formata código com Prettier

## 🎨 Design

O site segue a filosofia de **Modernismo Institucional com Humanidade**:

- **Paleta de Cores**: Azul profundo (#0a4d8c) + Laranja vibrante (#ff8c42)
- **Tipografia**: Segoe UI para legibilidade máxima
- **Layout**: Cards com bordas coloridas, navegação sticky, espaçamento generoso
- **Interatividade**: Transições suaves, hover effects, scroll comportado

Veja `ideas.md` para detalhes completos sobre as decisões de design.

## 📊 Informações Atualizadas (2026)

- **Aposentadoria por Idade**: Mulheres 62 anos, Homens 65 anos
- **Salário Mínimo**: R$ 1.621,00
- **Auxílio-reclusão**: Até R$ 1.621,00
- **Teto do INSS**: R$ 8.475,55

Todas as informações são baseadas em fontes oficiais da Previdência Social.

## 👥 Autores

**Professora Orientadora:**
- Ana Paula Lima Cardoso da Silveira

**Alunos:**
- Jamile dos Santos Porto
- Breno Silva Teixeira
- Nathali Souza Silva
- Romilson Reian N. E Nogueira
- Lourrane Nogueira

## 📝 Licença

Este projeto é um trabalho educacional de extensão universitária. Sinta-se livre para usar, modificar e distribuir conforme necessário.

## 🔗 Links Úteis

- [Meu INSS](https://meu.inss.gov.br) - Portal oficial do INSS
- [Portal do Empreendedor](https://www.portaldoempreendedor.gov.br) - Para MEI
- [Central INSS](tel:135) - Telefone 135

## 📞 Contato

Para dúvidas ou sugestões sobre o site, entre em contato com a equipe de desenvolvimento.

---

**Nota**: Este site é informativo. Para casos concretos e orientação jurídica, consulte um advogado ou procure o INSS diretamente.
