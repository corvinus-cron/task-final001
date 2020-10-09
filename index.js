require('http')
.Server((req, res) => {
  
  const CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers'
};
  res.writeHead(200, CORS);
  if (req.url === '/v8') return res.end(process.versions.v8);
  if (req.url === '/package.json') return require('fs').createReadStream('./package.json').pipe(res);
  if (req.url === '/login') return res.end('Alexandr Lazarenko');
  if (req.url === '/day') return res.end(process.date);
  
  res.end('Alexandr Lazarenko');
})
.listen(process.env.PORT);
