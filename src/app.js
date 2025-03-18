

const expressHandlebars = require('express-handlebars');
const express = require("express");
const path = require("path");
require("./db/conn");
const app = express();


const port = process.env.PORT || 3001;

//setting the path
const staticpath = path.join(__dirname,"../public");
const templatepath = path.join(__dirname,"../templates/views");
const partialpath = path.join(__dirname,"../templates/partials");
const layoutsDir = path.join(__dirname,"../templates/views/layouts");

//middleware middle
app.use('/css', express.static(path.join(__dirname, '../node_modules/animate.css')));
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.use(express.static(staticpath));

const hbs =expressHandlebars.create({
    partialsDir:partialpath,
    layoutsDir:layoutsDir,
    extname:'hbs',
    defaultLayout:'main',
});


// app.engine('hbs', expressHbs({defaultLayout:'layout',extname: '.hbs'}));
 app.engine('hbs',hbs.engine);
//set view engine
app.set("view engine","hbs");
//set view directory
app.set('views',templatepath);



//routing
//app.get(path,callback)
  app.get("/",(req, res) => {
    res.render("index");
        //   res.render(__dirname + "/templates/views/index.hbs");
     });

  app.get("/whatsappads",(req, res) => {
    res.render("whatsappads");
    });

  app.get("/catalog",(req, res) => {
    res.render("catalog");
     });

  app.get("/shared",(req, res) => {
    res.render("shared");
  });

  app.get("/broadcast",(req, res) => {
     res.render("broadcast");
     });

  app.get("/notifications",(req, res) => {
     res.render("notifications");
    });

  app.get("/nocode",(req, res) => {
  res.render("nocode");
   });

  app.get("/education",(req, res) => {
   res.render("education");
   });

  app.get("/marketing",(req, res) => {
   res.render("marketing");
  });
  app.get("/sales",(req, res) => {
   res.render("sales");
   });
     
  app.get("/mt",(req, res) => {
   res.render("mt");
   });
  app.get("/support",(req, res) => {
   res.render("support");
   });
  app.get("/ecommerce",(req, res) => {
  res.render("ecommerce");
  });
  app.get("/healthcare",(req, res) => {
  res.render("healthcare");
  });
  app.get("/crm",(req, res) => {
  res.render("crm");
  });
  app.get("/shopify",(req, res) => {
  res.render("shopify");
  });
  app.get("/woocommerce",(req, res) => {
    res.render("woocommerce");
    });
 app.get("/zapier",(req, res) => {
      res.render("zapier");
      });
 app.get("/hubspot",(req, res) => {
        res.render("hubspot");
        });
   app.get("/pabbly",(req, res) => {
          res.render("pabbly");
          });
          app.get("/integromat",(req, res) => {
            res.render("integromat");
            });
            app.get("/shop",(req, res) => {
              res.render("shop");
              });
              app.get("/backup",(req, res) => {
                res.render("backup");
                });
                app.get("/googlesheet",(req, res) => {
                  res.render("googlesheet");
                  });
                  app.get("/klaviyo",(req, res) => {
                    res.render("klaviyo");
                    });
app.get("/flow",(req, res) => {
                      res.render("flow");
                      });

app.get("/affiliate",(req, res) => {
                        res.render("affiliate");
                        });
app.get("/partner",(req, res) => {
                          res.render("partner");
                          });
                          app.get("/Watipedia",(req, res) => {
                            res.render("Watipedia");
                            });
                            app.get("/branding",(req, res) => {
                              res.render("branding");
                              });

                              app.get("/library",(req, res) => {
                                res.render("library");
                                });
      
                                app.get("/templates",(req, res) => {
                                  res.render("templates");
                                  });
                                  app.get("/stories",(req, res) => {
                                    res.render("stories");
                                    });
        
                                    app.get("/ebooks",(req, res) => {
                                      res.render("ebooks");
                                      });
                                      app.get("/whatsappapi",(req, res) => {
                                        res.render("whatsappapi");
                                        });
          

    

//server create
app.listen(port,() => {
    console.log(`server is running at port no ${port}`);
    });