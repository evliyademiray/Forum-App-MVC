import AddPageView from "./AddPageView";
import Model from "./AddPageModel";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { toast } from "react-toastify";

const AddPageController = () => {
  const navigate = useNavigate();

  //Form gönderilince çalışır
  const handleSubmit = (e) => {
    e.preventDefault();
    //1-inputlardaki verileri alıp bir post objesi oluştur
    const form = new FormData(e.target);
    const newPost = Object.fromEntries(form.entries());
    newPost.id = v4();

    //2- API'a veriyi kaydeder
    Model.createPost(newPost)
      .then(() => {
        toast.success("Postunuz gönderildi");
        navigate("/");
      })
      //Hata bildirimi
      .catch(() => {
        toast.error("Hata oluştu");
      });

    //3- Anasayfaya yönlendir
  };
  return <AddPageView handleSubmit={handleSubmit} />;
};

export default AddPageController;
