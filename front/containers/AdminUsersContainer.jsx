import React from "react";
import AdminUsers from "../components/AdminUsers";
import { getUsers, changeStatus, deleteUser } from "../actions/adminActions";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return { users: state.admin.allUsers };
};

const mapDispatchToProps = function (dispatch) {
  return {
    getUsers: () => dispatch(getUsers()),
  };
};

class AdminUsersContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      input:""
    }
    this.handleStatus = this.handleStatus.bind(this),
    this.handleChange = this.handleChange.bind(this)
    this.handleDelete=this.handleDelete.bind(this)
  }

  handleStatus(type, userid) {
    changeStatus(type, userid);
  }
  handleDelete(user) {
    deleteUser(user)
    this.props.getUsers()
  }
 


  componentDidMount() {
    this.props.getUsers();
  }

  handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    this.setState({
      [key]: value
    }); 
   
  }

  render() {
    const usuarios =(!this.state.input.length) ? this.props.users : (this.props.users).filter(user=>{
      return user.firstName.toLowerCase().includes(this.state.input.toLowerCase()) || user.email.toLowerCase().includes(this.state.input.toLowerCase()) 
    })
    return (
      <div>
        <h3 className="titulopagina">Usuarios</h3>

        <AdminUsers
          usuarios={usuarios}
          handleStatus={this.handleStatus}
          handleDelete={this.handleDelete}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminUsersContainer);
