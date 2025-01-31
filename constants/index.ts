import onBording1 from "@/assets/images/onBording1.png"
import onBording2 from "@/assets/images/onBording2.png"
import onBording3 from "@/assets/images/onBording3.png"
import startingPage from "@/assets/images/startingPage.png"
import logo from "@/assets/images/favcion.png"
import java from "@/assets/icons/java.png"
import C from "@/assets/icons/letter-c.png"
import javaScript from "@/assets/icons/javascript.png"
import Cpp from "@/assets/icons/c-.png"
import arrowDown from "@/assets/icons/arrow-down.png";
import arrowUp from "@/assets/icons/arrow-up.png";
import backArrow from "@/assets/icons/back-arrow.png";
import chat from "@/assets/icons/chat.png";
import checkmark from "@/assets/icons/check.png";
import close from "@/assets/icons/close.png";
import dollar from "@/assets/icons/dollar.png";
import email from "@/assets/icons/email.png";
import eyecross from "@/assets/icons/eyecross.png";
import google from "@/assets/icons/google.png";
import home from "@/assets/icons/home.png";
import list from "@/assets/icons/list.png";
import lock from "@/assets/icons/lock.png";
import map from "@/assets/icons/map.png";
import marker from "@/assets/icons/marker.png";
import out from "@/assets/icons/out.png";
import person from "@/assets/icons/person.png";
import pin from "@/assets/icons/pin.png";
import point from "@/assets/icons/point.png";
import profile from "@/assets/icons/profile.png";
import search from "@/assets/icons/search.png";
import selectedMarker from "@/assets/icons/selected-marker.png";
import star from "@/assets/icons/star.png";
import target from "@/assets/icons/target.png";
import to from "@/assets/icons/to.png";
import check from "@/assets/images/check.png"
import CodingImg from "@/assets/images/CodingImg.png"
import Electro from "@/assets/images/Electro.png"
import c from "@/assets/images/c.png"
import Cplus from "@/assets/images/C++.png"
import Java from "@/assets/images/java.png"
import JS from "@/assets/images/JS.png"
import Python from "@/assets/images/python.png"


export const images = {
  onBording1,
  onBording2,
  onBording3,
  startingPage,
  logo,
  check,
  CodingImg,
  Electro,
  c,
  Cplus,
  Java,
  JS,
  Python,

    
}

export const icons = {
  arrowDown,
  arrowUp,
  backArrow,
  chat,
  checkmark,
  close,
  dollar,
  email,
  eyecross,
  google,
  home,
  list,
  lock,
  map,
  marker,
  out,
  person,
  pin,
  point,
  profile,
  search,
  selectedMarker,
  star,
  target,
  to,
  java,
  C,
  Cpp,
  javaScript
};



export const onboarding = [
  {
    id: 1,
    title: "Master Topics Quickly!",
    description:
      "Get concise explanations and key points on any topic with just a few taps.",
    image: images.onBording1 // Adjust image as needed
  },
  {
    id: 2,
    title: "AI-Powered Learning",
    description:
      "Our AI analyzes your learning needs to provide tailored explanations and summaries.",
    image: images.onBording2 // Adjust image as needed
  },
  {
    id: 3,
    title: "Learn Efficiently",
    description:
      "Focus on what matters most. Our bullet-point summaries help you grasp concepts faster.",
    image: images.onBording3 // Adjust image as needed
  },
];


