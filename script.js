function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // *****  get react essential components

const { Component } = React;
const { BootstrapTable, TableHeaderColumn } = window;

// ***** data

const empData = [
{
  _id: 1,
  name: "John Doe",
  mob: 1112223330,
  email: "john@abc.com",
  position: "Accountant",
  dept: "IT",
  sal: 15000,
  status: "Active" },

{
  _id: 2,
  name: "Adam Smith",
  mob: 1112223331,
  email: "adam@abc.com",
  position: "Analyst",
  dept: "IT",
  sal: 35000,
  status: "Active" },

{
  _id: 3,
  name: "Scot Turner",
  mob: 1112223332,
  email: "scot@abc.com",
  position: "Manager",
  dept: "IT",
  sal: 65000,
  status: "Active" },

{
  _id: 4,
  name: "James Ford",
  mob: 1112223333,
  email: "james@abc.com",
  position: "Module Lead",
  dept: "IT",
  sal: 45000,
  status: "Active" },

{
  _id: 5,
  name: "Robert Clark",
  mob: 1112223334,
  email: "bob@abc.com",
  position: "HR Head",
  dept: "HR",
  sal: 55000,
  status: "Active" }];



const noEmpData = [
{
  _id: 0,
  name: "none",
  mob: 00000000000,
  email: "none",
  position: "none",
  dept: "none",
  sal: 0,
  status: "none" }];



const empColumns = {
  colData: [
  {
    dataField: "_id",
    text: "Emp Id" },

  {
    dataField: "name",
    text: "Employee Name" },

  {
    dataField: "mob",
    text: "Mobile #" },

  {
    dataField: "email",
    text: "Email" },

  {
    dataField: "position",
    text: "Position" },

  {
    dataField: "dept",
    text: "Department" },

  {
    dataField: "sal",
    text: "Salary" },

  {
    dataField: "status",
    text: "Status" },

  {
    dataField: "edit",
    text: "Edit" }] };




//*****    popup class

