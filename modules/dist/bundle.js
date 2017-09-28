var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
System.register("person", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Person;
    return {
        setters: [],
        execute: function () {
            Person = (function () {
                function Person() {
                }
                return Person;
            }());
            exports_1("Person", Person);
        }
    };
});
System.register("teacher", ["person"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var person_1, Teacher;
    return {
        setters: [
            function (person_1_1) {
                person_1 = person_1_1;
            }
        ],
        execute: function () {
            Teacher = (function (_super) {
                __extends(Teacher, _super);
                function Teacher() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return Teacher;
            }(person_1.Person));
            exports_2("Teacher", Teacher);
        }
    };
});
System.register("main", ["person", "teacher"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var person_2, teacher_1, person, teacher;
    return {
        setters: [
            function (person_2_1) {
                person_2 = person_2_1;
            },
            function (teacher_1_1) {
                teacher_1 = teacher_1_1;
            }
        ],
        execute: function () {
            person = new person_2.Person();
            person.firstName = 'Brandon';
            teacher = new teacher_1.Teacher();
            console.log(person.firstName);
        }
    };
});
System.register("student", ["person"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var person_3, Student;
    return {
        setters: [
            function (person_3_1) {
                person_3 = person_3_1;
            }
        ],
        execute: function () {
            Student = (function (_super) {
                __extends(Student, _super);
                function Student() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return Student;
            }(person_3.Person));
            exports_4("Student", Student);
        }
    };
});
//# sourceMappingURL=bundle.js.map