export const Language = [
  {
    id: 1,
    title: "C",
    bg_colour: "#B9B7EC",
    programming_Languages: "cProgramming", // Make sure cProgramming is defined
    image: images.c,
  },
  {
    id: 2,
    title: "C++",
    bg_colour: "#2D25D7",
    programming_Languages: "cppProgramming", // Make sure cppProgramming is defined
    image: images.Cplus,
  },
  {
    id: 3,
    title: "Java",
    bg_colour: "#B9B7EC",
    programming_Languages: "javaProgramming", // Make sure javaProgramming is defined
    image: images.Java,
  },
  {
    id: 4,
    title: "JavaScript",
    bg_colour: "#2D25D7",
    programming_Languages: "javascriptProgramming", // Make sure javascriptProgramming is defined
    image: images.JS,
  },
  {
    id: 5,
    title: "Python",
    bg_colour: "#B9B7EC",
    programming_Languages: "python", // Make sure python is defined
    image: images.Python,
  },
];


  export const python = [
    {
      "key": 1,
      "topic": "Variables and Data Types",
      "description": {
        "points": [
          "Variables are used to store data in Python.",
          "Common data types include integers (`int`), floating-point numbers (`float`), strings (`str`), lists (`list`), and dictionaries (`dict`).",
          "Python is dynamically typed, meaning variable types are inferred from the assigned values.",
          "You can change the type of a variable by reassigning a new value of a different type."
        ]
      },
      "sample_code": "x = 10\nname = 'John'\nprint(f'Integer: {x}, String: {name}')"
    },
    {
      "key": 2,
      "topic": "Control Flow (if, else, elif)",
      "description": {
        "points": [
          "`if`, `elif`, and `else` are used to execute different blocks of code based on certain conditions.",
          "The conditions are evaluated as `True` or `False`.",
          "Use `elif` for multiple conditions, and `else` for a default case if no other conditions are met."
        ]
      },
      "sample_code": "x = 10\nif x > 5:\n    print('Greater than 5')\nelif x == 5:\n    print('Equal to 5')\nelse:\n    print('Less than 5')"
    },
    {
      "key": 3,
      "topic": "Functions",
      "description": {
        "points": [
          "A function is a reusable block of code that performs a specific task.",
          "Functions are defined using the `def` keyword followed by the function name and parentheses `()`. Inside the parentheses, you can define parameters.",
          "Functions can return values using the `return` statement."
        ]
      },
      "sample_code": "def greet(name):\n    return f'Hello, {name}'\n\nprint(greet('Alice'))"
    },
    {
      "key": 4,
      "topic": "Loops",
      "description": {
        "points": [
          "Loops are used for repeated execution of a block of code.",
          "Python has two types of loops: `for` loops for iterating over collections, and `while` loops for indefinite repetition until a condition becomes false.",
          "`for` loops can iterate over lists, tuples, dictionaries, and ranges of numbers."
        ]
      },
      "sample_code": "for i in range(5):\n    print(i)"
    },
    {
      "key": 5,
      "topic": "List and Dictionary Comprehensions",
      "description": {
        "points": [
          "List comprehensions provide a concise way to create lists based on existing lists or other iterables.",
          "Dictionary comprehensions allow for creating dictionaries from key-value pairs in a single line."
        ]
      },
      "sample_code": "squares = [x ** 2 for x in range(5)]\nprint(squares)"
    },
    {
      "key": 6,
      "topic": "Classes and Objects",
      "description": {
        "points": [
          "Classes are blueprints for creating objects. Objects are instances of classes.",
          "A class is defined using the `class` keyword, followed by the class name.",
          "Objects can have attributes (variables) and methods (functions)."
        ]
      },
      "sample_code": "class Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        print(f'{self.name} makes a sound')\n\ncat = Animal('Cat')\ncat.speak()"
    },
    {
      "key": 7,
      "topic": "Modules and Packages",
      "description": {
        "points": [
          "Modules are Python files that contain code, such as functions and classes, which can be imported and used in other programs.",
          "Packages are collections of related modules organized in directories with an `__init__.py` file."
        ]
      },
      "sample_code": "import math\nprint(math.sqrt(16))"
    },
    {
      "key": 8,
      "topic": "Exception Handling",
      "description": {
        "points": [
          "Exception handling allows you to deal with errors that occur during the execution of a program.",
          "The `try` block contains code that might raise an exception, and the `except` block contains code that handles the exception."
        ]
      },
      "sample_code": "try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print('Cannot divide by zero')"
    },
    {
      "key": 9,
      "topic": "File Handling",
      "description": {
        "points": [
          "Python provides built-in functions for reading from and writing to files.",
          "The `open()` function is used to open a file in different modes, such as read (`r`), write (`w`), or append (`a`).",
          "Use the `with` statement to automatically close files after processing."
        ]
      },
      "sample_code": "with open('file.txt', 'w') as f:\n    f.write('Hello, world!')\n\nwith open('file.txt', 'r') as f:\n    print(f.read())"
    },
    {
      "key": 10,
      "topic": "Decorators",
      "description": {
        "points": [
          "Decorators are functions that modify the behavior of other functions or methods.",
          "They are used to add functionality to an existing function without modifying its structure."
        ]
      },
      "sample_code": "def log(func):\n    def wrapper(*args, **kwargs):\n        print('Calling', func.__name__)\n        return func(*args, **kwargs)\n    return wrapper\n\n@log\ndef greet():\n    print('Hello!')\ngreet()"
    }
  ]
  

  export const cProgramming = [
    {
      "key": 1,
      "topic": "Variables and Data Types",
      "description": {
        "points": [
          "Variables are used to store data in C.",
          "Common data types include integers (`int`), floating-point numbers (`float`), characters (`char`), and pointers.",
          "C is statically typed, meaning variable types are declared explicitly before use."
        ]
      },
      "sample_code": "#include <stdio.h>\nint main() {\n    int x = 10;\n    char c = 'A';\n    printf(\"Integer: %d, Character: %c\\n\", x, c);\n    return 0;\n}"
    },
    {
      "key": 2,
      "topic": "Control Flow (if, else, switch)",
      "description": {
        "points": [
          "`if`, `else`, and `switch` statements are used to make decisions in C.",
          "The `switch` statement is used for multi-way branching based on the value of an expression.",
          "The conditions in `if` and `else` are evaluated as `true` or `false`."
        ]
      },
      "sample_code": "#include <stdio.h>\nint main() {\n    int x = 10;\n    if (x > 5) {\n        printf(\"Greater than 5\\n\");\n    } else if (x == 5) {\n        printf(\"Equal to 5\\n\");\n    } else {\n        printf(\"Less than 5\\n\");\n    }\n    return 0;\n}"
    },
    {
      "key": 3,
      "topic": "Functions",
      "description": {
        "points": [
          "A function is a reusable block of code that performs a specific task.",
          "Functions are declared with a return type, function name, and parameters.",
          "Functions can return values using the `return` statement."
        ]
      },
      "sample_code": "#include <stdio.h>\nint add(int a, int b) {\n    return a + b;\n}\nint main() {\n    int result = add(5, 3);\n    printf(\"Sum: %d\\n\", result);\n    return 0;\n}"
    },
    {
      "key": 4,
      "topic": "Loops",
      "description": {
        "points": [
          "C has three types of loops: `for`, `while`, and `do-while` loops.",
          "`for` loops are used for definite iteration when the number of iterations is known.",
          "`while` and `do-while` loops are used for indefinite iteration based on a condition."
        ]
      },
      "sample_code": "#include <stdio.h>\nint main() {\n    for (int i = 0; i < 5; i++) {\n        printf(\"%d\\n\", i);\n    }\n    return 0;\n}"
    },
    {
      "key": 5,
      "topic": "Arrays",
      "description": {
        "points": [
          "Arrays in C are collections of elements of the same type, stored in contiguous memory locations.",
          "Arrays can be single-dimensional or multi-dimensional (e.g., 2D arrays).",
          "Array indices start from 0."
        ]
      },
      "sample_code": "#include <stdio.h>\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    for (int i = 0; i < 5; i++) {\n        printf(\"%d\\n\", arr[i]);\n    }\n    return 0;\n}"
    },
    {
      "key": 6,
      "topic": "Pointers",
      "description": {
        "points": [
          "Pointers are variables that store the memory address of another variable.",
          "The `&` operator is used to get the address of a variable, and the `*` operator is used to dereference a pointer.",
          "Pointers are essential for dynamic memory allocation, arrays, and function arguments."
        ]
      },
      "sample_code": "#include <stdio.h>\nint main() {\n    int x = 10;\n    int *p = &x;\n    printf(\"Value of x: %d, Address of x: %p\\n\", *p, p);\n    return 0;\n}"
    },
    {
      "key": 7,
      "topic": "Structures",
      "description": {
        "points": [
          "Structures in C are user-defined data types that group different data types together.",
          "A structure is defined using the `struct` keyword, followed by the structure name and members.",
          "Structures allow grouping related data (e.g., representing a `student` with name, age, and grade)."
        ]
      },
      "sample_code": "#include <stdio.h>\nstruct Student {\n    char name[50];\n    int age;\n    float grade;\n};\nint main() {\n    struct Student s1 = {\"John\", 20, 88.5};\n    printf(\"Name: %s, Age: %d, Grade: %.2f\\n\", s1.name, s1.age, s1.grade);\n    return 0;\n}"
    },
    {
      "key": 8,
      "topic": "Dynamic Memory Allocation",
      "description": {
        "points": [
          "Dynamic memory allocation in C is managed using functions like `malloc`, `calloc`, `realloc`, and `free`.",
          "The `malloc` function allocates memory during runtime, while `free` releases allocated memory to avoid memory leaks."
        ]
      },
      "sample_code": "#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int *arr = (int *)malloc(5 * sizeof(int));\n    for (int i = 0; i < 5; i++) {\n        arr[i] = i + 1;\n        printf(\"%d\\n\", arr[i]);\n    }\n    free(arr);\n    return 0;\n}"
    },
    {
      "key": 9,
      "topic": "File Handling",
      "description": {
        "points": [
          "C provides functions to handle files such as `fopen`, `fclose`, `fread`, `fwrite`, `fprintf`, and `fscanf`.",
          "The `fopen()` function is used to open a file, and `fclose()` is used to close it.",
          "You can read from and write to files using various input/output functions."
        ]
      },
      "sample_code": "#include <stdio.h>\nint main() {\n    FILE *fptr = fopen(\"file.txt\", \"w\");\n    fprintf(fptr, \"Hello, World!\\n\");\n    fclose(fptr);\n    return 0;\n}"
    },
    {
      "key": 10,
      "topic": "Preprocessor Directives",
      "description": {
        "points": [
          "Preprocessor directives are commands that are processed before compilation begins.",
          "`#include` is used to include header files, and `#define` is used to define constants and macros.",
          "Conditional compilation is done using `#ifdef`, `#ifndef`, `#endif`."
        ]
      },
      "sample_code": "#include <stdio.h>\n#define PI 3.14\nint main() {\n    printf(\"Value of PI: %f\\n\", PI);\n    return 0;\n}"
    }
  ];
  

