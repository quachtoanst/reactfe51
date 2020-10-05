import React, { Component } from "react";

export default class HandleEvent extends Component {
  showTitle = () => {
    alert("CyberSoft");
  };

  showMess = (mess) => {
    alert(`Hello ${mess}`);
  };

  render() {
    return (
      <div>
        <div class="btn-group">
          {/* Xu ly su kien truyen callback */}
          <button
            type="button"
            class="btn btn-primary"
            onClick={this.showTitle}
          >
            Hello
          </button>

          {/* Xy ly su kien su dung ham trung gian */}
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => {
              this.showTitle();
            }}
          >
            Show title
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onClick={this.showMess.bind(this, "Cyber")}
          >
            showMess
          </button>
          <button
            type="button"
            class="btn btn-warning"
            onClick={() => {
              this.showMess("Cybers");
            }}
          >
            showMess
          </button>
        </div>
      </div>
    );
  }
}
