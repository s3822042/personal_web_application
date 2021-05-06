import React from "react";
import PropTypes from "prop-types";
import DetailsIcon from "@material-ui/icons/Details";

function ProjectCard(props) {
  return (
    <a href="#">
      <img className="hover:grow hover:shadow-lg" src={props.imageSrc} />
      <div className="flex items-center justify-between pt-3">
        <p>{props.title}</p>
        <DetailsIcon color="action" />
      </div>
      <p className="pt-1 text-gray-900">{props.subTitle}</p>
    </a>
  );
}

ProjectCard.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default ProjectCard;
