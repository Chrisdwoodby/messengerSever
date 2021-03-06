// /*************************************************************
var utils = require('./utils');

var objectIdCounter = 1;
var messages = [
  // Note: an initial message is useful for debugging purposes.
  /*
  // {
    text: 'hello world',
    username: 'fred',
    objectId: objectIdCounter
  // }
  */
];

var actions = {
  'GET': function(request, response) {
    utils.sendResponse(response, {results: messages});
  },
  'POST': function(request, response) {
    utils.collectData(request, function(message) {
      message.objectId = ++objectIdCounter;
      messages.push(message);
      utils.sendResponse(response, {objectId: message.objectId}, 201);
    });
  },
  'OPTIONS': function(request, response) {
    utils.sendResponse(response, null);
  }
};

exports.requestHandler = utils.makeActionHandler(actions);












// You should implement your request handler function in this file.

// requestHandler is already getting passed to http.createServer()
// in basic-server.js, but it won't work as is.

// You'll have to figure out a way to export this function from
// this file and include it in basic-server.js so that it actually works.

// *Hint* Check out the node module documentation at http://nodejs.org/api/modules.html.

// **************************************************************/
// //-------------------------------------------------------------------------------------------------------
// // Request and Response come from node's http module.
// //
// // They include information about both the incoming request, such as
// // headers and URL, and about the outgoing response, such as its status
// // and content.
// //
// // Documentation for both request and response can be found in the HTTP section at
// // http://nodejs.org/documentation/api/

// // Do some basic logging.
// //
// // Adding more logging to your server can be an easy way to get passive
// // debugging help, but you should always be careful about leaving stray
// // console.logs in your code.
// var defaultCorsHeaders = {
//   'access-control-allow-origin': '*',
//   'access-control-a200llow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'access-control-allow-headers': 'content-type, accept',
//   'access-control-max-age': 10 // Seconds.
// };
// var requestHandler = function(request, response) {

//   console.log('Serving request type ' + request.method + ' for url ' + request.url);

//   // The outgoing status.
//   var statusCode = 200;
//   // See the note below about CORS headers.
//   var headers = defaultCorsHeaders;
//   // Tell the client we are sending them plain text.
//   // You will need to change this if you are sending something
//   // other than plain text, like JSON or HTML.
//   headers['Content-Type'] = 'application/json';
//   var messages = [];
//   // .writeHead() writes to the request line and headers of the response,
//   // which includes the status and all headers.
//   var url = url.parse(request.url).pathname
//   if (request.url === '/classes/messages') {

//     if (request.method === 'GET') {
//       response.writeHead(statusCode, headers);
//       response.end(JSON.stringify({
//         results: messages
//       }));

//     } else if (request.method === 'POST') {
//       data = '';
//       request.on('data', function(chunk) {
//         data += chunk.toString();
//       });
//       request.on('end', function() {
//         var message = JSON.parse(data);
//         message.objectId = messages.length;
//         messages.push(message);
//         response.writeHead(201, headers);
//         response.end(JSON.stringify(message));
//       });
//     } else if (request.method === 'OPTIONS') {
//       response.writeHead(statusCode, headers);
//       response.end();
//     }
//   } else {
//     response.writeHead(404, headers);
//     response.end('nonexistent file');
//   }
// };

// // Make sure to always call response.end() ----------------------------------------------------------------------


// // - Node may not send anything back to the client until you do. The string you pass to
// // response.end() will be the body of the response - i.e. what shows
// // up in the browser.
// //
// // Calling .end "flushes" the response's internal buffer, forcing
// // node to actually send all the data over to the client.
// // response.end('Hello, World!');


// // These headers will allow Cross-Origin Resource Sharing (CORS).
// // This code allows this server to talk to websites that
// // are on different domains, for instance, your chat client.
// //
// // Your chat client is running from a url like file://your/chat/client/index.html,
// // which is considered a different domain.
// //
// // Another way to get around this restriction is to serve you chat
// // client from this domain by setting up static file serving.


// exports.requestHandler = requestHandler;
