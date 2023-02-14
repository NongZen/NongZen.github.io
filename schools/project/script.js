

    // bmi
    function bmi()
  {
    var W = document.getElementById("weight").value;  
    var H_uncal = document.getElementById("height").value; // (var H = document.getElementById("height").value;)  เอาค่า...มาจาก text box
    var H_cal = H_uncal/100;
    var bminfix = W/(H_cal*H_cal);
    var bmi = bminfix.toFixed(2); // tofix (x) จำนวนทศนิยม
    document.getElementById("bmi").innerHTML = bmi;
    
    if (bmi > 30) {
      document.getElementById("bmi_txt").innerHTML = "อยู่ในภาวะ: อ้วนระดับ2 (อ้วนมาก)";
      document.getElementById("bmi_tex").innerHTML = "หมายถึง: ภาวะนําหนักเกินมากทีสุดโอกาสการเกิดโรคแทรกซ้อนอย่างโรคอ้วน";
    } else if (bmi >= 25) {
      document.getElementById("bmi_txt").innerHTML = "อยู่ในภาวะ: อ้วนระดับ1 (อ้วน)";
      document.getElementById("bmi_tex").innerHTML = "หมายถึง: ภาวะนําหนักเกินมากมีโรคแทรกซ้อนในระยะอ้วนเริมต้น";
    } else if (bmi >= 23) {
      document.getElementById("bmi_txt").innerHTML = "อยู่ในภาวะ: น้ำหนักเกินมาตรฐาน (ท้วม)";
      document.getElementById("bmi_tex").innerHTML = "หมายถึง: ภาวะน้ำหนักเกินระยะเริ่มต้น เริ่มมีโรคแทรกซ้อนเล็กน้อย";
    } else if (bmi >= 18.5) {
      document.getElementById("bmi_txt").innerHTML = "อยู่ในภาวะ: น้ำหนักมาตรฐาน (สมส่วน)";
      document.getElementById("bmi_tex").innerHTML = "หมายถึง: โอกาสการเกิดโรคแทรกซ้อน น้อยที่สุด";
    } else if (bmi > 0) {
      document.getElementById("bmi_txt").innerHTML = "อยู่ในภาวะ: น้ำหนักต่ำกว่าเกณฑ์ (ผอม)";
      document.getElementById("bmi_tex").innerHTML = "หมายถึง: มีความเสี่ยงเกิดโรคขาดสารอาหาร";
    }

  }
  // end bmi

  // triangle
  function Tr()
  {
  var basetr = document.getElementById("basetr").value
  var heightr = document.getElementById("heightr").value
  var tr = 0.5 * basetr * heightr
  document.getElementById("tr").innerHTML = tr 
  }

  // end triangle

  // ภาษี 
  function tax()
  {
    var S = document.getElementById("income").value; 
    document.getElementById("tax").innerHTML = S;
    
    if (S >= 5000001 ) {
      document.getElementById("tax_txt").innerHTML = "เสียภาษี 35%";
      var taxcal = 35;
    } else if (S >= 2000001) {
      document.getElementById("tax_txt").innerHTML = "เสียภาษี 30%";
      var taxcal = 30;
    } else if (S >= 1000001) {
      document.getElementById("tax_txt").innerHTML = "เสียภาษี 25%";
      var taxcal = 25;
    } else if (S >= 750001) {
      document.getElementById("tax_txt").innerHTML = "เสียภาษี 20%";
      var taxcal = 20;
    } else if (S >= 500001) {
      document.getElementById("tax_txt").innerHTML = "เสียภาษี 15%";
      var taxcal = 15;
    } else if (S >= 300001) {
      document.getElementById("tax_txt").innerHTML = "เสียภาษี 10%";
      var taxcal = 10;
    } else if (S >= 150001) {
      document.getElementById("tax_txt").innerHTML = "เสียภาษี 5%";
      var taxcal = 5;
    } else {
      document.getElementById("tax_txt").innerHTML = "จะไม่เสียภาษี";
      var taxcal = 0;
    }
    if (taxcal > 0 ){
      var tax_tex = S * taxcal / 100;
      var tax_tex = tax_tex.toFixed(2);
      var tax_tex2 = S - tax_tex;
      var tax_tex2 = tax_tex2.toFixed(2);
      document.getElementById("tax_word").innerHTML = "จะเสียภาษี (บาท)";
      document.getElementById("tax_tex").innerHTML = tax_tex;
      document.getElementById("tax_word2").innerHTML = "จะเหลือเงิน (บาท)";
      document.getElementById("tax_tex2").innerHTML = tax_tex2;
      document.getElementById("havetax").style.display = "block"
    } else {
      document.getElementById("havetax").style.display = "none"
    }
    
  }
    // จบภาษี

    // lottery

    function random(){
      var n1 = Math.floor(Math.random()*10)
      var n2 = Math.floor(Math.random()*10)
      var n3 = Math.floor(Math.random()*10)
      var n4 = Math.floor(Math.random()*10)
      var n5 = Math.floor(Math.random()*10)
      var n6 = Math.floor(Math.random()*10)
       
  
      for(var i = 0 ; i < 10 ; i++ )
      {
        if (n1==i) {
            document.getElementById("n1").src= 'http://www.ac54346.lnw.mn/wp-content/uploads/2023/01/' + i + '.png'
        }
        if (n2 == i) {
            document.getElementById("n2").src= 'http://www.ac54346.lnw.mn/wp-content/uploads/2023/01/' + i + '.png'
        }
        if (n3 == i) {
            document.getElementById("n3").src= 'http://www.ac54346.lnw.mn/wp-content/uploads/2023/01/' + i + '.png'
        }
        if (n4 == i) {
            document.getElementById("n4").src= 'http://www.ac54346.lnw.mn/wp-content/uploads/2023/01/' + i + '.png'
        }
        if (n5 == i) {
            document.getElementById("n5").src= 'http://www.ac54346.lnw.mn/wp-content/uploads/2023/01/' + i + '.png'
        }
        if (n6 == i) {
            document.getElementById("n6").src= 'http://www.ac54346.lnw.mn/wp-content/uploads/2023/01/' + i + '.png'
        }
      }
    }

      // end lottery

      //factorial
      
      function xpo2(n , nn){
        let sum = 1
         for(let i =0 ; i < nn ; i++){
           sum = sum*n
         }
         return sum
      }
    
    
      function fac(){
        let x = document.getElementById('cal_p7').value
        let op = document.getElementById("result_p7")
        if (x !== ""){
          if (x <= 170){
          op.innerHTML = ( x + " Factorial is " + factorial(Number(x)))
          } else {
            op.innerHTML = ("more than factorial of 170 is infinity")
          }
        } else {
          alert("you have to fill out this number field")
          return false
        }
      }
    
      function p2(){
        let x = document.getElementById('cal_p7').value
        let x2 = document.getElementById('ex').value
        let op = document.getElementById("result_p7")
        if (x2 !== ""){
          if (x !== "" ){
            if (x2 <= 100){
              op.innerHTML = (x+ " Power " + x2 +" is " + xpo2(Number(x) , Number(x2)))
            } else {
              alert("the power won't more than 100")
            }
          } else {
            alert("you have to fill out this number field")
          }
        } else {
          alert("you have to fill out \" power of \" field")
        }
      }
    
      function sqrt(){
        let x = document.getElementById('cal_p7').value
        let op = document.getElementById("result_p7")
          if (x !== "" ){
            op.innerHTML = (" Square root of "+ x + " is " + Math.sqrt(Number(x)).toFixed(2) )
          } else {
            alert("you have to fill out this number field")
            return false
        }
      }
      
      // end factorial

      // multiplication
      function multitable(){
        let show =""
        let i = Number(document.getElementById("getnum_p8").value)
        let i2 = 12
        if (document.getElementById("getnum2_p8").value >= 1){
          i2 = document.getElementById("getnum2_p8").value
        }
        
        for (let ii = 1 ; ii <= i2 ; ii ++){
          show += i + " X " + ii + " = " + i*ii + "<br>"
        }
          show += "<br>"
        document.getElementById("text_p8").innerHTML= show
      }
      // end multiplication

      // snake script begonee

              
        var snake = ""
        var look = ""
        var lookemoji = ""
        var time = ""
        var snakelineh = ""
        var snakelinel = ""
        var games = ""
        var getp = ""
        var timer = ""
        var always = ""

        function start(){
            document.getElementById("start").style.display = "none"
            document.addEventListener('keydown', function(key) {
                if(key.keyCode == 87) {
                    look = 1
                }else if(key.keyCode == 83) {
                    look = 2
                }else if(key.keyCode == 68) {
                    look = 3
                }else if(key.keyCode == 65) {
                    look = 4
                }
            })
            game()
            spawn(randompoint())
        }

        function pause(){
            alert("pausing... to resume press ok")
        }

        function game(){
            snake = {
                speed:snakespeed(),
                point:0,
            }
            look = ""
            time = timeup() 
            snakelineh = 0
            snakelinel = 0
            spawnwall()
            let i = 0
            getp = setInterval(() => {
                if (lose() == true){
                    endgame("<span class='text-danger'>You Lose</span>") 
                }
                if (findboost() == false){
                    if (findboost() == false && i > 0){
                        clearwall()
                        look = 0
                        setTimeout(() => {
                            spawnboost()
                            setTimeout(() => {
                                spawnwall()
                            }, 50);
                        }, 100);
                    } else {
                        spawnboost()
                        i++
                    }
                }
                getpoint()
            }, snake.speed /2);
            setTimeout(() => {
                games = setInterval(() => {
                    if (lose() == true){
                        endgame("<span class='text-danger'>You Lose</span>") 
                    }
                    moveto()
                    }, snake.speed /2);
            }, 5)

            always = setInterval(() => {
                setlookemoji()
                document.getElementById("score_p9").innerHTML = snake.point
                document.getElementById("direction_p9").innerHTML = lookemoji
            }, 10);

            if (time !== 0){
                timer = setInterval(() => {
                    time = time - 10
                    if (time == 0){
                        endgame("<span class='text-success'>Its Timeup</span>")
                    }
                    
                }, 10)
            } 
        }

        function setlookemoji(){
            if (look == 1){
                lookemoji = "⬆"
            } else if (look == 2){
                lookemoji = "⬇"
            } else if (look == 3){
                lookemoji = "➡"
            } else if  (look == 4){
                lookemoji = "⬅"
            } else if (look == 0){
                lookemoji = " <span class='btn-dark text-light'>pausing press any control key to resume</span>"
            }
        }


        function endgame(x){
            for (let i = 1; i <= 5; i++) {
              for (let ii = 1 ; ii <= 11 ; ii++){
                  document.getElementById("t" + i + "_" + ii).innerHTML = "⚪"
              }
            }
            clearInterval(games)
            clearInterval(getp)
            clearInterval(timer)
            clearInterval(always)
            document.getElementById("uppergame").style.display = 'none'
            document.getElementById("lowergame").style.display = 'none'
            document.getElementById("resultgame").style.display = 'block'
            document.getElementById("endresult").innerHTML = snake.point
            document.getElementById("pj_name").innerHTML = "Snake Game"
            document.getElementById("cause_p9").innerHTML = x
            document.getElementById("score_p9").innerHTML = ""
            document.getElementById("direction_p9").innerHTML = ""
        }

        function reset(){
            document.getElementById("uppergame").style.display = 'block'
            document.getElementById("lowergame").style.display = 'block'
            document.getElementById("resultgame").style.display = 'none'
            document.getElementById("pj_name").innerHTML = "Snake Game <br> <h6 class='mt-3'> W A S D to control</h6>"
            document.getElementById("start").style.display = "block"
            document.getElementById("direction_p9").innerHTML = ""
            for (let i = 1; i <= 5; i++) {
                for (let ii = 1 ; ii <= 11 ; ii++){
                    document.getElementById("t" + i + "_" + ii).innerHTML = "⚪"
                }
            }
        }


        function lose(){
            if ( look == 1 && issnakeatcorner("u") == false ){
                if(document.getElementById(near(1)).innerHTML == "🗻" ){
                    return true
                }
            } else if ( look == 2 && issnakeatcorner("d") == false ){
                if (document.getElementById(near(2)).innerHTML == "🗻"){
                    return true
                }
            } else if ( look == 3 && issnakeatcorner("r") == false ){
                if (document.getElementById(near(3)).innerHTML == "🗻"){
                    return true
                }
            } else if ( look == 4 && issnakeatcorner("l") == false ){
                if (document.getElementById(near(4)).innerHTML == "🗻"){
                    return true
                } 
            } else if (issnakeatcorner() == true){
                let h = findsnakehead("h")
                let l = findsnakehead("l")
                if(look == 1 && document.getElementById("t" + 5 + "_" + l).innerHTML == "🗻"){
                    return true
                } else if (look == 2 && document.getElementById("t" + 1 + "_" + l).innerHTML == "🗻"){
                    return true
                } else if (look == 3 && document.getElementById("t" + h + "_" + 1).innerHTML == "🗻"){
                    return true
                } else if (look == 4 && document.getElementById("t" + h + "_" + 11).innerHTML == "🗻"){
                    return true
                }
            } return false
        }

        function spawnwall(){
            let hard = Math.floor(Math.random()* ( 16 - 10))+10
            let l = randompoint("l")
            let h = randompoint("h")
            let way = Math.floor(Math.random()*4) + 1
            for (let i = 0; i <= hard; i++) {
                if (way == 1 && h !== 5){
                    h = Math.floor(Math.random()* (5 - 1)) + 1
                }else if (way == 2 && h !== 1){
                    h = Math.floor(Math.random()* ( 5 - 1)) + 1
                }else if (way == 3 && l !== 11){
                    l = Math.floor(Math.random()* ( 11 - 1)) + 1
                }else if (way == 4 && l !== 1){
                    l = Math.floor(Math.random()* ( 11 - 1)) + 1
                }
                way = Math.floor(Math.random()*4) + 1
                if (findsnakehead() !== ("t" + h + "_" + l)){
                    document.getElementById("t" + h + "_" + l).innerHTML = "🗻"
                }
            }


        }




        function moveto(){
            let h = findsnakehead("h")
            let l = findsnakehead("l")
            if (look == 1){
                let m = near(1)
                
                document.getElementById(findsnakehead()).innerHTML = "⚪"
                if (h - 1 == 0){
                    document.getElementById("t" + 5 + "_" + l).innerHTML = "🐍"
                } else {
                    document.getElementById(m).innerHTML = "🐍"
                }
            } else if (look == 2){
                let m = near(2)
                document.getElementById(findsnakehead()).innerHTML = "⚪"
                if (h + 1 == 6){
                    document.getElementById("t" + 1 + "_" + l).innerHTML = "🐍"
                } else {
                    document.getElementById(m).innerHTML = "🐍"
                }
            } else if (look == 3){
                let m = near(3)
                document.getElementById(findsnakehead()).innerHTML = "⚪"
                if (l + 1 == 12){
                    document.getElementById("t" + h + "_" + 1).innerHTML = "🐍"
                } else {
                    document.getElementById(m).innerHTML = "🐍"
                }
            } else if (look == 4){
                let m = near(4)
                document.getElementById(findsnakehead()).innerHTML = "⚪"
                if (l - 1 == 0){
                    document.getElementById("t" + h + "_" + 11).innerHTML = "🐍"
                } else {
                    document.getElementById(m).innerHTML = "🐍"
                }
            }
            
        }

        function getpoint(){
            let get =""
            if(look == 1 && document.getElementById(near(1)).innerHTML == "🌟" ){
                get = true
            } else if (look == 2 && document.getElementById(near(2)).innerHTML == "🌟" ){
                get = true
            } else if (look == 3 && document.getElementById(near(3)).innerHTML == "🌟" ){
                get = true
            } else if (look == 4 && document.getElementById(near(4)).innerHTML == "🌟" ){
                get = true
            } else {
                get = false
            }

            if (get == true){
                snake.point++
            }


        }



        function near(x){
            let left = findsnakehead("l") - 1
            let right = findsnakehead("l") + 1
            let up = findsnakehead("h") - 1
            let down = findsnakehead("h") + 1
            if (x == 4){
                return String("t" + findsnakehead("h") + "_" + left)
            } else if (x == 3){
                return String("t" + findsnakehead("h") + "_" + right)
            } else if (x == 1){
                return String("t" + up + "_" + findsnakehead("l"))
            } else if (x == 2){
                return String("t" + down + "_" + findsnakehead("l"))
            }
        }

        function randompoint(y){
            
            snakelinel = Math.floor(Math.random() * (11 - 1 + 1)) + 1
            snakelineh = Math.floor(Math.random() * (5 - 1 + 1)) + 1
            if ( y == "h"){
                return snakelineh
            } else if (y == "l"){
                return snakelinel
            } else {
                return ("t"+ snakelineh + "_" + snakelinel)
            }
        }

        function spawnboost(){ 
            let xx = setInterval(() => {
                let x = randompoint()
                let y = findsnakehead()
                if (x !== y){
                document.getElementById(x).innerHTML = "🌟"
                clearInterval(xx)
                }
            }, 1)
            
        }

        function spawn(){
            document.getElementById(randompoint()).innerHTML = "🐍"
        }

        function findsnakehead(y){
            if ( y == "h"){
                for (let i = 1; i <= 5; i++) {
                    for (let ii = 1 ; ii <= 11 ; ii++){
                        if (document.getElementById("t" + i + "_" + ii).innerHTML == "🐍"){
                            return ( i )
                        }
                    }
                }
            } else if (y == "l"){
                for (let i = 1; i <= 5; i++) {
                    for (let ii = 1 ; ii <= 11 ; ii++){
                        if (document.getElementById("t" + i + "_" + ii).innerHTML == "🐍"){
                            return ( ii )
                        }
                    }
                }
            } else {
                for (let i = 1; i <= 5; i++) {
                    for (let ii = 1 ; ii <= 11 ; ii++){
                        if (document.getElementById("t" + i + "_" + ii).innerHTML == "🐍"){
                            return ("t" + i + "_" + ii)
                        }
                    }
                }
            }
        }

        function findboost(){
            for (let i = 1; i <= 5; i++) {
                for (let ii = 1 ; ii <= 11 ; ii++){
                    if (document.getElementById("t" + i + "_" + ii).innerHTML == "🌟"){
                        return ("t" + i + "_" + ii)
                    }
                }
            }
            return false
        }



        function snakespeed(){
            let is = document.getElementById("inputspd").value
            if ( is !== "" && Number(is) !== 0){
                return 1000 / is
            } else {
                return 1000
            }
        }

        function timeup(){
            let is = document.getElementById("inputtime").value
            if ( is !== "" && Number(is) !== 0){
                return is * 1000
            } else {
                return 0
            }
        }

        function issnakeatcorner(y){
            if (y == "l"){
                for (let i = 1; i <= 5; i++) {
                    for (let ii = 1 ; ii <= 11 ; ii++){
                        if (document.getElementById("t" + i + "_" + ii).innerHTML == "🐍"){
                            if (ii == 1){
                                return true
                            }
                        }
                    }
                }
                return false
            } else if (y == "r"){
                for (let i = 1; i <= 5; i++) {
                    for (let ii = 1 ; ii <= 11 ; ii++){
                        if (document.getElementById("t" + i + "_" + ii).innerHTML == "🐍"){
                            if (ii == 11){
                                return true
                            }
                        }
                    }
                }
            } else if (y == "u"){
                for (let i = 1; i <= 5; i++) {
                    for (let ii = 1 ; ii <= 11 ; ii++){
                        if (document.getElementById("t" + i + "_" + ii).innerHTML == "🐍"){
                            if (i == 1){
                                return true
                            }
                        }
                    }
                }
            } else if (y == "d"){
                for (let i = 1; i <= 5; i++) {
                    for (let ii = 1 ; ii <= 11 ; ii++){
                        if (document.getElementById("t" + i + "_" + ii).innerHTML == "🐍"){
                            if (i == 5){
                                return true
                            }
                        }
                    }
                }
            } else {
                for (let i = 1; i <= 5; i++) {
                    for (let ii = 1 ; ii <= 11 ; ii++){
                        if (document.getElementById("t" + i + "_" + ii).innerHTML == "🐍"){
                            if (i == 1){
                                return true
                            } else if (i == 2){
                                if (ii == 1 || ii == 11){
                                    return true
                                }
                            } else if (i == 3){
                                if (ii == 1 || ii == 11){
                                    return true
                                }
                            } else if (i == 4){
                                if (ii == 1 || ii == 11){
                                    return true
                                }
                            } else if (i == 5){
                                return true
                            }
                        }
                    }
                }
            }
            return false
            
        }

        function clearwall(){
            for (let i = 1; i <= 5; i++) {
                for (let ii = 1 ; ii <= 11 ; ii++){
                    if (document.getElementById("t" + i + "_" + ii).innerHTML == "🗻"){
                        document.getElementById("t" + i + "_" + ii).innerHTML = "⚪"
                    }
                }
            }
          } 

    // end snake script "400 บรรทัดเองเอาไรมาก ได้แค่นี้แหละ"
      

    var page = Number(0)
    var blanks = false

    var project =[
        "not a project",
        document.getElementById("p1"),
        document.getElementById("p2"),
        document.getElementById("p3"),
        document.getElementById("p4"),
        document.getElementById("p5"),
        document.getElementById("p6"),
        document.getElementById("p7"),
        document.getElementById("p8"),
        document.getElementById("p9")
    ]

    function show(n){
        project.forEach(x => {
      if (x == "not a project"){
      } else if (x == n){
        x.style.display = "block"
        page = Number(project.indexOf(x))
        projectdesc(x)
      } else {
        x.style.display = "none"
      }
      })
    }

    function blank(){
      project.forEach(x => {
        if (x == "not a project"){
      } else {
        x.style.display = "none"
      }
      page = Number(0)
      blanks = true
      projectdesc(project[0])

      })
    }

    function previous() {
      page = Number(page - 1)
      if (page !== 0 && page <= 10){
        show(project[page])
      } else if (page == 0 ){
        show(project[(project.length - 1)])
      }
    }

    function next() {
      page = Number(page + 1)
      if (page !== 10 && page > 0){
        show(project[page])
      } else if (page == 10){
        show(project[1])
      } 
    }
    
    function projectdesc(n){
      if (n == project[0]){
          document.getElementById("pj_name").innerHTML = ""
          document.getElementById("pj_num").innerHTML = "There no project here..."
          document.getElementById("pj_blank").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> <br> Choose any project...  <br> <br> "  
          document.getElementById("pj_blank").innerHTML += "<button  class=\"btn-warning\"> <a href=\"https://www.youtube.com/watch?v=HIcSWuKMwOw\" target=\"_blank\">Or Try Click On Me</a></button></h5> <br>"
      }  
        else if (n == project[1]){
          document.getElementById("pj_blank").innerHTML = ""
          document.getElementById("pj_num").innerHTML = "The First Project"
          document.getElementById("pj_name").innerHTML = "My first bootstrap page"
      } 
        else if (n == project[2]){
          document.getElementById("pj_blank").innerHTML = ""
          document.getElementById("pj_num").innerHTML = "The Second Project"
          document.getElementById("pj_name").innerHTML = "Boostrap test"
      } 
        else if (n == project[3]){
          document.getElementById("pj_blank").innerHTML = ""
          document.getElementById("pj_num").innerHTML = "The Third Project"
          document.getElementById("pj_name").innerHTML = "BMI"
      } 
        else if (n == project[4]){
          document.getElementById("pj_blank").innerHTML = ""
          document.getElementById("pj_num").innerHTML = "The Fourth Project"
          document.getElementById("pj_name").innerHTML = "Triangle area"
      } 
        else if (n == project[5]){
          document.getElementById("pj_blank").innerHTML = ""
          document.getElementById("pj_num").innerHTML = "The Fifth Project"
          document.getElementById("pj_name").innerHTML = "TAX"
      } 
        else if (n == project[6]){
          document.getElementById("pj_blank").innerHTML = ""
          document.getElementById("pj_num").innerHTML = "The Sixth Project"
          document.getElementById("pj_name").innerHTML = "Lottery"
      } 
        else if (n == project[7]){
          document.getElementById("pj_blank").innerHTML = ""
          document.getElementById("pj_num").innerHTML = "The Seventh Project"
          document.getElementById("pj_name").innerHTML = "<h2 class=\"mt-4 text-info\"> Factorial and The Custom Exponent</h2>"
      } 
        else if (n == project[8]){
          document.getElementById("pj_blank").innerHTML = ""
          document.getElementById("pj_num").innerHTML = "The Eigth Project"
          document.getElementById("pj_name").innerHTML = "Multiplication Table"
      } 
        else if (n == project[9]){
          document.getElementById("pj_blank").innerHTML = ""
          document.getElementById("pj_num").innerHTML = "The Ninth Project"
          document.getElementById("pj_name").innerHTML = "<span class='text-success'>Snake Game</span> <br> <h6 class='mt-3'> W A S D to control</h6>"
      } 
    }
