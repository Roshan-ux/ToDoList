import axios from 'axios';

class ToDoAPI{

    addUser(user){
        return axios.post('http://localhost:8080/TQProject/register',user);
    }

    Login(idpass){
        return axios.post("http://localhost:8080/TQProject/login",idpass);
    }

    getToDoList(email){
        return axios.get("http://localhost:8080/TQProject/ToDoServlet?email="+email)
    }

    getUserList(){
        return axios.get("http://localhost:8080/TQProject/UserList")
    }

    addTask(task){
        return axios.post("http://localhost:8080/TQProject/addtask",task);
    }

    changeTaskStatus(taskid){
        return axios.get("http://localhost:8080/TQProject/changetaskstatus?taskid="+taskid);
    }
    deleteTask(taskid){
        return axios.get("http://localhost:8080/TQProject/deletetask?taskid="+taskid);
    }
    userActivate(idpass){
        return axios.post("http://localhost:8080/TQProject/ActivateUser",idpass)
    }

    userDeactivate(idpass){
        return axios.post('http://localhost:8080/TQProject/DeactivateUser',idpass);
    }

    Report(){
        return axios.get("http://localhost:8080/TQProject/report");
    }

    otpGenarate(email){
        return axios.get("http://localhost:8080/TQProject/OTPGeneration?email="+email)
    }
}

export default new ToDoAPI();