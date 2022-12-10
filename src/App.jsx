import { useEffect } from "react";
import Maps from "../components/map/Maps";
import PocketBase from "pocketbase";
import LoginUser from "../components/users/LoginUser";

function App() {
  const pb = new PocketBase("http://127.0.0.1:8090");

  useEffect(() => {
    const fetch = async () => {
      const records = await pb.collection("xcoords").getFullList(200, {
        sort: "-created",
      });
      console.log(records);
    };
    fetch();
  }, [pb]);

  return (
    <div className="bg-gray-900 h-screen w-screen">
      <div className="relative ">
        <div className="absolute top-32 left-10 z-[1000000] bg-white text-black p-6 rounded-lg">
          <LoginUser pb={pb} />
        </div>
        <Maps />
      </div>
    </div>
  );
}

export default App;
