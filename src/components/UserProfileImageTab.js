import React, { Component } from 'react';

class UserProfileImageTab extends Component {
  render() {
    return (
      <div>
      <div class="ae ap aq ar as at au av">
<div class="fd at fe ff" style={{ backgroundColor: "white" }}>
  <div class="ae ap aq ar as at au av">
    <div class="flexboxgrid2__row___ZtOZv">
      <div class="flexboxgrid2__col-sm-6___1l2Kt flexboxgrid2__col-md-4___3pbbS">
        {this.props.posts.map((post)=><figure style={{ marginBottom: "20px" }} class="at b0">
          <img
            src={"http://localhost:8000" + post.avatar}
            draggable="false"
            alt="Post"
          />
          <span class="c4 fg fh bj bk bl bm aj fi fj fk fl"></span>
          <figcaption class="c4 ae fm fn fo af aw cg cu bi fp fq">
            <ul class="af aw">
              <li class="b7 af aw fr bj bk bl bm fi fj fk fl"></li>
              <li class="b7 af aw fr bj bk bl bm fi fj fk fl"></li>
            </ul>
          </figcaption>
        </figure>)}
        
      </div>
      </div>
    <div data-baseweb="block" class="aw af cg bg fs ft">
      <button
        data-baseweb="button"
        class="az d3 aw cg d5 d6 d7 d8 d9 da db dc dd de df bf dg dh di dj b0 dk dl dm dn do dp dq bj bk ds dt du dv dw dx fu fv fw fx e0 fy fz g0 g1"
      >
        Check 9 more posts
      </button>
    </div>
  </div>
</div>
</div>
</div>
    );
  }
}

export default UserProfileImageTab;
