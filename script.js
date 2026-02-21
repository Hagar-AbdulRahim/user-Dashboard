let name = document.queryselector(".name");
let age = document.queryselector(".age");
let city = document.queryselector(".city");
let send = document.queryselector(".send");
let cancel = document.queryselector(".cancel");

async function addustudent(student) {
  let student_data = await fetch(
    "https://6925788582b59600d723c4d5.mockapi.io/student",
    {
      mathod: "POST",
      headers: { "Content Type": "application/json" },
      body: JSON.stringify(student), // object  to json
    }
  );
  const res = await student_data.json();
  console.log(res);
}


addustudent({
  name: "hagar",
  age: "22",
  city: "$sohag",
});
