import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import ClientInfo from "../components/ClientInfo";
import EditClientForm from "../components/EditClientForm";
import ClientProjects from "../components/ClientProjects";
import Spinner from "../components/Spinner";
import { GET_CLIENT } from "../queries/ClientQueries";

const Client = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_CLIENT, { variables: { id } });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <>
      <div className=" w-50 mx-auto">
        <ClientInfo client={data.client} />
        <ClientProjects id={data.client.id} />
        <EditClientForm client={data.client} />
      </div>
    </>
  );
};

export default Client;
