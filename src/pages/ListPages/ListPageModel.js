import axios from "axios";

//Veri ile alakalı her türlü yapıyı model'de tanımlarız
//model oluştururken genelde class'ları tercih ederiz
export default class ListPageModel {

  //API'dan post verilerini alıp fonksiyonun çağrıldığı yere gönderir
  static async getPost() {
    const res = await axios.get("http://localhost:3333/posts");
    return res.data;
  }
}

const model = new ListPageModel();
ListPageModel.getPost();
