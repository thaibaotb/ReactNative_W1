class Student {
    constructor(public name: string, public grade: number) {}
    display() {
      console.log(`Student: ${this.name}, Grade: ${this.grade}`);
    }
  }
  
  class Teacher {
    constructor(public name: string, public subject: string) {}
    display() {
      console.log(`Teacher: ${this.name}, Subject: ${this.subject}`);
    }
  }
  
  class School {
    students: Student[] = [];
    teachers: Teacher[] = [];
  
    addStudent(s: Student) {
      this.students.push(s);
    }
  
    addTeacher(t: Teacher) {
      this.teachers.push(t);
    }
  
    displayInfo() {
      console.log("=== Students ===");
      this.students.forEach(s => s.display());
      console.log("=== Teachers ===");
      this.teachers.forEach(t => t.display());
    }
  }
  
  const school = new School();
  school.addStudent(new Student("Tom", 10));
  school.addTeacher(new Teacher("Mr. John", "Physics"));
  school.displayInfo();
  