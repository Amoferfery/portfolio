import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Sketches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.sketches;
      var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <div
            className="col-sm-12"
            key={projects.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(projects)}>
                <div >
                  <img
                    src={projects.images[0]}
                    alt="projectImages"
                    style={{width: "100%", aspectRatio: 1, marginBottom: 0, paddingBottom: 0, position: 'relative', objectFit: "contain"}}
                  />
                  <br />
                  <p className="project-title-settings mt-3">
                    {projects.title}
                  </p>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
        <div></div>
    );
  }
}

export default Sketches;
