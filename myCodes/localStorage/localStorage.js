users = [

]

addUser = document.querySelector("#addUser");
updateUser = document.querySelector("#updateUser");
form = document.querySelector("#form");


if (localStorage.getItem("users") == null) {
    localStorage.setItem("users", JSON.stringify(users));
}

addUsers = function (name, age) {
    if (localStorage.getItem("users") != null) {
        users = JSON.parse(localStorage.getItem("users"));
        name = document.getElementById("name").value;
        age = document.getElementById("age").value;
        users.push({ "name": name, "age": age });
        localStorage.setItem("users", JSON.stringify(users));
        showUsers(getUsers());
    }
}

removeUser = function(w){
    users = JSON.parse(localStorage.getItem("users"));
    console.log(w);
        users.splice(w,1);
        localStorage.setItem("users", JSON.stringify(users));
        showUsers(getUsers());    
}

incrementAge = function(q){   
    users = JSON.parse(localStorage.getItem("users"));
    users[q].age=Number.parseInt(users[q].age)+1;
    console.log(users[q].age);
    localStorage.setItem("users", JSON.stringify(users));
    showUsers(getUsers());    
}

update = function(y){
    name.value = users[y].name;
    age.value = users[y].age;
    update(y);  
}

getUsers = function () {
    if (localStorage.getItem("users") != null) {
        users = JSON.parse(localStorage.getItem("users"));
        return users;
    }
}

searchUsers = function (name) {
    ulist = getUsers();
    ulist = ulist.filter(e => e.name.toUpperCase().includes(name.toUpperCase()));
    return ulist;
}

showUsers = function (usersData) {
    showusers = document.querySelector("#showusers");
    if (usersData.length > 0) {
        str = "<h5 class='text-danger'>User Details</h5>";
        let i=0;
        for (user of usersData) {
            str += `<div class="card">
        <div class="card-body">
                ${user.name} - ${user.age}
                <a onclick="removeUser(${i})"><i class="fas fa-user-times float-right mr-2"></i></a>
                <a onclick="update(${i})"><i class="far fa-edit float-right mr-2"></i></a> 
                <a onclick="incrementAge(${i})"><i class="fas fa-plus float-right mr-2"></i></a>
            </div>
        </div>`
        i++;
        }
    } else {
        str = "No users to show....";
    }
    showusers.innerHTML = str;
}

searchstr = document.querySelector("#searchstr");

searchstr.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
        searchResult = searchUsers(e.target.value);
        showUsers(searchResult);
    }
})

showUsers(getUsers());

addUser.addEventListener("click", e => {
    e.preventDefault();
    addUsers(name, age);
    form.reset();
})