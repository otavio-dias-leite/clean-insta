# Clean Insta

Painel estático em português para organizar a limpeza das curtidas e dos comentários de uma conta do Instagram.

## Executar localmente

Abra `index.html` no navegador ou sirva a pasta:

```bash
python3 -m http.server 8000
```

Acesse http://localhost:8000.

## Segurança e limitações

- O projeto **não coleta login, senha, cookies ou tokens**.
- O login acontece exclusivamente em `https://www.instagram.com/`.
- Os atalhos levam às áreas de interações do Instagram.
- A remoção deve ser selecionada e confirmada pelo titular da conta dentro do Instagram.
- O checklist é armazenado apenas no `localStorage` do navegador.
- Não usa API privada, scraping, automação de cliques ou mecanismos para contornar limites da plataforma.

O Instagram não oferece uma API pública geral para remover em massa todas as curtidas e comentários pessoais. Por isso, este painel organiza o fluxo sem prometer uma automação que possa comprometer a conta.
