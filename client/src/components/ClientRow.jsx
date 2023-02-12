import { useMutation } from "@apollo/client";
import { AiOutlineEdit } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { DELETE_CLIENT } from "../mutations/ClientMutations";
import { GET_CLIENTS } from "../queries/ClientQueries";
import { GET_PROJECTS } from "../queries/ProjectQueries";

const ClientRow = ({ client }) => {
  const navigate = useNavigate();
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    refetchQueries: [{ query: GET_PROJECTS }, { query: GET_CLIENTS }],
    onCompleted: () => navigate(0),
  });
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>

      <td>
        <div className="dropdown">
          <button
            className="btn btn-outline-dark dropdown-toggle "
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Actions
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item" onClick={deleteClient}>
              <button
                className="btn btn-danger btn-sm"
                style={{ width: "100%" }}
              >
                <FaTrash className="icon" /> Delete
              </button>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li
              className="dropdown-item"
              onClick={() => navigate(`/clients/${client.id}`)}
            >
              <button
                className="btn btn-light btn-sm"
                style={{ width: "100%" }}
              >
                <AiOutlineEdit className="icon" /> Edit
              </button>
            </li>
          </ul>
        </div>
      </td>
      <td></td>
    </tr>
  );
};

export default ClientRow;
