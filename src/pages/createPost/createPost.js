import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth, storage } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import "./createPost.css";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useAuthState } from "react-firebase-hooks/auth";
import { async } from "@firebase/util";

const CreatePost = () => {
  const [data, setData] = useState("");
  const {fullName, age, phone, adress, city, zip} = data;
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const user = useAuthState(auth);

  useEffect(() => {
    const uploadFile = () => {
    const storageRef = ref(storage, `${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgress(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setData((prev) => ({...prev, img: downloadURL}));
        });
      }
    );
    };
    image && uploadFile()
  },[image])

  const handleChange = async (e) => {
    setData({...data, [e.target.name]: e.target.value});

};

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "annonce"), {
      ...data
    });
    
      
  };



  return (
      <>
    <form onSubmit={handleSubmit} className='form'>
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Request</h1>
        <div className="inputGp">
          <label> Image</label>
          <input
          type="file"
          label="Upload"
          onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="inputGp">
          <label> Full Name</label>
          <input
            name="fullName"
            value={fullName}
            onChange={handleChange}
          />
        </div>
        <div className="inputGp">
          <label> Age</label>
          <input

            name="age"
            type="number"
            value={age}
            onChange={handleChange}
            
          />
        </div>
        <div className="inputGp">
          <label> phone</label>
          <input
            name="phone"
            type="text"
            value={phone}
            onChange={handleChange}
            
          />
        </div>
        <div className="inputGp">
          <label> Adress</label>
          <input
            name="adress"
            type="text"
            value={adress}
            onChange={handleChange}
            
          />
          </div>
          <div className="inputGp">
          <label> City</label>
          <input
            name="city"
            type="text"
            value={city}
            onChange={handleChange}
          />
          </div>
          <div className="inputGp">
          <label> Zip</label>
          <input
            type="number"
            name="zip"
            value={zip}
            onChange={handleChange}
          />
          </div>
        <button type="submit" disabled={progress !== null && progress < 100}> Submit </button>
      </div>
    </div>
      </form>  
      {
        !image &&
        <div >
          <div className="loader" style={{ width: '100px' }}>{progress}%</div>
        </div>
      }
      {
        image &&
        <img src={image} alt='uploaded file' height={200} />
      }
    </>
  );
}

export default CreatePost;