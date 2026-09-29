export default () => ({
  type: 'admin',
  routes: [
    {
      method: 'GET',
      path: '/collections',
      handler: 'controller.getAllCollections',
      config: {
        policies: [],
      },
    },
  ],
});
