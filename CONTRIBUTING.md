# Guia de Contribuição

Obrigado por considerar contribuir para o projeto **Meu Direito Previdenciário**! Este documento fornece diretrizes e instruções para contribuir de forma efetiva.

## 📋 Código de Conduta

Ao participar deste projeto, você concorda em manter um ambiente respeitoso e inclusivo para todos os contribuidores.

## 🐛 Reportando Bugs

Se você encontrar um bug, por favor crie uma issue descrevendo:

- **Descrição clara**: O que é o bug?
- **Passos para reproduzir**: Como reproduzir o problema?
- **Comportamento esperado**: O que deveria acontecer?
- **Comportamento atual**: O que está acontecendo?
- **Screenshots**: Se aplicável, inclua capturas de tela
- **Ambiente**: Navegador, SO, versão do Node.js

## 💡 Sugerindo Melhorias

Sugestões de melhorias são bem-vindas! Por favor:

1. Use um título claro e descritivo
2. Forneça uma descrição detalhada da melhoria sugerida
3. Liste exemplos de como a melhoria seria útil
4. Explique por que essa melhoria seria útil para a maioria dos usuários

## 🔄 Processo de Contribuição

### 1. Fork o Repositório

```bash
git clone https://github.com/seu-usuario/meu-direito-previdenciario.git
cd meu-direito-previdenciario
```

### 2. Crie uma Branch

```bash
git checkout -b feature/sua-feature
# ou
git checkout -b fix/seu-bugfix
```

Use nomes descritivos para suas branches:
- `feature/nova-secao` para novas funcionalidades
- `fix/corrigir-typo` para correções de bugs
- `docs/atualizar-readme` para documentação

### 3. Faça suas Alterações

- Mantenha o código limpo e bem formatado
- Siga o estilo de código existente
- Adicione comentários quando necessário
- Atualize a documentação conforme necessário

### 4. Teste suas Alterações

```bash
pnpm dev        # Teste localmente
pnpm build      # Verifique se o build passa
pnpm check      # Verifique tipos TypeScript
pnpm format     # Formate o código
```

### 5. Commit suas Alterações

```bash
git add .
git commit -m "feat: descrição clara da mudança"
```

Use mensagens de commit convencionais:
- `feat:` para novas funcionalidades
- `fix:` para correções de bugs
- `docs:` para mudanças na documentação
- `style:` para formatação
- `refactor:` para refatoração de código
- `test:` para testes

### 6. Push para sua Fork

```bash
git push origin feature/sua-feature
```

### 7. Abra um Pull Request

1. Vá para o repositório original
2. Clique em "New Pull Request"
3. Selecione sua branch
4. Forneça uma descrição clara das mudanças
5. Aguarde revisão

## 📝 Padrões de Código

### React/TypeScript

- Use componentes funcionais com hooks
- Prefira `const` sobre `let` ou `var`
- Adicione tipos TypeScript apropriados
- Use nomes descritivos para variáveis e funções

### Styling

- Use Tailwind CSS para estilização
- Mantenha a paleta de cores consistente
- Use classes reutilizáveis
- Evite CSS inline quando possível

### Componentes

- Mantenha componentes pequenos e focados
- Reutilize componentes existentes
- Documente props complexas
- Adicione comentários para lógica complexa

## 🎨 Atualizando Conteúdo

Se você está atualizando informações sobre benefícios ou requisitos:

1. **Verifique fontes oficiais**: Use apenas fontes confiáveis (INSS, Governo Federal)
2. **Inclua a data**: Indique quando a informação foi atualizada
3. **Cite a fonte**: Adicione um comentário com o link da fonte
4. **Teste completamente**: Verifique se a mudança não quebra o layout

## 📚 Documentação

Se você adicionar uma nova funcionalidade:

1. Atualize o `README.md` se necessário
2. Adicione comentários no código
3. Atualize a seção relevante da documentação

## 🚀 Processo de Review

- Um mantenedor revisará seu PR
- Podem ser solicitadas mudanças
- Uma vez aprovado, seu PR será mergeado
- Você será creditado como contribuidor

## ❓ Dúvidas?

Se tiver dúvidas sobre como contribuir:

1. Verifique as issues existentes
2. Leia a documentação do projeto
3. Abra uma issue para discussão

## 📄 Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a mesma licença do projeto.

---

Obrigado por contribuir! 🙌
