import React from "react";
import ReactDOM from "react-dom";
import Menu from "react-menus";
import Radium from "radium";
import Button from "./Button";

const items = [
  {
    label: "Download this file"
  },
  {
    label: "Documentation"
  },
  {
    label: "Font"
  },
  {
    label: "Report an Error"
  },
  {
    label: "Discuss Pyret"
  },
  {
    label: "Log Out"
  }
];

function onClick(event, props, index){
}
//TODO
//implement correct behavior
export class More extends React.Component {
  constructor(props) {
    super(props);
    this.state = {expanded: false};
  }

  // https://discuss.reactjs.org/t/how-to-calculate-jqyery-closest-in-react/1988
  componentDidMount() {
    let app = document.getElementById('app');
    app.addEventListener('click', this.handleDocumentClick.bind(this));
  }

  componentWillUnmount() {
    let app = document.getElementById('app');
    app.removeEventListener('click', this.handleDocumentClick.bind(this));
  }

  handleDocumentClick(evt) {
    const area = ReactDOM.findDOMNode(this.refs.area);
    if (!area.contains(evt.target)) {
      this.setState({expanded: false});
    }
  }

  render() {
    return(
      <span ref="area">
          <Button kind="more" onClick={()=>{this.setState({expanded: !this.state.expanded});}}>More</Button>
          {this.state.expanded ? <Menu items={items} onClick={onClick}/> : null}
      </span>
    );
  }
}

export default Radium(More);
