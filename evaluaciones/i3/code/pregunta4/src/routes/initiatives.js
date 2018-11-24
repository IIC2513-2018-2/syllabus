const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('/', async (ctx) => {
  ctx.body = [
    { id: 1, title: 'Commodo nisi esse ut eu proident sit fugiat excepteur excepteur', url: '/initiatives/1' },
    { id: 2, title: 'Id pariatur nostrud aliqua sint anim minim non deserunt nulla consectetur commodo', url: '/initiatives/2' },
    { id: 3, title: 'Sint tempor in dolore duis ad', url: '/initiatives/3' },
    { id: 4, title: 'Quis eiusmod culpa sint ea sit laboris labore minim', url: '/initiatives/4' },
    { id: 5, title: 'Non nulla culpa esse sit ipsum veniam amet', url: '/initiatives/5' },
    { id: 6, title: 'Ea laboris id amet pariatur labore sint officia consequat', url: '/initiatives/6' },
  ];
});

module.exports = router;
