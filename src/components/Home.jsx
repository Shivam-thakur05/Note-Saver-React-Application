import React from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes, updateToPastes } from "../redux/pasteSlice";


const Home = () => {
  const [title, setTitle] = React.useState("");
  const [value, setValue] = React.useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatchEvent = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);


  React.useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
        setTitle(paste.title);
        setValue(paste.content);
      }
  }, [pasteId]);
  
  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };
    if (pasteId) {
      dispatchEvent(updateToPastes(paste));
    } else {
      dispatchEvent(addToPastes(paste));
    }
    setTitle("");
    setValue("");
    setSearchParams({});
  }

  return (
    <div>
        <div className="flex flex-row gap-7 place-content-between">
      <input
        className="p-2 rounded-2xl mt-2 w-[66%] pl-3"
        type="text"
        placeholder="enter title here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={createPaste} className="p-2 rounded-2xl mt-2">
        {
            pasteId ? "Update Paste" : "Create my Paste"
        }
      </button>
    </div>
        <textarea
            className="p-2 rounded-2xl mt-2 w-[66%] pl-3"
            placeholder="enter your text here"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={20}
        />
    </div>
  );
};

export default Home;
