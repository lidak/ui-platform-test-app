import { PDP_SET_PRODUCT_ID } from './actions';



export default ({ router }) => {

  router.get('/sample', (req, res) => {
    res.json({
      product: {
        id: '123ah3b',
        title: 'Sample product'
      }
    });
  });



  /* GET users listing. */
  router.get('/:productId', function(req, res) {
    let { $app } = res;

    $app.store.dispatch({ type: PDP_SET_PRODUCT_ID, payload: { productId: req.params.productId }});

    res.renderApp({
      title: 'Product page',
      metaTags: [
        {
          name: 'version',
          content: '0.0.1',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        }
      ]
    });
  });
};