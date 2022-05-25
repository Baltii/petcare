import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../Firebase";
import { useNavigate } from "react-router-dom";
// import "./createPost.css";

function CreatePost({ isAuth }) {
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

  const usersCollectionRef = collection(db, "users");
  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const addUserDetails = async () => {
    await addDoc(usersCollectionRef, {
        age,
        phone,
        adress,
        city,
        zip,
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
     // navigate("/Login");

    }
  }, []);

  const au = async () => await auth.currentUser;
  console.log(au);
  return (
      <>
      
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Request</h1>
        <div className="inputGp">
          <label> Full Name</label>
          <input
          value={auth.currentUser}
            placeholder="Full Name"
            // onChange={(e) => {
            //   setTitle(e.target.value);
            // }}
          />
        </div>
        <div className="inputGp">
          <label> Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> Adress</label>
          <input
            type="text"
            value={adress}
            onChange={(e) => {
              setAdress(e.target.value);
            }}
          />
          </div>
          <div className="inputGp">
          <label> City</label>
          <input
            type="text"
            value={adress}
            onChange={(e) => {
              setAdress(e.target.value);
            }}
          />
          </div>
          <div className="inputGp">
          <label> Zip</label>
          <input
            type="number"
            value={zip}
            onChange={(e) => {
              setZip(e.target.value);
            }}
          />
          </div>
        <button onClick={addUserDetails}> Next </button>
      </div>
    </div>
    </>
  );
}

export default CreatePost;