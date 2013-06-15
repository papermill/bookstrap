// functions
var DEBUG = false,

    URLparams = {
        
      'rParse': function (SearchStr) {
        
        if (!this.parsed) {
        	var params = {}, // will be returned
              opts = SearchStr || window.location.search; // "?debug=true&fun"
    
          opts = opts.substr(1).split('&') // ["debug=true", "fun"]
    
          opts.forEach(function (str) {
            var optArr = str.split('=');
            // params.push({ (optArr[0]): (optArr[1])});
            if (optArr[1] === undefined || optArr[1] === "true" || optArr[1] === "yes" || optArr[1] === "y" ) {
              optArr[1] = true;
            }
            if (optArr[1] === "false" || optArr[1] === "no" || optArr[1] === "n" ) {
              optArr[1] = false;
            }
            params[optArr[0]] = optArr[1];
      
          }); // 
    
          return params;
        }
      },

      'apply': function () {
    
        var params = this.rParse();
  
        console.log('parameters: ', params);
  
        // debug
        if (params.debug === true) {
          window.DEBUG=true;
          console.log("Debug!");
          $('body').addClass('debug');
        }
    
        // fun
        if (params.fun === true) {
          window.FUN=true;
          console.log("Fun!");
          $('body').addClass('fun');
        }
    
      }
},

util = {};

util.debug = function (str, obj) {
  if (DEBUG) {
    console.log(str.toString(), obj)
  }
}

util.TOC = function () {
  
  $('.navbar ul.nav').append($('<ul id="TOC-navbar"></ul>'));
  $('#TOC-navbar').append($('#TOC ul')[0].children).addClass('dropdown-menu');
  
}

// hacks
var hacks = {
  
  // fix ID's ending with a dot
  'fixIDsAndHrefs': function () {
    
    var ids = [], hrefs = [],
        regex = /^([\w|\.|\-]+)(\.)$/;
    
    // jquery: loop over all elements with an 'id' property
    $('[id]').each(function() {
      // … adding them to a list of id strings.
      ids.push(($(this).attr('id')).toString());
    });
    
    hrefs = Array.prototype.slice.call(document.querySelectorAll('a'));

    // console.log('ids:', ids);
    
    // check for bad strings
    ids.forEach(function (id) {
      
      // is last character a "." ?
      if (regex.test(id)) {
        
        // remove the trailing dot (last char)
        var fixedid = id.replace(regex, '$1');
        
        util.debug("fixed:", fixedid);
        
        // DOM: get the el with the bad id, set new id
        // jquery: get the el, set attr
        $(document.getElementById(id)).attr('id', fixedid);
        
        // also fix any hrefs with that value
        hrefs.forEach(function (href) {

          if (href.getAttribute('href') === '#' + id) {
            href.setAttribute('href', '#' + fixedid);
            util.debug("fixed href:", '#' + fixedid);
          }
          
        });
      }

    });
    
    util.debug('fixIDsAndHrefs(): done');
    
  }
  
}
  
// loading
function startup () {
  
  URLparams.apply();
  
  hacks.fixIDsAndHrefs();
  
  // activate bootstrap's scrollspy
  $('#TOC').scrollspy();
  
  // util.TOC();
  
};

$(document).ready(startup)