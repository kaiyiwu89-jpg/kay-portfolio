import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, description, imgUrl, technologies }) => {
  const projectPath = encodeURIComponent(
    title.toLowerCase().split(" ").join("-"),
  );
  const techList = technologies ? technologies.join(" | ") : "";

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{techList}</span>
          <div className="viewDetail mt-3">
            <Link to={`/project/${projectPath}`} className="viewDetailLink">
              View Details
            </Link>{" "}
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
