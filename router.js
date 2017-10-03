function route(handle,pathname) {
  console.log("About to route a request for " + pathname);
if(typeof handle[pathname] === 'function'){
    return handle[pathname]();

}else {
  console.log("no request handler found " +pathname);
   return "404 Not found";
}
}
exports.route = route;
