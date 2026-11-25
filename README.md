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

## Análise de seguidores

Solicite no Instagram o download das informações de seguidores e seguindo em formato JSON. Selecione `followers_1.json` e `following.json` (normalmente dentro da pasta `connections/followers_and_following`).

- “Não seguem de volta” compara quem você segue com quem segue você.
- “Todos que você segue” permite pesquisar e revisar a lista completa.
- A seleção organiza a revisão; abra o perfil e confirme o unfollow manualmente no Instagram.
- Os arquivos são processados localmente no navegador e não são enviados a servidor algum.
- Não há automação de unfollow, login, scraping ou acesso a endpoints privados.
