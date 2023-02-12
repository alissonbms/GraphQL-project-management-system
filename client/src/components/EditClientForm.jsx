import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UPDATE_CLIENT } from "../mutations/ClientMutations";
import { GET_CLIENT } from "../queries/ClientQueries";

const EditClientForm = ({ client }) => {
  const [name, setName] = useState(client.name);
  const [email, setEmail] = useState(client.email);
  const [phone, setPhone] = useState(client.phone);

  const [updateClient] = useMutation(UPDATE_CLIENT, {
    variables: { id: client.id, name, email, phone },
    refetchQueries: { query: GET_CLIENT, variables: { id: client.id } },
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      return toast.error("Please fill out all fields!");
    }

    updateClient(name, email, phone);

    toast.success("Client successfully edited!");
  };

  return (
    <>
      <div className="mt-4">
        <h3>Update Client Details</h3>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <Link to="/" className="btn btn-light mt-4 w-100">
          Back
        </Link>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default EditClientForm;
