import React, { Component } from "react";

class Blog extends Component {
  state = {
    articles: [
      [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
      ],
      [
        "Nibh mauris cursus mattis molestie. Aliquet eget sit amet tellus cras adipiscing enim. Enim eu turpis egestas pretium aenean pharetra magna ac placerat. Tristique risus nec feugiat in. Ridiculus mus mauris vitae ultricies leo integer. Adipiscing tristique risus nec feugiat in fermentum. Dolor sit amet consectetur adipiscing elit duis tristique. Venenatis urna cursus eget nunc scelerisque. Risus at ultrices mi tempus. Ut aliquam purus sit amet luctus venenatis lectus magna."
      ],
      [
        "Euismod quis viverra nibh cras. Mauris cursus mattis molestie a iaculis at erat pellentesque. Morbi blandit cursus risus at ultrices mi tempus. Tortor posuere ac ut consequat semper viverra nam libero. Tortor dignissim convallis aenean et tortor at risus viverra adipiscing. Aenean pharetra magna ac placerat vestibulum lectus. Condimentum lacinia quis vel eros. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Quam elementum pulvinar etiam non quam. Vel pharetra vel turpis nunc."
      ],
      [
        "Pulvinar mattis nunc sed blandit libero volutpat. Viverra ipsum nunc aliquet bibendum enim facilisis. In metus vulputate eu scelerisque felis imperdiet proin. Iaculis eu non diam phasellus vestibulum lorem sed. Diam quis enim lobortis scelerisque fermentum. Eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Facilisis volutpat est velit egestas dui id ornare arcu. Non blandit massa enim nec dui nunc mattis enim. Mollis aliquam ut porttitor leo a diam sollicitudin. Euismod nisi porta lorem mollis aliquam ut."
      ]
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
    elements.push(LoadPreview({ description: articles[i] }));
  }

  return elements;
}

function LoadPreview(props) {
  return (
    <div class="col s12 m4">
      <div class="card hoverable">
        <div class="card">
          <div class="card waves-effect waves-block waves-light">
            <div class="card-image">
              <img src="/pictures/duck.jpg" />
              <span class="card-title">Card Title</span>{" "}
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