class Popmodal extends Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleMobileChange",




    e => {
      this.setState({ mob: e.target.value });
    });_defineProperty(this, "handleNewAddChanges",

    e => {
      this.setState({
        [e.target.name]: e.target.value,
        _id: this.props.defaultProps.currentID });

    });_defineProperty(this, "handleNewSubmit",
    e => {

      this.props.onSubmit(
      this.state,
      e,
      null,
      "new",
      this.props.defaultProps.currentID);

    });let rowObj = JSON.parse(JSON.stringify(props.children));this.state = { mob: rowObj.mob };}
  //componentWillReceiveProps deprecated in v 17 ... workaround use UNSAFE_componentWillReceiveProps
  componentWillReceiveProps(prevProps, nextProp) {
    if (prevProps.children) this.setState({ mob: prevProps.children.mob });
  }

  render() {
    const { onClose, onSubmit, newAdd, children, defaultProps } = this.props;

    let currentId = 1;
    if (children) {
      currentId = defaultProps.currentID;
    }

    return children && !!!newAdd ? /*#__PURE__*/
    React.createElement("div", { className: this.props.showModal ? "show" : "hide" }, /*#__PURE__*/
    React.createElement("div", { className: "topdivcls" }), /*#__PURE__*/
    React.createElement("div", { className: "popmodalolaycls" }, /*#__PURE__*/
    React.createElement("div", { className: "popupmodalwprcls" }, /*#__PURE__*/
    React.createElement("div", { className: "popmodal" }, /*#__PURE__*/
    React.createElement("a", {
      href: "about:blank",
      onClick: e => {
        onClose(e);
      } }, "\xD7"), /*#__PURE__*/



    React.createElement("div", { className: "headcls" }, " Edit Values "), /*#__PURE__*/
    React.createElement("div", { className: "maincls" }, /*#__PURE__*/
    React.createElement("form", { name: "frm1", id: "frm1" }, /*#__PURE__*/
    React.createElement("div", { className: "form-group" },
    " ", /*#__PURE__*/
    React.createElement("label", { htmlFor: "emp_id" }, "Id : "),
    children._id), /*#__PURE__*/

    React.createElement("div", { className: "form-group" },
    " ", /*#__PURE__*/
    React.createElement("label", { htmlFor: "name" }, "Name : "),
    children.name), /*#__PURE__*/

    React.createElement("div", { className: "form-group" },
    " ", /*#__PURE__*/
    React.createElement("label", { htmlFor: "mobile" }, "Mobile : "), /*#__PURE__*/
    React.createElement("input", {
      type: "textbox",
      className: "form-control",
      id: "mobile",
      placeholder: "Mobile",
      value: this.state.mob,
      onChange: this.handleMobileChange })), /*#__PURE__*/


    React.createElement("div", { className: "form-group" },
    " ", /*#__PURE__*/
    React.createElement("label", { htmlFor: "email" }, "Email : "),
    children.email), /*#__PURE__*/

    React.createElement("div", { className: "form-group" },
    " ", /*#__PURE__*/
    React.createElement("label", { htmlFor: "position" }, "Position : "),
    children.position), /*#__PURE__*/

    React.createElement("div", { className: "form-group" },
    " ", /*#__PURE__*/
    React.createElement("label", { htmlFor: "dept" }, "Dept : "),
    children.dept), /*#__PURE__*/

    React.createElement("div", { className: "form-group" },
    " ", /*#__PURE__*/
    React.createElement("label", { htmlFor: "sal" }, "Sal : "),
    children.sal), /*#__PURE__*/

    React.createElement("div", { className: "form-group" },
    " ", /*#__PURE__*/
    React.createElement("label", { htmlFor: "status" }, "Status : "),
    children.status), /*#__PURE__*/

    React.createElement("button", {
      onClick: e => onClose(e),
      className: "btn btn-primary btn-sm " }, "Close"), "\xA0", /*#__PURE__*/




    React.createElement("button", {
      type: "submit",
      className: "btn btn-success btn-sm",
      onClick: (e) =>
      onSubmit(this.state.mob, e, this.props.children, "edit") }, "Submit Edit"))))))) :










    newAdd ? /*#__PURE__*/
    React.createElement("div", { className: this.props.showModal ? "show" : "hide" }, /*#__PURE__*/
    React.createElement("div", { className: "topdivcls" }), /*#__PURE__*/
    React.createElement("div", { className: "popmodalolaycls" }, /*#__PURE__*/
    React.createElement("div", { className: "popupmodalwprcls" }, /*#__PURE__*/
    React.createElement("div", { className: "popmodal" }, /*#__PURE__*/
    React.createElement("a", {
      className: "clcls",
      onClick: e => {
        onClose(e);
      },
      href: "about:blank" }, "\xD7"), /*#__PURE__*/



    React.createElement("div", { className: "headcls" }, " Add Values "), /*#__PURE__*/
    React.createElement("div", { className: "maincls newaddcls" }, /*#__PURE__*/
    React.createElement("form", { name: "frm1", id: "frm1" }, /*#__PURE__*/
    React.createElement("div", { className: "form-group" },
    " ", /*#__PURE__*/
    React.createElement("label", { htmlFor: "id" }, "Id : "),
    currentId), /*#__PURE__*/

    React.createElement("div", { className: "form-group" },
    " ", /*#__PURE__*/
    React.createElement("label", { htmlFor: "name" }, "Name : "), /*#__PURE__*/
    React.createElement("input", {
      type: "textbox",
      className: "form-control",
      id: "name",
      name: "name",
      placeholder: "Name",
      onChange: this.handleNewAddChanges })), /*#__PURE__*/


    React.createElement("div", { className: "form-group" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "mobile" }, "Mobile : "), /*#__PURE__*/
    React.createElement("input", {
      type: "textbox",
      className: "form-control",
      id: "mob",
      name: "mob",
      placeholder: "Mobile",
      onChange: this.handleNewAddChanges })), /*#__PURE__*/


    React.createElement("div", { className: "form-group" },
    " ", /*#__PURE__*/
    React.createElement("label", { htmlFor: "email" }, "Email : "), /*#__PURE__*/
    React.createElement("input", {
      type: "textbox",
      className: "form-control",
      id: "email",
      name: "email",
      placeholder: "email",
      onChange: this.handleNewAddChanges })), /*#__PURE__*/


    React.createElement("div", { className: "form-group" },
    " ", /*#__PURE__*/
    React.createElement("label", { htmlFor: "position" }, "Position : "), /*#__PURE__*/
    React.createElement("input", {
      type: "textbox",
      className: "form-control",
      id: "position",
      name: "position",
      placeholder: "position",
      onChange: this.handleNewAddChanges })), /*#__PURE__*/


    React.createElement("div", { className: "form-group" },
    " ", /*#__PURE__*/
    React.createElement("label", { htmlFor: "dept" }, "Dept : "), /*#__PURE__*/
    React.createElement("input", {
      type: "textbox",
      className: "form-control",
      id: "dept",
      name: "dept",
      placeholder: "dept",
      onChange: this.handleNewAddChanges })), /*#__PURE__*/


    React.createElement("div", { className: "form-group" },
    " ", /*#__PURE__*/
    React.createElement("label", { htmlFor: "sal" }, "Sal : "), /*#__PURE__*/
    React.createElement("input", {
      type: "textbox",
      className: "form-control",
      id: "sal",
      name: "sal",
      placeholder: "sal",
      onChange: this.handleNewAddChanges })), /*#__PURE__*/


    React.createElement("div", { className: "form-group" },
    " ", /*#__PURE__*/
    React.createElement("label", { htmlFor: "status" }, "Status : "), /*#__PURE__*/
    React.createElement("input", {
      type: "textbox",
      className: "form-control",
      id: "status",
      name: "status",
      placeholder: "status",
      onChange: this.handleNewAddChanges })), /*#__PURE__*/


    React.createElement("button", {
      onClick: e => onClose(e),
      className: "btn btn-primary btn-sm " }, "Close"), "\xA0", /*#__PURE__*/




    React.createElement("button", {
      type: "submit",
      className: "btn btn-success btn-sm",
      onClick: this.handleNewSubmit }, "Submit New"))))))) :









    null;
  }}


