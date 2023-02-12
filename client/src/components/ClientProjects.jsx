import ProjectCard from "./ProjectCard";
import { GET_CLIENT_PROJECTS } from "../queries/ProjectQueries";
import { useQuery } from "@apollo/client";
import Spinner from "./Spinner";

const ClientProjects = ({ id }) => {
  const { loading, error, data } = useQuery(GET_CLIENT_PROJECTS, {
    variables: { id },
  });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }
  return (
    <>
      <h5 className="mt-4">Client Projects </h5>

      {data?.clientProjects?.length > 0 ? (
        <div className="row mt-2">
          {data.clientProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </>
  );
};

export default ClientProjects;
