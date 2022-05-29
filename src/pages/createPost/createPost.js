import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth, storage } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import { city } from "../../util/data";
import "./createPost.css";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import 'bootstrap/dist/css/bootstrap.min.css';


const CreatePost = () => {
  const [data, setData] = useState("");
  const [cityv, setCityv] = useState(null);
  const {fullName, age, phone, adress, zip} = data;
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const user = auth.currentUser;

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
      ...data,
      city: cityv,
      uid : user.uid,
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
          className="form-control"
          type="file"
          label="Upload"
          onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="inputGp">
          <label> Full Name</label>
          <input
            className="form-control"
            name="fullName"
            value={fullName}
            onChange={handleChange}
          />
        </div>
        <div className="row g-3">

        <div className="col-md-6">
          <label> Age</label>
          <input
            className="form-control"
            name="age"
            type="number"
            value={age}
            onChange={handleChange}
            
          />
        </div>
        <div className="col-md-6">
          <label> phone</label>
          <input
            className="form-control"
            name="phone"
            type="text"
            value={phone}
            onChange={handleChange}
            
          />
        </div>
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
          <div className="row g-3">

          <div className="col-md-6">
          <label> City</label>
          <select
          className="form-select"
            name="city"
            onChange={(e) => setCityv(e.target.value)}>
            <option value="other">
              Select City
            </option>
            {city &&
              city.map((item) => (
                <option
                  key={item.id}
                  value={item.urlParamName}>
                  {item.name}
                </option>
              ))}
          </select>
          </div>
          <div className="col-md-6">
          <label> Zip</label>
          <input
          className="form-control"
            type="number"
            name="zip"
            value={zip}
            onChange={handleChange}
          />
          </div>
          </div>
        <button type="submit" className="btn btn-primary" disabled={progress !== null && progress < 100}> Submit </button>
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