import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const ViewPaste = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.filter((p) => p._id === id)[0];

  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between">
        <input
          className="p-2 rounded-2xl mt-2 w-[66%] pl-3"
          type="text"
          placeholder="enter title here"
          value={paste.title}
          disabled
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* <button onClick={createPaste} className="p-2 rounded-2xl mt-2">
        {
            pasteId ? "Update Paste" : "Create my Paste"
        }
      </button> */}
      </div>
      <textarea
        className="p-2 rounded-2xl mt-2 w-[66%] pl-3"
        placeholder="enter your text here"
        value={paste.content}
        disabled
        onChange={(e) => setValue(e.target.value)}
        rows={20}
      />
    </div>
  );
};

export default ViewPaste;
