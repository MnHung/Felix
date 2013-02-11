using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;

namespace Felix.Models
{
	public class FelixRepository
	{
		private MongoClient client;
		private MongoServer server;
		private MongoDatabase db;

		public FelixRepository()
		{ 
			ConnectDB();
		}

		public void ConnectDB()
		{
			string connectionString = "mongodb://appharbor:f588ecfeb40e49682055a3a75b002e9b@linus.mongohq.com:10061/238c698d_a07f_425c_a07d_155064079ba8";
			client = new MongoClient(connectionString);
			server = client.GetServer();
			db = server.GetDatabase("238c698d_a07f_425c_a07d_155064079ba8");
		}

		public string GetAll()
		{
			var collection = db.GetCollection("felix");
			var all = collection.FindAll();
			return all.ToJson();
		}

		//TODO: add, delete, edit. (and save?)
	}
}