import React from "react";
import PopupController from "../../components/Popup/PopupController";

const ListPageView = ({ posts, setIsOpen, isOpen }) => {
  return (
    <main className="container-sm px-5 py-5 md:px-40 lg:px-52">
      <h1>
        Gönderi Sayısı: <span className="font-bold">{posts?.length}</span>
      </h1>
      {!posts ? (
        <p>Yükleniyor</p>
      ) : (
        posts.map((post) => (
          <div
            className="bg-black w-full my-5 p-5 rounded-md shadow shadow-[#ffffff38] cursor-pointer hover:shadow-yellow-300"
            key={post.id}
          >
            <div className="flex justify-between">
              <h3>{post.title}</h3>
              <p
                onClick={() => setIsOpen(post.user)}
                className="text-yellow-500"
              >
                {post.user}
              </p>
            </div>
            <p className="mt-4 text-slate-300">{post.text}</p>
          </div>
        ))
      )}
      {isOpen && <PopupController isOpen={isOpen} setIsOpen={setIsOpen} />}
    </main>
  );
};

export default ListPageView;