export const javaProgramming = [
    {
      "key": 1,
      "topic": "Variables and Data Types",
      "description": {
        "points": [
          "Variables are containers for storing data values in Java.",
          "Common data types include `int` (integer), `double` (floating-point number), `char` (character), `boolean` (true/false), and `String` (sequence of characters).",
          "Java is statically typed, meaning you must declare the variable type before using it."
        ]
      },
      "sample_code": "public class Main {\n    public static void main(String[] args) {\n        int x = 10;\n        String name = \"John\";\n        System.out.println(\"Integer: \" + x + \", Name: \" + name);\n    }\n}"
    },
    {
      "key": 2,
      "topic": "Control Flow (if, else, switch)",
      "description": {
        "points": [
          "`if`, `else`, and `switch` are used for decision-making in Java.",
          "The `if` statement executes a block of code if a condition is true.",
          "`else if` allows multiple conditions, and `else` handles the default case when no condition is true.",
          "`switch` is used to execute one out of many blocks of code, based on the value of an expression."
        ]
      },
      "sample_code": "public class Main {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5) {\n            System.out.println(\"Greater than 5\");\n        } else if (x == 5) {\n            System.out.println(\"Equal to 5\");\n        } else {\n            System.out.println(\"Less than 5\");\n        }\n    }\n}"
    },
    {
      "key": 3,
      "topic": "Methods",
      "description": {
        "points": [
          "A method is a block of code that performs a specific task and can be called when needed.",
          "Methods in Java are defined using the `returnType methodName(parameterType parameter)` format.",
          "Methods can return values using the `return` keyword."
        ]
      },
      "sample_code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(add(5, 3));\n    }\n    public static int add(int a, int b) {\n        return a + b;\n    }\n}"
    },
    {
      "key": 4,
      "topic": "Loops (for, while, do-while)",
      "description": {
        "points": [
          "Loops in Java allow repeated execution of a block of code.",
          "The `for` loop is used for iterating over a range of values or arrays.",
          "`while` loops run as long as a condition is true.",
          "`do-while` loops guarantee at least one execution of the loop body."
        ]
      },
      "sample_code": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 0; i < 5; i++) {\n            System.out.println(i);\n        }\n    }\n}"
    },
    {
      "key": 5,
      "topic": "Arrays",
      "description": {
        "points": [
          "Arrays in Java are used to store multiple values of the same type in a single variable.",
          "Array elements are indexed, and the index starts from 0.",
          "You can use loops to iterate through array elements."
        ]
      },
      "sample_code": "public class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5};\n        for (int i = 0; i < arr.length; i++) {\n            System.out.println(arr[i]);\n        }\n    }\n}"
    },
    {
      "key": 6,
      "topic": "Object-Oriented Programming (Classes and Objects)",
      "description": {
        "points": [
          "Java is an object-oriented language, meaning it models real-world entities as objects.",
          "A class is a blueprint for creating objects. It defines attributes (variables) and methods (functions).",
          "Objects are instances of classes and can have state (data) and behavior (methods)."
        ]
      },
      "sample_code": "class Animal {\n    String name;\n    public Animal(String name) {\n        this.name = name;\n    }\n    public void speak() {\n        System.out.println(name + \" makes a sound\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Animal cat = new Animal(\"Cat\");\n        cat.speak();\n    }\n}"
    },
    {
      "key": 7,
      "topic": "Inheritance",
      "description": {
        "points": [
          "Inheritance allows a new class to inherit fields and methods from an existing class.",
          "The `extends` keyword is used to create a subclass that inherits from a superclass.",
          "Inheritance promotes code reuse and establishes a parent-child relationship between classes."
        ]
      },
      "sample_code": "class Animal {\n    public void sound() {\n        System.out.println(\"Animal makes a sound\");\n    }\n}\nclass Dog extends Animal {\n    public void sound() {\n        System.out.println(\"Dog barks\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Dog dog = new Dog();\n        dog.sound();\n    }\n}"
    },
    {
      "key": 8,
      "topic": "Exception Handling",
      "description": {
        "points": [
          "Exception handling in Java allows for managing runtime errors.",
          "The `try` block contains code that might throw an exception, and the `catch` block handles the exception.",
          "`finally` is used to execute code regardless of whether an exception occurs."
        ]
      },
      "sample_code": "public class Main {\n    public static void main(String[] args) {\n        try {\n            int result = 10 / 0;\n        } catch (ArithmeticException e) {\n            System.out.println(\"Cannot divide by zero\");\n        } finally {\n            System.out.println(\"Execution finished\");\n        }\n    }\n}"
    },
    {
      "key": 9,
      "topic": "Interfaces",
      "description": {
        "points": [
          "An interface in Java is a reference type that can contain abstract methods (without implementation).",
          "Classes implement interfaces to provide specific behavior.",
          "Interfaces support multiple inheritance since a class can implement multiple interfaces."
        ]
      },
      "sample_code": "interface Animal {\n    void sound();\n}\nclass Dog implements Animal {\n    public void sound() {\n        System.out.println(\"Dog barks\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Animal dog = new Dog();\n        dog.sound();\n    }\n}"
    },
    {
      "key": 10,
      "topic": "File Handling",
      "description": {
        "points": [
          "Java provides classes such as `FileReader` and `BufferedReader` to handle file reading and writing.",
          "Use `try-with-resources` to automatically close files after reading or writing.",
          "Common operations include reading from and writing to files, as well as exception handling for file errors."
        ]
      },
      "sample_code": "import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        try (BufferedWriter writer = new BufferedWriter(new FileWriter(\"file.txt\"))) {\n            writer.write(\"Hello, World!\");\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}"
    }
  ];
  

  export const cppProgramming = [
    {
      "key": 1,
      "topic": "Variables and Data Types",
      "description": {
        "points": [
          "Variables are used to store data values in C++.",
          "Common data types include `int` (integer), `float` (floating-point number), `char` (character), `bool` (true/false), and `std::string` (string of characters).",
          "C++ is statically typed, meaning the data type must be specified when declaring variables."
        ]
      },
      "sample_code": "#include <iostream>\n#include <string>\nint main() {\n    int x = 10;\n    std::string name = \"John\";\n    std::cout << \"Integer: \" << x << \", Name: \" << name << std::endl;\n    return 0;\n}"
    },
    {
      "key": 2,
      "topic": "Control Flow (if, else, switch)",
      "description": {
        "points": [
          "`if`, `else`, and `switch` are used for decision-making in C++.",
          "The `if` statement runs a block of code if a condition is true.",
          "`else if` allows multiple conditions, and `else` handles the default case when no condition is true.",
          "`switch` is used to execute one out of many blocks of code based on the value of an expression."
        ]
      },
      "sample_code": "#include <iostream>\nint main() {\n    int x = 10;\n    if (x > 5) {\n        std::cout << \"Greater than 5\" << std::endl;\n    } else if (x == 5) {\n        std::cout << \"Equal to 5\" << std::endl;\n    } else {\n        std::cout << \"Less than 5\" << std::endl;\n    }\n    return 0;\n}"
    },
    {
      "key": 3,
      "topic": "Functions",
      "description": {
        "points": [
          "A function in C++ is a block of code that performs a specific task and can be called when needed.",
          "Functions in C++ are defined using the `returnType functionName(parameterType parameter)` format.",
          "Functions can return values using the `return` keyword."
        ]
      },
      "sample_code": "#include <iostream>\nint add(int a, int b) {\n    return a + b;\n}\nint main() {\n    std::cout << add(5, 3) << std::endl;\n    return 0;\n}"
    },
    {
      "key": 4,
      "topic": "Loops (for, while, do-while)",
      "description": {
        "points": [
          "Loops in C++ allow repeated execution of a block of code.",
          "The `for` loop is used to iterate over a range of values or arrays.",
          "`while` loops run as long as a condition is true.",
          "`do-while` loops guarantee at least one execution of the loop body."
        ]
      },
      "sample_code": "#include <iostream>\nint main() {\n    for (int i = 0; i < 5; i++) {\n        std::cout << i << std::endl;\n    }\n    return 0;\n}"
    },
    {
      "key": 5,
      "topic": "Arrays",
      "description": {
        "points": [
          "Arrays in C++ are used to store multiple values of the same type in a single variable.",
          "Array elements are indexed, and the index starts from 0.",
          "You can use loops to iterate through array elements."
        ]
      },
      "sample_code": "#include <iostream>\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    for (int i = 0; i < 5; i++) {\n        std::cout << arr[i] << std::endl;\n    }\n    return 0;\n}"
    },
    {
      "key": 6,
      "topic": "Object-Oriented Programming (Classes and Objects)",
      "description": {
        "points": [
          "C++ is an object-oriented language that models real-world entities as objects.",
          "A class is a blueprint for creating objects. It defines attributes (variables) and methods (functions).",
          "Objects are instances of classes and can have state (data) and behavior (methods)."
        ]
      },
      "sample_code": "#include <iostream>\nclass Animal {\n    public:\n        std::string name;\n        Animal(std::string n) { name = n; }\n        void speak() { std::cout << name << \" makes a sound\" << std::endl; }\n};\nint main() {\n    Animal cat(\"Cat\");\n    cat.speak();\n    return 0;\n}"
    },
    {
      "key": 7,
      "topic": "Inheritance",
      "description": {
        "points": [
          "Inheritance allows a new class to inherit fields and methods from an existing class.",
          "The `:` symbol is used to create a subclass that inherits from a superclass.",
          "Inheritance promotes code reuse and establishes a parent-child relationship between classes."
        ]
      },
      "sample_code": "#include <iostream>\nclass Animal {\n    public:\n        void sound() { std::cout << \"Animal makes a sound\" << std::endl; }\n};\nclass Dog : public Animal {\n    public:\n        void sound() { std::cout << \"Dog barks\" << std::endl; }\n};\nint main() {\n    Dog dog;\n    dog.sound();\n    return 0;\n}"
    },
    {
      "key": 8,
      "topic": "Exception Handling",
      "description": {
        "points": [
          "Exception handling in C++ is done using `try`, `catch`, and `throw`.",
          "The `try` block contains code that might throw an exception, and the `catch` block handles the exception.",
          "`throw` is used to throw an exception manually."
        ]
      },
      "sample_code": "#include <iostream>\nint main() {\n    try {\n        throw 20;\n    } catch (int e) {\n        std::cout << \"Exception number: \" << e << std::endl;\n    }\n    return 0;\n}"
    },
    {
      "key": 9,
      "topic": "Pointers",
      "description": {
        "points": [
          "Pointers are variables that store the memory address of another variable.",
          "The `*` symbol is used to declare a pointer, and the `&` symbol is used to get the address of a variable.",
          "Pointers are often used for dynamic memory allocation and array manipulation."
        ]
      },
      "sample_code": "#include <iostream>\nint main() {\n    int x = 10;\n    int* ptr = &x;\n    std::cout << \"Value: \" << *ptr << std::endl;\n    std::cout << \"Address: \" << ptr << std::endl;\n    return 0;\n}"
    },
    {
      "key": 10,
      "topic": "File Handling",
      "description": {
        "points": [
          "C++ provides libraries such as `fstream` for file handling operations.",
          "You can open, read from, and write to files using `ifstream` (input file stream) and `ofstream` (output file stream).",
          "Always close the file after performing file operations to free system resources."
        ]
      },
      "sample_code": "#include <fstream>\n#include <iostream>\nint main() {\n    std::ofstream outfile(\"file.txt\");\n    outfile << \"Hello, World!\";\n    outfile.close();\n\n    std::ifstream infile(\"file.txt\");\n    std::string line;\n    while (std::getline(infile, line)) {\n        std::cout << line << std::endl;\n    }\n    infile.close();\n    return 0;\n}"
    }
  ];
  

  export const javascriptProgramming = [
  {
    "key": 1,
    "topic": "Variables and Data Types",
    "description": {
      "points": [
        "In JavaScript, variables are declared using `var`, `let`, or `const`.",
        "`let` and `const` were introduced in ES6 to offer block-scoped variables.",
        "Common data types include numbers, strings, booleans, objects, arrays, and `null`.",
        "JavaScript is loosely typed, meaning a variable can hold any data type."
      ]
    },
    "sample_code": "let x = 10;\nconst name = 'John';\nconsole.log(`Number: ${x}, String: ${name}`);"
  },
  {
    "key": 2,
    "topic": "Control Flow (if, else, else if)",
    "description": {
      "points": [
        "JavaScript uses `if`, `else if`, and `else` to handle conditional statements.",
        "The conditions inside `if` and `else if` must return a boolean.",
        "`else` runs if none of the previous conditions are `true`."
      ]
    },
    "sample_code": "let x = 10;\nif (x > 5) {\n    console.log('Greater than 5');\n} else if (x === 5) {\n    console.log('Equal to 5');\n} else {\n    console.log('Less than 5');\n}"
  },
  {
    "key": 3,
    "topic": "Functions",
    "description": {
      "points": [
        "Functions are blocks of code designed to perform a task.",
        "You can declare a function using the `function` keyword or as an arrow function (`=>`) introduced in ES6.",
        "Functions can take arguments and return values."
      ]
    },
    "sample_code": "function greet(name) {\n    return `Hello, ${name}`;\n}\nconsole.log(greet('Alice'));\n\nconst greetArrow = (name) => `Hello, ${name}`;\nconsole.log(greetArrow('Bob'));"
  },
  {
    "key": 4,
    "topic": "Loops",
    "description": {
      "points": [
        "JavaScript supports `for`, `while`, and `do...while` loops for repeating tasks.",
        "`for` loops are commonly used for iterating through arrays.",
        "`forEach` and `map` are methods that can loop over arrays."
      ]
    },
    "sample_code": "for (let i = 0; i < 5; i++) {\n    console.log(i);\n}\n\nconst arr = [1, 2, 3];\narr.forEach(item => console.log(item));"
  },
  {
    "key": 5,
    "topic": "Objects and Arrays",
    "description": {
      "points": [
        "Objects in JavaScript are collections of key-value pairs.",
        "Arrays are a type of object used to store multiple values in a single variable.",
        "You can access object properties using dot notation or square brackets."
      ]
    },
    "sample_code": "const person = { name: 'Alice', age: 25 };\nconsole.log(person.name);\n\nconst arr = [1, 2, 3];\nconsole.log(arr[0]);"
  },
  {
    "key": 6,
    "topic": "Promises and Asynchronous Programming",
    "description": {
      "points": [
        "Promises are used to handle asynchronous operations in JavaScript.",
        "A promise can be in one of three states: pending, resolved, or rejected.",
        "You can chain `.then()` and `.catch()` to handle promise results or errors."
      ]
    },
    "sample_code": "const myPromise = new Promise((resolve, reject) => {\n    setTimeout(() => resolve('Success!'), 1000);\n});\n\nmyPromise.then(result => console.log(result)).catch(error => console.error(error));"
  },
  {
    "key": 7,
    "topic": "ES6 Features",
    "description": {
      "points": [
        "ES6 introduced several new features including `let`, `const`, arrow functions, template literals, and destructuring.",
        "`let` and `const` offer block-scoped variables, unlike `var`.",
        "Arrow functions provide a shorter syntax and do not bind their own `this`."
      ]
    },
    "sample_code": "let name = 'Alice';\nconst greet = `Hello, ${name}`;\nconsole.log(greet);\n\nconst person = { name: 'Bob', age: 30 };\nconst { name: personName, age } = person;\nconsole.log(personName, age);"
  },
  {
    "key": 8,
    "topic": "Modules",
    "description": {
      "points": [
        "Modules in JavaScript allow you to break your code into separate files.",
        "You can export functions, variables, or objects from one file and import them into another.",
        "Modules help maintain a clean and organized codebase."
      ]
    },
    "sample_code": "// math.js\nexport function add(a, b) { return a + b; }\n\n// main.js\nimport { add } from './math.js';\nconsole.log(add(2, 3));"
  },
  {
    "key": 9,
    "topic": "Classes and Objects",
    "description": {
      "points": [
        "Classes in JavaScript are syntactic sugar over the existing prototype-based inheritance.",
        "You can create objects using the `class` keyword and define methods inside them.",
        "Classes can have constructors for initializing object properties."
      ]
    },
    "sample_code": "class Animal {\n    constructor(name) {\n        this.name = name;\n    }\n    speak() {\n        console.log(`${this.name} makes a sound`);\n    }\n}\n\nconst dog = new Animal('Dog');\ndog.speak();"
  },
  {
    "key": 10,
    "topic": "Event Handling",
    "description": {
      "points": [
        "Events are actions that happen in the browser, such as a user clicking a button.",
        "Event listeners are used to run code in response to these events.",
        "The `addEventListener()` method attaches an event handler to an element."
      ]
    },
    "sample_code": "document.getElementById('myBtn').addEventListener('click', function() {\n    alert('Button was clicked!');\n});"
  }
];



export const videoData = [
  {
    id: 1,
    title: "Python Tutorial",
    videoUrl: "https://path_to_your_video/python_tutorial.mp4",
    description: "Learn Python basics in this tutorial.",
  },
  {
    id: 2,
    title: "C++ Tutorial",
    videoUrl: "https://path_to_your_video/cpp_tutorial.mp4",
    description: "Master the fundamentals of C++.",
  },
  {
    id: 3,
    title: "JavaScript Tricks",
    videoUrl: "https://path_to_your_video/javascript_tricks.mp4",
    description: "Explore JavaScript tips and tricks.",
  },
  // Add more videos...
];


export const languages = [
  { name: 'Python', icon: "logo-python" },
  { name: 'Java', icon:require('@/assets/icons/java.png')  }, // Use the correctly required icon
  { name: 'C', icon:require("@/assets/icons/c-.png")   },
  { name: 'C++', icon:require("@/assets/icons/letter-c.png") },
]