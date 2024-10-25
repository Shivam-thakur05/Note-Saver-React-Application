import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";

const Paste = () => {
  const paste = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = paste.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (pasteId) => {
    dispatch(removeFromPastes(pasteId));
  };


  return (
    <div>
      <input
        className="p-2 rounded-2xl min-w-[660px] mt-5"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-col gap-5 mt-5">
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return (
              <div className="border" key={paste?._id}>
                <div>{paste.title}</div>
                <div>{paste.content}</div>
                <div className="flex-flex-row gap-4 place-content-evenly">
                  <button className="p-2 rounded-2xl mt-2">
                    <a href={`/?pasteId=${paste?._id}`}>
                    Edit
                    </a>
                  </button>
                  <button className="p-2 rounded-2xl mt-2">
                    <a href={`/pastes/${paste?._id}`}>
                    View
                    </a>
                    </button>
                  <button
                    className="p-2 rounded-2xl mt-2"
                    onClick={() => handleDelete(paste._id)}
                  >
                    Delete
                  </button>
                  <button className="p-2 rounded-2xl mt-2" onClick={() => {
                    navigator.clipboard.writeText(paste?.content);
                    toast.success("Copied to clipboard");
                  }}>
                    Copy
                  </button>
                  <button className="p-2 rounded-2xl mt-2">Share</button>
                </div>
                <div>
                  <span>Created At: {paste.createdAt}</span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Paste;
