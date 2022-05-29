import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {services, city} from '../../util/data';
import { db } from "../../Firebase";
import { addDoc, collection } from "firebase/firestore";
import "./createPost.css";



const SecondForm = () => {
    const [type, setType] = useState("");
    const [number, setNumber] = useState(0);
    const [service, setService] = useState(null);
    const [near, setNear] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, "annonce"), {
          type: type,
          service: service,
          near: near,
          number: number,
        });
    };
  return (
    <>
        <div className='container w-50'>
        <form className='d-flex row align-self-center py-8' onSubmit={handleSubmit}>
            <div className='col'>
                I'm looking for service for my :  
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" name='type' value="Dog" onChange={(e) => setType(e.target.value)} />
                    <label className="form-check-label">
                        Dog
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" name='type' value="Cat" onChange={(e) => setType(e.target.value)}  />
                    <label className="form-check-label">
                        Cat
                    </label>
                </div>
            

          <div className="col-md-auti">
          <label> Services</label>
          <select
          className="form-select"
            name="service"
            onChange={(e) => setService(e.target.value)}>
            <option value="other">
              Select Service
            </option>
            {services &&
              services.map((item) => (
                <option
                  key={item.id}
                  value={item.urlParamName}>
                  {item.name}
                </option>
              ))}
          </select>
          </div>


          <div className="row g-3">
                <div className="col-md-6">
                <label> Near</label>
                <select
                className="form-select"
                    name="Near"
                    onChange={(e) => setNear(e.target.value)}>
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
          <label> Number of Pets</label>
          <input
            className="form-control"
            name="number"
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            
          />
        </div>
        </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017-2022</p>
            </div>
        </form>
    </div>
    </>
   
  );
}

export default SecondForm