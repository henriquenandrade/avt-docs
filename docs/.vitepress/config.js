export default {
  title: "Avt-docs",
  description: "Documentação do projeto Avt",
  themeConfig: {
    search: {
      provider: 'local',
    },
    siteTitle: "Avt-docs",
    nav: [
      { text: "Inicio", link: "/" },
      { text: "Comando SQL", link: "/code-sql" },
      { text: "Impressoras", link: "/printers" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/Evavic44/adocs" },
      { icon: "instagram", link: "https://twitter.com/victorekea" },
      { icon: "linkedin", link: "", target: "_blank" },
    ],
    sidebar: {
      '/code-sql/': [
        {
          text: 'Comandos SQL HOST',
          collapsed: false,
          items: [
            { text: 'Clientes', link: '/code-sql/clientes.md' },
            { text: 'DAV', link: '/code-sql/dav.md' },
            { text: 'NFE', link: '/code-sql/nfe.md' },
            { text: 'NFCE', link: '/code-sql/nfce.md' },
            { text: 'Contas à receber', link: '/code-sql/contas-receber.md' },
            { text: 'Contas à pagar', link: '/code-sql/contas-pagar.md' },
            { text: 'Produtos', link: '/code-sql/produtos.md' },
            { text: 'Transferências', link: '/code-sql/transferencias.md' },
            { text: 'Usuários', link: '/code-sql/usuarios.md' },
            { text: 'Vendas', link: '/code-sql/vendas.md' },
          ]
        },
        {
          text: 'Links uteis',
          collapsed: false,
          items: [
            { text: 'Introdução', link: '/code-slq/' },
            { text: 'Clientes', link: '/code-sql/clientes.md' },
          ]
        },
      ],
      '/printers/': [
        {
          text: 'Impressoras de Cupom',
          items: [
            { text: 'Index', link: '/guide/' },
            { text: 'One', link: '/guide/one' },
            { text: 'Two', link: '/guide/two' }
          ]
        },
      ],
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Avt-docs",
    },
  }
};