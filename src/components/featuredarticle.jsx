import React, { Component } from "react";

class FeaturedArticle extends Component {
  state = { articleName: "something.txt" };
  render() {
    return (
      <React.Fragment>
        <div class="col s12">
          <div class="card horizontal">
            <div class="card-stacked">
              <div class="card-content">
                <h3>Rubber Duck in Hong Kong Harbor</h3>
                <h6>
                  GIANT RUBBER DUCK SPOTTED IN HONG KONG HARBOR. EXPERTS
                  CONFUSED SAYING THIS MAY BE THE WORK OF GOD OR SOME
                  EXTRATERRESTRIAL BEING.
                </h6>
              </div>
              <div class="card-action">
                <a href="#">Continue Reading</a>
              </div>
            </div>
            <div class="card-image">
              <img src="http://cdn.cnn.com/cnnnext/dam/assets/130502152627-rubber-duck-in-hong-kong-1.jpg" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FeaturedArticle;
