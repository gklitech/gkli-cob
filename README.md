# gkli-cob

Página simples de login conectada ao Supabase Auth.

## Desenvolver localmente

Todo o desenvolvimento acontece primeiro na pasta local. Revise e valide as alterações no computador antes de criar um commit e enviá-lo ao GitHub. A publicação na Vercel acontece somente depois do envio revisado ao GitHub.

1. Instale as dependências com `npm install`.
2. Crie um arquivo `.env` a partir de `.env.example` e preencha `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY` com os valores do projeto Supabase.
3. Inicie o servidor local com `npm run dev` e abra a URL indicada no terminal.
4. Faça login com uma conta já cadastrada no Supabase Auth. O cadastro de usuários é administrado no painel Supabase.
5. Gere a versão estática com `npm run build`.

O cliente usa somente a chave publicável do Supabase no navegador. Nunca coloque uma chave `secret`, `service_role` ou a senha do banco nas variáveis `VITE_*`, no código ou no GitHub.

## Enviar e publicar

Depois de validar localmente, revise `git status` e `git diff`, crie o commit local e envie a branch `main` para `origin`. A Vercel está configurada para receber o repositório GitHub e publicar depois que o código estiver no remoto.

Configure `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY` nas variáveis da Vercel para Production, Preview e Development. Se alterar essas variáveis, gere um novo deploy.

## Supabase CLI

O CLI está instalado como dependência de desenvolvimento e a configuração local está em `supabase/`:

```sh
npx supabase login
npx supabase link --project-ref rtqppdhcyxwctorvcruh
```

O token do CLI fica no armazenamento local da máquina; não o adicione ao repositório.
