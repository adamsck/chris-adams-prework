<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Activity 3</title>
</head>

<body>

    <script>
        const stuList = {'Adam','Barb','Christie'};
        const stuName1 = prompt('please add a new student to the class');
        const stuName2 = prompt('please add a new student to the class');
        const stuName3 = prompt('please add a new student to the class');

        stuList.push(stuName1);
        stuList.push(stuName2);
        stuList.push(stuName3);

        for (let i = 0; i < stuList.length; i++){
            const student = stuList[i];
            console.log(student);
        }


    </script>


</body>

</html>