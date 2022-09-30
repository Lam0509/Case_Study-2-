class Student {
    constructor(id, name, date, gender, classroom, image) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.gender = gender;
        this.classroom = classroom;
        this.image = image;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getDate() {
        return this.date;
    }
    getGender() {
        return this.gender;
    }
    getClassroom() {
        return this.classroom;
    }
    getImg() {
        return this.image;
    }
    setId(id) {
        this.id = id;
    }
    setName(name) {
        this.name = name;
    }
    setDate(date) {
        this.date = date;
    }
    setGender(gender) {
        this.gender = gender;
    }
    setClassroom(classroom) {
        this.classroom = classroom;
    }
    setImg(image) {
        this.image = image;
    }
    edit(id, name, date, gender, classroom, image) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.gender = gender;
        this.classroom = classroom;
        this.image = image;
    }
}