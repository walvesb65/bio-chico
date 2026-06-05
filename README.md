# BioChico

Front-end mobile-first para um aplicativo de biodiversidade vegetal. Nesta etapa o projeto usa dados mockados, navegação completa e estado local para simular favoritos, cadastro, login e registros de observações.

## Stack

- React.js + TypeScript
- Vite
- React Router DOM
- CSS Modules
- Axios preparado para integração futura com API Node.js
- lucide-react para ícones

## Como rodar

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

## Telas implementadas

- Splash / boas-vindas
- Login, cadastro e recuperar senha com fluxo fake
- Home com busca rápida, atalhos, planta em destaque e últimas observações
- Explorar plantas com busca, filtro por categoria e cards
- Detalhes da planta com favoritar/desfavoritar
- Identificar planta com upload visual e resultado futuro
- Registrar observação com formulário e upload visual
- Minhas observações e detalhe da observação
- Favoritas
- Conteúdos educativos e detalhe do conteúdo
- Perfil e configurações

## Estrutura

```txt
src/
  app/
    providers/
    routes/
  components/
  features/
    auth/
    education/
    favorites/
    home/
    identify/
    observations/
    plants/
    profile/
    splash/
  services/
  styles/
  utils/
```

O arquivo `src/services/api.ts` centraliza a instância do Axios. Para conectar com uma API real depois, defina `VITE_API_URL` no ambiente.
