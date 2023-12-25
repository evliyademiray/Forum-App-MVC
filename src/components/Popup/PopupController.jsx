import React, { useEffect, useState } from "react";
import PopupView from "./PopupView";
import Model from "./PopupModel";

const PopupController = ({ isOpen, setIsOpen }) => {
  const [posts, setPosts] = useState(null);

  //Model açıldığında kullanıcının gönderilerini alır
  useEffect(() => {
    Model.getUserPosts(isOpen).then((data) => setPosts(data));
  }, []);
  return <PopupView posts={posts} isOpen={isOpen} setIsOpen={setIsOpen} />;
};

export default PopupController;
