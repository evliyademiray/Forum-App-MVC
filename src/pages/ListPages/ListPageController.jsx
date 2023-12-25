import React, { useEffect, useState } from "react";
import ListPageView from "./ListPageView";
import Model from "./ListPageModel";

//Controller bileşiminde kullanıcı etkileşimi ile
//tetiklenen fonksiyonlar//state tutulur
const ListPageController = () => {
  const [posts, setPosts] = useState(null);
  const [isOpen, setIsOpen] = useState(null);

  //Useeffect ile de kullanıcı etkileşimini izlediğimiz
  //için controller'da tanımladık.

  useEffect(() => {
    Model.getPost().then((data) => setPosts(data));
  }, []);

  //Controller bileşeninde arayüz (jsx kodu) yazmayız
  //View bileşenini döndürürüz

  return <ListPageView isOpen={isOpen} setIsOpen={setIsOpen} posts={posts} />;
};

export default ListPageController;
