import React, { Component } from "react";

class Blog extends Component {
  state = {
    numbers: [0, 1, 2, 3, 4],
    articles: [
      [["Ducks are slowly taking over the world"], ["A brand new "]],
      [""],
      [""],
      [""],
      [""]
    ]
  };

  render() {
    var listItems = numbers.map(i => (
      <div class="blogPreview">
        <li key={state.numbers[i].toString()}>{state.numbers[i]}</li>
        <div class="col s12 m4">
          <div class="z-depth-0">
            <div class="card hoverable waves-effect waves-block waves-light">
              <div class="card-image">
                <img src="/pictures/duck.jpg" alt="" />
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>{state.description[i]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));

    return <div class="row">{listItems}</div>;
  }
}

export default Blog;
