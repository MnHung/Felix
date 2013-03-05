using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Bson;

namespace Felix.Models
{
	/// <summary>
	/// 訂單 fix-form, fix-order
	/// 
	/// 重點應該有下列資訊：訂單、客戶、物件(車)。TODO: 或許可以將這些資訊分開為獨立 class，甚至獨立資料表
	/// </summary>
	public class FixOrder
	{
		// order part
		public ObjectId _id;
		public int Number;
		public string Name;
		public string CreateTime;

		// Client
		public string Client;

		// Car
		public string CarNumber;

		public FixOrder(BsonDocument map)
		{
			this._id = (ObjectId)map["_id"];
			this.Number = (int)map["Number"];
			this.Name = (string)map["name"];
			this.CreateTime = map["CreateTime"].ToString();
			//...
		}
	}
}