// ******   Employee class

class Employee extends Component {constructor(...args) {super(...args);_defineProperty(this, "getEmpDets",



















    empDetRow => {
      return empDetRow ? empDetRow : "....No Data Available";
    });}render() {const { empDetRow, handleNewAdd } = this.props;return /*#__PURE__*/React.createElement("div", null, "Emp details :", JSON.stringify(this.getEmpDets(empDetRow)), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", { className: "btn btn-success btn-sm", style: { margin: "10px", left: "40%", position: "relative" }, onClick: e => handleNewAdd(e) }, "Add"));}}


// ******   Employees class

class Employees extends Component {
  constructor(props) {
    super(props);_defineProperty(this, "onRowClick",



    row => {
      const { handleTableClick } = this.props;

      handleTableClick(row);
    });_defineProperty(this, "cellButton",

    (cell, row, enumObject, rowIndex) => {
      const { handleEdit, handleDelete } = this.props;
      return /*#__PURE__*/(
        React.createElement("div", null, /*#__PURE__*/
        React.createElement("button", {
          type: "button",
          className: "btn btn-primary btn-sm ",
          onClick: () => handleEdit(row) }, "Edit"),


        " ", /*#__PURE__*/
        React.createElement("button", {
          type: "button",
          className: "btn btn-danger btn-sm",
          onClick: () => handleDelete(row) }, "Delete")));





    });this.state = { edit: false, delete: false };}
  render() {
    const options = {
      onRowClick: this.onRowClick };


    return /*#__PURE__*/(
      React.createElement("div", { className: "container" }, /*#__PURE__*/
      React.createElement("h3", null, "Emp Summary"), /*#__PURE__*/
      React.createElement(BootstrapTable, {
        data: this.props.empData,
        options: options,
        striped: true,
        hover: true }, /*#__PURE__*/

      React.createElement(TableHeaderColumn, { dataField: "_id", isKey: true }, "Emp ID"), /*#__PURE__*/


      React.createElement(TableHeaderColumn, { dataField: "name" }, "Emp name"), /*#__PURE__*/
      React.createElement(TableHeaderColumn, { dataField: "mob" }, "Emp mob"), /*#__PURE__*/
      React.createElement(TableHeaderColumn, { dataField: "email" }, "Emp email"), /*#__PURE__*/
      React.createElement(TableHeaderColumn, { dataField: "position" }, "Emp position"), /*#__PURE__*/


      React.createElement(TableHeaderColumn, { dataField: "dept" }, "Emp dept"), /*#__PURE__*/
      React.createElement(TableHeaderColumn, { dataField: "sal" }, "Emp sal"), /*#__PURE__*/
      React.createElement(TableHeaderColumn, { dataField: "status" }, "Emp status"), /*#__PURE__*/

      React.createElement(TableHeaderColumn, { dataField: "button", dataFormat: this.cellButton }, "Edit"))));





  }}


// ****  Main App class

class App extends Component {

  constructor(props) {
    super(props);_defineProperty(this, "handleTableClick",













    row => {
      const empData = [...this.state.empData];
      if (App.defaultProps.deletedRow) {
        let obj = empData.find(o => o._id === App.defaultProps.deletedRow._id);
      } else this.setState({ empDetRow: row });

      App.defaultProps.deletedRow = null;
    });_defineProperty(this, "handleDelete",

    row => {
      App.defaultProps.deletedRow = row;
      const empData = [...this.state.empData].filter(
      emp => emp._id !== row._id);


      this.setState({ empData: empData });
      this.setState({ empDetRow: empData[0] });
    });_defineProperty(this, "handleEdit",

    row => {
      App.defaultProps.deletedRow = null;
      this.setState({
        showModal: true,
        newAdd: false });

    });_defineProperty(this, "onClose",

    e => {
      e.preventDefault();
      this.setState({
        showModal: !this.state.showModal,
        newAdd: false });

    });_defineProperty(this, "handleNewAdd",

    e => {
      e.preventDefault();

      App.defaultProps.currentID =
      this.state.empData.length > 0 ?
      this.state.empData[this.state.empData.length - 1]._id + 1 :
      1;

      this.setState({ showModal: true, newAdd: true });
    });_defineProperty(this, "onSubmit",

    (data, e, currentRow, newEditFlag, currentID) => {
      e.preventDefault();
      if (newEditFlag === "edit") {
        const empDetRow = { ...currentRow };
        empDetRow.mob = parseInt(data);
        const empData = [...this.state.empData];
        const index = empData.indexOf(currentRow);
        empData[index].mob = parseInt(data);
        const showModal = false;
        const newAdd = false;
        this.setState({ empData, showModal, empDetRow, newAdd });
      }
      if (newEditFlag === "new") {
        const dataArr = [{ ...data }];
        dataArr[0]["_id"] = currentID;

        this.setState({
          showModal: false,
          newAdd: false,
          empData: [...this.state.empData, ...dataArr] });

      }
    });this.state = { empData: empData, empDetRow: empData[0], showModal: false, newAdd: false };App.defaultProps.currentID = this.state.empData.length > 0 ? this.state.empData[this.state.empData.length - 1]._id + 1 : 1;}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", null, " Bootstrap Table....."), /*#__PURE__*/
      React.createElement(Employees, {
        empData: this.state.empData,
        colData: empColumns.colData,
        handleDelete: this.handleDelete,
        handleTableClick: this.handleTableClick,
        handleEdit: this.handleEdit }), /*#__PURE__*/


      React.createElement("br", null), /*#__PURE__*/
      React.createElement(Employee, {
        empDetRow: this.state.empDetRow,
        handleNewAdd: this.handleNewAdd }), /*#__PURE__*/


      React.createElement("br", null), /*#__PURE__*/
      React.createElement(Popmodal, {
        defaultProps: App.defaultProps,
        showModal: this.state.showModal,
        newAdd: this.state.newAdd,
        onClose: this.onClose,
        onSubmit: this.onSubmit },

      this.state.empDetRow)));



  }}


/*
 * Render the above component into the div#app
 */_defineProperty(App, "defaultProps", { currentID: 0, deletedRow: null });
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));