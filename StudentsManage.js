class stuManage {
    constructor(arr) {
        this.students = arr;
    }

    showList() {
        let table;
        table = "<table>"
        table = table + "<tr>" + "<th colspan='7' style='font-size: 40px;color: brown'>" + 'Danh sách học viên' + "</th>" + "</tr>"
        table = table + "<tr>" +
            "<th>" + 'ID' + "</th>" +
            "<th>" + 'Họ tên' + "</th>" +
            "<th>" + 'Ngày sinh' + "</th>" +
            "<th>" + 'Giới tính' + "</th>" +
            "<th>" + 'Lớp' + "</th>" +
            "<th>" + 'Ảnh' + "</th>" +
            "<th>" + 'Tùy chọn' + "</th>" + "</tr>"

        for (let i = 0; i < this.students.length; i++) {

            table += '<tr>';
            table += '<td>';
            table += this.students[i].id;
            table += '</td>';

            table += '<td>';
            table += this.students[i].name;
            table += '</td>';

            table += '<td>';
            table += this.students[i].date;
            table += '</td>';

            table += '<td>';
            table += this.students[i].gender;
            table += '</td>';

            table += '<td>';
            table += this.students[i].classroom;
            table += '</td>';

            table += '<td>';
            table += '<img src=" '+this.students[i].image+'" alt="">';
            table += '</td>';

            table += '<td>' +
                '<button type="button" onclick="deleteStudent('+i+')">Delete</button> ' +
                ' <button type="button" onclick="editStudent('+i+')">Edit</button>' +
                '</td>';

            table += '</tr>';
        }
        table += "</table>"
        document.getElementById("showList").innerHTML = table;
    }

    addStu(student) {
        this.students.push(student);
    }

    deleteStu(index) {
        this.students.splice(index, 1);
    }

    searchStu(index) {
        return this.students[index];
    }

    editStu(student, id, name, date, gender, classroom, image) {
        student.edit(id, name, date, gender, classroom, image);
    }
}