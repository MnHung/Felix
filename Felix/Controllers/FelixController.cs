using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Felix.Models;

namespace Felix.Controllers
{
    public class FelixController : Controller
    {
        //
        // GET: /Felix/

        public ActionResult Index()
        {
            return View();
        }

		public ActionResult test()
		{
			var felixRep = new FelixRepository();
			string result;
			try
			{
				result = felixRep.GetAll();
			}
			catch (Exception ex)
			{
				result = ex.ToString();
			}
			return Json(result, JsonRequestBehavior.AllowGet);
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
