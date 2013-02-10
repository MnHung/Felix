using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Felix.Controllers
{
    public class FelixController : Controller
    {
        //
        // GET: /Felix/

        public ActionResult Index()
        {
			var mongoServerSettings = new MongoDB.Driver.MongoServerSettings();
			mongoServerSettings.Server = new MongoDB.Driver.MongoServerAddress("mongodb://appharbor:f588ecfeb40e49682055a3a75b002e9b@linus.mongohq.com:10061/238c698d_a07f_425c_a07d_155064079ba8");

			var mongoServer = new MongoDB.Driver.MongoServer(mongoServerSettings);
			mongoServer.Connect();
            return View();
        }

        //
        // GET: /Felix/Details/5

        public ActionResult Details(int id)
        {
            return View();
        }

        //
        // GET: /Felix/Create

        public ActionResult Create()
        {
            return View();
        } 

        //
        // POST: /Felix/Create

        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
        
        //
        // GET: /Felix/Edit/5
 
        public ActionResult Edit(int id)
        {
            return View();
        }

        //
        // POST: /Felix/Edit/5

        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here
 
                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        //
        // GET: /Felix/Delete/5
 
        public ActionResult Delete(int id)
        {
            return View();
        }

        //
        // POST: /Felix/Delete/5

        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here
 
                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
