/**
 * 클래스
 */

let studentA = {
  name: "이정환",
  grade: "A+",
  age: 27,
  study() {
    console.log("열심히 공부 함");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

class Student {
  // 필드: 클래스가 만들어 낼 객체의 프로퍼티를 의미
  name;
  grade;
  age;

  // 생성자: 이 클래스(Student)를 호출하면 실제로 객체를 생성하는 역할을 하는 함수
  constructor(name, grade, age) {
    // this는 클래스가 지금 만들고 있는 객체
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부 함");
  }

  introduce() {
    console.log(`안녕하세요! ${this.name} 입니다!`);
  }
}

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

const studentDeveloper = new StudentDeveloper("이정환", "B+", 27, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programming();

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
// let studentB = new Student("홍길동", "A+", 27);
// console.log(studentB);
// studentB.study();
// studentB.introduce();
