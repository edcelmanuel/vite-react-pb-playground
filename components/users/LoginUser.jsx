import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useStoreUsers } from "../../lib/useStore";

function LoginUser({ pb }) {
  const [value, setValue] = useState("");
  const [user, setUser] = useState(null);
  const zSetUser = useStoreUsers((s) => s.setUser);

  const Submit = async () => {
    const users = await pb.collection("xcoords").getFullList(200, {
      sort: "-created",
    });

    let isAlreadyCreated = false;

    for (let index = 0; index < users.length; index++) {
      const user = users[index];
      if (user.name.toUpperCase() === value.toUpperCase()) {
        console.log("Record Exists");
        isAlreadyCreated = true;
        setUser(user);
      }
    }

    if (!isAlreadyCreated) {
      const data = {
        name: value,
      };
      const record = await pb.collection("xcoords").create(data);
      setUser(record);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (user) {
        console.log("Loggin", user);
        zSetUser(user);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [user]);

  return (
    <div className="bg-white  rounded-md">
      <div>Login User</div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
      <div onClick={Submit} className="px-4 py-2 bg-blue-600 text-white">
        Submit
      </div>
    </div>
  );
}

export default LoginUser;
