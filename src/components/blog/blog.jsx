import React, { Component } from "react";

class Blog extends Component {
  state = {
    articles: [
      [["Ducks are slowly taking over the world"], ["A brand new "]],
      [["Ducks are slowly taking over the world"], ["A brand new "]],
      [["Ducks are slowly taking over the world"], ["A brand new "]],
      [["Ducks are slowly taking over the world"], ["A brand new "]],
      [["Ducks are slowly taking over the world"], ["A brand new "]],
      [["Ducks are slowly taking over the world"], ["A brand new "]],
      [["Ducks are slowly taking over the world"], ["A brand new "]],
      [["Ducks are slowly taking over the world"], ["A brand new "]],
      [["Ducks are slowly taking over the world"], ["A brand new "]],
      [["Ducks are slowly taking over the world"], ["A brand new "]],
      [["Ducks are slowly taking over the world"], ["A brand new "]],
      [["Ducks are slowly taking over the world"], ["A brand new "]],
      [["Ducks are slowly taking over the world"], ["A brand new "]],
      [["Ducks are slowly taking over the world"], ["A brand new "]],
      [["Ducks are slowly taking over the world"], ["A brand new "]],
      [["Ducks are slowly taking over the world"], ["A brand new "]],
      [["Ducks are slowly taking over the world"], ["A brand new "]],
      [["Ducks are slowly taking over the world"], ["A brand new "]],
      [["Ducks are slowly taking over the world"], ["A brand new "]],
      [["Ducks are slowly taking over the world"], ["A brand new "]],
      [["Ducks are slowly taking over the world"], ["A brand new "]],
      [["Ducks are slowly taking over the world"], ["A brand new "]],
      [["Ducks are slowly taking over the world"], ["A brand new "]],
      [["Ducks are slowly taking over the world"], ["A brand new "]],
      [["Ducks are slowly taking over the world"], ["A brand new "]],
      [["Ducks are slowly taking over the world"], ["A brand new "]],
      [["Ducks are slowly taking over the world"], ["A brand new "]]
    ]
  };
  render() {
    return (
      <React.Fragment>
        <div class="row">{loadPreviews(this.state.articles)}</div>
      </React.Fragment>
    );
  }
}

function loadPreviews(articles) {
  const elements = [];

  for (var i = 0; i < articles.length; i++) {
    elements.push(
      LoadPreview({ title: articles[i][0], description: articles[i][1] })
    );
  }

  return elements;
}

function LoadPreview(props) {
  return (
    <div class="blogPreview">
      <div class="col s12 m4">
        <div class="z-depth-0">
          <div class="card hoverable waves-effect waves-block waves-light">
            <div class="card-image">
              <img src="/pictures/duck.jpg" alt="" />
              <span class="card-title">{props.title}</span>
            </div>
            <div class="card-content">
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
