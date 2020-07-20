import React from "react";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      form: {
        title: "",
        desc: "",
        photo: "",
      },
    };
  }

  changeForm = (event) => {
    let formNew = { ...this.state.form };
    formNew[event.target.name] = event.target.value;
    this.setState({
      form: formNew,
    });
  };

  loadFile = (event) => {
    var fileReader = new FileReader();
    fileReader.readAsDataURL(event.target.files[0]);
    // copy state
    let formNew = { ...this.state.form };
    fileReader.onload = (e) => {
      formNew["photo"] = e.target.result;
      this.setState({
        form: formNew,
      });
    };
  };

  render() {
    const { title, desc, photo } = this.state.form;

    return (
      <div className="mt-5 container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Form Input</div>
              <div className="card-body">
                <div className="form-group">
                  <label>Title : </label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    onChange={this.changeForm}
                  />
                </div>
                <div className="form-group">
                  <label>Desc : </label>
                  <textarea
                    className="form-control"
                    name="desc"
                    onChange={this.changeForm}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label>Photo : </label>
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="customPhoto"
                      onChange={this.loadFile}
                      accept="image/*"
                    />
                    <label className="custom-file-label" for="customPhoto">
                      Choose File Photo
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={photo} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p>{desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
