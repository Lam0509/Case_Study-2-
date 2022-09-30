let arr = [];
let list = new stuManage(arr);

function addStu() {
        let id = document.getElementById("Id").value;
        let name = document.getElementById("Name").value;
        let date = document.getElementById("Date").value;
        let gender = document.getElementById("Gender").value;
        let classroom = document.getElementById("Classroom").value;
        let image = document.getElementById("Image").value;

        let student = new Student(id, name, date, gender, classroom, image);
        list.addStu(student);
        list.showList();
}

function clear() {
    document.getElementById("Id").value = '';
    document.getElementById("Name").value = '';
    document.getElementById("Date").value = '';
    document.getElementById("Gender").value = '';
    document.getElementById("Classroom").value = '';
    document.getElementById("Image").value = '';
}

function deleteStudent(index) {
    let option = confirm('Bạn có chắc chắn muốn xóa sinh viên này không?');
    if (!option) return;
    if (option && arr.length===1) return document.getElementById("showList").innerHTML = '';
    list.deleteStu(index);
    list.showList();
}

let stuId;
function editStudent(index) {
    let student = list.searchStu(index);
    document.getElementById("Id").value = student.id;
    document.getElementById("Name").value = student.name;
    document.getElementById("Date").value = student.date;
    document.getElementById("Gender").value = student.gender;
    document.getElementById("Classroom").value = student.classroom;
    document.getElementById("Image").value = student.image;
    stuId = index;
}

function saveStu() {
    let id = document.getElementById("Id").value;
    let name = document.getElementById("Name").value;
    let date = document.getElementById("Date").value;
    let gender = document.getElementById("Gender").value;
    let classroom = document.getElementById("Classroom").value;
    let image = document.getElementById("Image").value;

    let student =  list.searchStu(stuId);
    list.editStu(student, id, name, date, gender, classroom, image);
    list.showList();
}

function validateForm(index) {
    if (validateId()===true && validateName()===true && validateDate()===true && validateGender()===true && validateClassroom()===true && validateImage()===true) {
        if (index === 'add'){
            addStu();
            return clear();
        }
        if (index === 'save'){
            saveStu();
            return clear();
        }
    }
    validateId()
    validateName()
    validateDate()
    validateGender()
    validateClassroom()
    validateImage()
}

function validateId() {
    let id = document.getElementById("Id").value;
    if (id === "") {
        document.getElementById("Id").classList.add("red-border")
        document.getElementById("Id1").innerHTML = "Cần nhập Id"
        document.getElementById("Id").focus();
    } else return true;
}

function validateName() {
    let name = document.getElementById("Name").value;
    if (name === "") {
        document.getElementById("Name").classList.add("red-border")
        document.getElementById("Name1").innerHTML = "Cần nhập Tên"
        document.getElementById("Name").focus();
    } else return true;
}

function validateDate() {
    let date = document.getElementById("Date").value;
    if (date === "") {
        document.getElementById("Date").classList.add("red-border")
        document.getElementById("Date1").innerHTML = "Cần nhập ngày sinh"
        document.getElementById("Date").focus();
    } else return true;
}

function validateGender() {
    let gender = document.getElementById("Gender").value;
    if (gender === "") {
        document.getElementById("Gender").classList.add("red-border")
        document.getElementById("Gender1").innerHTML = "Cần nhập giới tính"
        document.getElementById("Gender").focus();
    } else return true;
}

function validateClassroom() {
    let classroom = document.getElementById("Classroom").value;
    if (classroom === "") {
        document.getElementById("Classroom").classList.add("red-border")
        document.getElementById("Classroom1").innerHTML = "Cần nhập lớp đang theo học"
        document.getElementById("Classroom").focus();
    } else return true;
}

function validateImage() {
    let image = document.getElementById("Image").value;
    if (image === "") {
        document.getElementById("Image").classList.add("red-border")
        document.getElementById("Image1").innerHTML = "Cần điền link ảnh"
        document.getElementById("Image").focus();
    } else return true;
}

function hideP(index) {
    document.getElementsByTagName("p")[index].innerHTML = '';
    document.getElementsByTagName("input")[index].classList.remove("red-border")
}










